import { types } from "../types/types"

const initialState = {
    showSidebar: false
}

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.openMen: 
            return {
                ...state,
                showSidebar: true
            }

        case types.closeMenu: 
            return {
                ...state,
                showSidebar: false
            }

        default:
            return state
    }
}