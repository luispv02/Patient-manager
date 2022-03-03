import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import Swal from "sweetalert2";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startRegisteUser = (email,password1, name) => {
    return (dispatch) => {
        const auth = getAuth();
        
        dispatch(startLoading())
        Swal.fire({
            title: 'Creating account...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        })
        createUserWithEmailAndPassword(auth, email, password1)
        .then(async ({user}) => {
            await updateProfile(user, {displayName: name})
            dispatch(login(user.uid, user.displayName));
            dispatch(finishLoading());
            Swal.close()
        })
        .catch((error) => {
            dispatch(finishLoading())
            if(error.code === 'auth/email-already-in-use'){
                Swal.fire('Error', 'Email already registered', 'error')
            }
        });
    }
}

export const startLogin = (email, password) => {
    return (dispatch) => {
        const auth = getAuth(); 
        dispatch(startLoading())
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading())
            })
            .catch(error => {
                dispatch(finishLoading())
                if(error.code === 'auth/user-not-found'){
                    Swal.fire('Error', 'User not found', 'error')
                }else if(error.code === 'auth/wrong-password'){
                    Swal.fire('Error', 'Incorrect password', 'error')
                }
            })
    }
}

export const startLogout = () => {
    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                dispatch(logout())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const login = (uid,displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}
