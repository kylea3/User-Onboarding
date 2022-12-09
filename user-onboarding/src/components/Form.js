import React from 'react';

const Form = (props) => {
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        props.update(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        props.submit()
    }
    return(
        <form onSubmit={onSubmit}>
            <h2>Create an Account</h2>
            <div className="errors">
                <div>{props.errors.fullName}</div>
                <div>{props.errors.email}</div>
                <div>{props.errors.password}</div>
                <div>{props.errors.termsOfUse}</div>
            </div>
            <label>Full Name
                <input 
                type = 'text'
                name='fullName'
                value = {props.values.fullName}
                onChange={onChange}
                />
            </label>
            <label>Email
                <input 
                type = 'email'
                name='email'
                value = {props.values.email}
                onChange={onChange}
                />
            </label>
            <label> Password (6 characters minimum):
                <input 
                type = 'password'
                name='password'
                value = {props.values.password}
                onChange={onChange}
                />
            </label>
            <label> Terms of Service
                <input
                type = 'checkbox'
                name='termsOfUse'
                checked= {props.values.termsOfUse}
                onChange={onChange}
                />
            </label>
            <button type='submit' disabled={props.disabled}>Submit</button>
        </form>

    );
} 

export default Form;