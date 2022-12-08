import React from 'react';

const Form = (props) => {

    const onChange = () => {

    }
    return(
        <form>
            <label>Full Name
                <input 
                type = 'text'
                name='name'
                value = 'value'
                onChange={onChange}
                />
            </label>
            <label>Email
                <input 
                type = 'email'
                name='name'
                value = 'value'
                onChange={onChange}
                />
            </label>
            <label> Password (6 characters minimum):
                <input 
                type = 'password'
                name='name'
                value = 'value'
                onChange={onChange}
                />
            </label>
            <label>
                <input Terms of Service
                type = 'checkbox'
                name='name'
                checked= "true"
                onChange={onChange}
                />
            </label>
            <button type='submit'>Submit</button>
        </form>

    );
} 

export default Form;