import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import {app} from '../firebase/firebase-config'
import { types } from "../types/types";

export const startRegisteUser = (email,password1, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password1)
        .then(async ({user}) => {

            await updateProfile(user, {displayName: name})
            dispatch(login(user.uid, user.displayName));
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        });
    }
}

export const startLogin = (email, password) => {
    return (dispatch) => {
        const auth = getAuth(); 
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const startLogout = () => {
    return () => {
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