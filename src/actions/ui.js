import { types } from "../types/types"

export const showMsgError = (msgError) => {
    return {
        type: types.showError,
        payload: msgError
    }
}

export const removeMsgError = () => {
    return {
        type: types.removeError
    }
}