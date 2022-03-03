import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import {db} from '../firebase/firebase-config'
import { types } from '../types/types';
import { finishLoading } from './ui';

export const startAddPatient = (patient) => {
    return async(dispatch, getState) => {

        const {uid} = getState().auth;

        Swal.fire({
            title: 'Saving patient...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        })

        const docRef = await addDoc(collection(db, `/${uid}/patientManager/patients/`), patient);
        dispatch(addPatient(docRef.id, patient))
        dispatch(finishLoading())
        Swal.fire({icon: 'success', title: 'Saved patient'})
    }
}

const addPatient = (id, patient) => {
    return {
        type: types.addPatient,
        payload: {
            id,
            ...patient
        }
    }
}

export const getPatients = (uid) => {
    return async(dispatch) => {

        const patients = []

        const patientsBd = await getDocs(collection(db, `${uid}/patientManager/patients`));
        patientsBd.forEach((patient) => {
            patients.push({
                id: patient.id,
                ...patient.data()
            })
        })

        dispatch(refreshPatients(patients))
    }
} 

const refreshPatients = (patients) => {
    return {
        type: types.refreshPatient,
        payload: patients
    }
}


export const startDeletePatient = (id) => {
    return async(dispatch, getState) => {

        const {uid} = getState().auth;

        await deleteDoc(doc(db, `/${uid}/patientManager/patients/${id}`));

        Swal.fire({icon: 'success', title: 'Eliminated patient'})
        dispatch(deletePatient(id))
    }
}

const deletePatient = (id) => {
    return {
        type: types.deletePatient,
        payload: id
    }
}

export const addEditPatient = (patient) => {
    return {
        type: types.addEditPatient,
        payload: patient
    }
}

export const editPatient = (patientEdit) => {
    return async(dispatch,getState) => {
        
        const {uid} = getState().auth;

        Swal.fire({
            title: 'saving edit...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        })
  
        const patientEditRef = doc(db, `/${uid}/patientManager/patients/${patientEdit.id}`);
        await updateDoc(patientEditRef, patientEdit);
        Swal.fire({icon: 'success', title: 'Edited patient'})

        dispatch(finishLoading())
        dispatch(savePatientEdit(patientEdit))

    }
}


const savePatientEdit = (patientEdit) => {
    return {
        type: types.savePatientEdit,
        payload:patientEdit
    }
}