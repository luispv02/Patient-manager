import { types } from "../types/types"

const initialState = {
    showMenu: false
}

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.openMen: 
            return {
                ...state,
                showMenu: true
            }

        case types.closeMenu: 
            return {
                ...state,
                showMenu: false
            }

        default:
            return state
    }
}