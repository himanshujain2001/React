import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  async function onSubmit(data){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting data: ", data)
  }
      //  OR

  // const value = data => console.log("Submitting data: ", data) // where data is parameter of functn since there is only 1 parameter expected so
  // no need to write it in ()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username:</label>
        <input className= {errors.username ? 'display-error' : "" } {...register("username",
         { 
          required: true,
          minLength: {value: 3, message: "Username should be of minimum 3 characters"},
          maxLength: 10 
         }
        )}/>
        {errors.username && <p className='error-message'>{errors.username.message}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input className= {errors.password ? 'display-error' : "" } {...register("password", 
         { 
           required: true,
           minLength: {value: 3, message: "Password should be of minimum 3 characters"},
           maxLength: {value: 12, message: "Password should be of maximum 12 characters"}
         }
        )}/>
        {errors.password && <p role='alert' className='error-message'>{errors.password.message}</p>}
      </div>
      <button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
    </form>
  )
}

export default App
