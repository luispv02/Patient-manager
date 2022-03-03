import { types } from "../types/types"

const initialState = {
    patients: [],
    patiendEdit: null
}

export const patientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addPatient:
            return {
                ...state,
                patients: [...state.patients, action.payload]
            }
        

        case types.refreshPatient:
            return {
                ...state,
                patients: action.payload
            }

        case types.deletePatient:
            return {
                ...state,
                patients: state.patients.filter(patient => patient.id !== action.payload)
            }

        case types.addEditPatient:
            return {
                ...state,
                patiendEdit: action.payload
            }
        
        case types.savePatientEdit:
            return {
                ...state,
                patients: state.patients.map(
                    patient => patient.id === action.payload.id
                    ? action.payload
                    : patient
                )
            }
        default:
            return state
    }
}