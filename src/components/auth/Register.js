import React from 'react'

const Register = () => {
  return (
    <div className="container-fluid p-0">
        <div className="register">
            <div className="register__content">

                <h1>Register</h1>

                <form>
                    <input 
                        type="text"
                        placeholder='Name'
                    />

                    <input 
                        type="email"
                        placeholder='Email'
                    />

                    <input 
                        type="password"
                        placeholder='Password'
                    />

                    <input 
                        type="password"
                        placeholder='Confirm password'
                    />

                    <button 
                        className="btn-register">Register</button>
                </form>

                <div className="register__content__options">
                    <p>Do you already have an account?</p>
                    <a href="!#">Login</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register