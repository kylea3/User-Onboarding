import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/formSchema'; 

function App() {
  const initialFormValues = {
    fullName: '',
    email: '',
    password: '',
    termsOfUse: false
  }
  const initialFormErrors = {
    fullName: 'Full Name is required',
    email: 'Must be a valid email address',
    password: 'Must be 6 chars minimum',
    termsOfUse: 'This field must be checked'
  }
  const initialDisabled = true;
  const initialUser = []

  const [user, setUser] = useState(initialUser);
  const [values, setValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch( err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const onSubmit = () => {
    const newUser = {
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
      termsOfUse: ["termsOfUse"].filter(tos => !!values[tos])
    }
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUser([ res.data, ...user]);
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => setValues(initialFormValues))

  }

  const onUpdate = (name, value) => {
      validate(name, value);
      setValues({ ...values, [name]: value })
  }
  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(values).then(valid => setDisabled(!valid))
  }, [values])
  return (
    <div className="App">
      <Form 
        values={values}
        submit={onSubmit}
        update={onUpdate}
        disabled={disabled}
        errors={formErrors}
      />
      {user.map(use => {
        <div key={use.id}>
          <h2>{use.fullName}</h2>
          <p>{use.email}</p>
          <p>{use.createdAt}</p>
        </div>
      })}
    </div>  
  );
}

export default App;
