import React from 'react';
import { useFormik } from 'formik';
// import { signUpForm } from './FormData';
// import useLocalStorage from '../utils/useLocalStorage';

const SignUp = () =>{
    // const { registrations, addRegistration } = useLocalStorage();
    const { values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues: {
          name: '',
          phoneNumber: '',
          email: '',
        },
        validationSchema:"",
        onSubmit:(values)=> {
            addRegistration(values);
        },
    });
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder='Name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.name}
                />
                {touched.name && errors.name ? ( <p className='form-error'>{errors.name}</p> ) : null}
                
            </div>
            <div>
                <label htmlFor="phone"> Phone number </label>
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                    placeholder='Phone number'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.phoneNumber}
                />
                {touched.phoneNumber && errors.phoneNumber ? ( <p className='form-error'>{errors.phoneNumber}</p> ) : null} 
            </div>

            <div>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.email}
                />
                {touched.email && errors.email ? ( <p className='form-error'>{errors.email}</p> ) : null}
            </div>

            <button type="submit">Continue</button>
    </form>
); 
}

export default SignUp;