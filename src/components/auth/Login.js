import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogin } from '../../actions/auth'
import useForm from '../../hooks/useForm'
import validator from 'validator'
import { removeMsgError, showMsgError } from '../../actions/ui'

const Login = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => [state.ui.msgError, state.ui.loading]);
    const msgError = state[0]
    const loading = state[1]

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
    });
    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if(!validator.isEmail(email)){
            dispatch(showMsgError('Invalid email'))
            return false;
        }else if(password.trim().length < 6){
            dispatch(showMsgError('The password must have more than 6 characters'))
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
                        className={loading ? 'btn-login loading' :  'btn-login'}
                        value="Login"
                        disabled={loading}
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