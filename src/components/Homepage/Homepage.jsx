import React from 'react'
import Useformdata from '../CustomHook/Useformdata'
import './Homepage.css'
export const Homepage = () => {
  const { FormData, errors, handleChange, handleSubmit, isSubmitted } =
    Useformdata()

  const submitForm = (data) => {
    console.log('form submitted', data)
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, submitForm)}>
        <div>
          <label htmlFor='Username'> Enter the username : </label>
          <input
            type='text'
            name='Username'
            id='Username'
            value={FormData.Username}
            onChange={handleChange}
          ></input>
        </div>
        {errors.Username && <p style={{ color: 'red' }}>{errors.Username}</p>}

        <div>
          <label htmlFor='Email'> Enter your EmailId : </label>
          <input
            type='Email'
            name='Email'
            id='Email'
            value={FormData.Email}
            onChange={handleChange}
          ></input>
        </div>
        {errors.Email && <p style={{ color: 'red' }}>{errors.Email}</p>}

        <div>
          <label htmlFor='Password'> Enter your Password: </label>
          <input
            type='password'
            name='Password'
            id='Password'
            value={FormData.Password}
            onChange={handleChange}
          ></input>
        </div>
        {errors.Password && <p style={{ color: 'red' }}>{errors.Password}</p>}

        <button type='submit'>Submit</button>
      </form>
      {isSubmitted && (
        <div className='success'>
          <h2>Success!</h2>
          <p>{FormData.Username}, you have successfully registered!</p>
        </div>
      )}
    </div>
  )
}
