import { types } from "../types/types"


export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                name: action.payload.displayName,
                uid: action.payload.uid
            }

        case types.logout:
            return {}
        
        default:
            return state
    }
}