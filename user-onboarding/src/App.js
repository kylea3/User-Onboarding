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
    fullName: '',
    email: '',
    password: '',
    termsOfUse: ''
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
    axios.put('https://reqres.in/api/users', newUser)
    .then(res => {
      console.log(res)
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
      {user.map(user => {
        <div key={user.id}>
          <h2>{user.fullName}</h2>
          <p>{user.email}</p>
        </div>
      })
      }
    </div>  
  );
}

export default App;
