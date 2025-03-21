import React from 'react'

const LoginForm = ({ handleUserLogin, setShowLogin, showLogin }) => {
  return (
    <div className="input-container flex justify-cnter align-center flex-col gap-5 px-5 mt-10">
        <input type='text' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <div className="button-container flex justify-center align-center gap-5 flex-col">
            <input type='button' value='Login' className="btn w-24 m-auto" onClick={handleUserLogin}/>
            <p className="text-center text-sm">Forgot password?</p>
        </div>
        <div className="seperator border-2 rounded-md"></div>
        <input type='button' value='Sign Up' className="btn" onClick={() => {setShowLogin(!showLogin)}}/>
    </div>
  )
}

export default LoginForm;