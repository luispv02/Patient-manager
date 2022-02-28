import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeMsgError, showMsgError } from '../../actions/ui'
import { startRegisteUser } from '../../actions/auth'


const Register = () => {

    const dispatch = useDispatch()
    const {msgError} = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });
    const { name, email, password1, password2 } = formValues

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        if(validFormRegister()){
            dispatch(startRegisteUser(email,password1, name))
        }
    }

    const validFormRegister = () => {
        if(name.trim().length < 2){
            dispatch(showMsgError('Nombre incorrecto'))
            return false
        }else if(!validator.isEmail(email)){
            dispatch(showMsgError('Email incorrecto'))
            return false
        }else if(password1.trim().length < 6 || password1 !== password2){
            dispatch(showMsgError('La contraseña debe tener mas de 6 caracteres y deben ser iguales'))
            return false
        }

        dispatch(removeMsgError())
        return true;
    }

  return (
    <div className="container-fluid p-0">
        <div className="register">
            <div className="register__content">
                <h1>Register</h1>

                {
                    msgError && <p className="msg-error">{msgError}</p>
                }

                <form
                    onSubmit={handleSubmitRegister}
                >
                    <input 
                        type="text"
                        placeholder='Name'
                        name='name'
                        onChange={handleInputChange}
                    />

                    <input 
                        type="email"
                        placeholder='Email'
                        name='email'
                        onChange={handleInputChange}
                    />

                    <input 
                        type="password"
                        placeholder='Password'
                        name='password1'
                        onChange={handleInputChange}
                    />

                    <input 
                        type="password"
                        placeholder='Confirm password'
                        name='password2'
                        onChange={handleInputChange}
                    />

                    <input 
                        type="submit"
                        className="btn-register"
                        value="Register"
                    />
                </form>

                <div className="register__content__options">
                    <p>Do you already have an account?</p>
                    <Link to='/auth/login' onClick={() => dispatch(removeMsgError())}>Login</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register