import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogin } from '../../actions/auth'
import useForm from '../../hooks/useForm'
import validator from 'validator'
import { removeMsgError, showMsgError } from '../../actions/ui'

const Login = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
    });
    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if(!validator.isEmail(email)){
            dispatch(showMsgError('Email incorrecto'))
            return false;
        }else if(password.trim().length < 6){
            dispatch(showMsgError('La contraseña debe ser mayor a 6 caracteres'))
            return false;
        }
        dispatch(removeMsgError())
        dispatch(startLogin(email, password))
    }


  return (
    <div className="container-fluid p-0">
        <div className="login">
            <div className="login__content">

                <h1>Login</h1>

                {
                    msgError && <p className="msg-error">{msgError}</p>
                }

                <form
                    onSubmit={handleLogin}
                >
                    <input 
                        type="email"
                        placeholder='Email'
                        name="email"
                        onChange={handleInputChange}
                    />

                    <input 
                        type="password"
                        placeholder='Password'
                        name="password"
                        onChange={handleInputChange}
                    />

                    <input 
                        type="submit"
                        className="btn-login"
                        value="Login"
                    />
                </form>

                <div className="login__content__options">
                    <p>You do not have an account?</p>
                    <Link to='/auth/register' onClick={() => dispatch(removeMsgError())}>Create account</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login