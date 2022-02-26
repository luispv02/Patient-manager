import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../assets/images/user.svg'

const Login = () => {
  return (
    <div className="container-fluid p-0">
        <div className="login">
            <div className="login__content">

                <h1>Login</h1>

                <form>
                    <input 
                        type="email"
                        placeholder='Email'
                    />

                    <input 
                        type="password"
                        placeholder='Password'
                    />

                    <button 
                        className="btn-login">Login</button>
                </form>

                <div className="login__content__options">
                    <p>You do not have an account?</p>
                    <Link to='/register'>Create account</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login