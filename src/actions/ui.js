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

export const startLoading = () => {
    return {
        type: types.startLoading
    }
}


export const finishLoading = () => {
    return {
        type: types.finishLoading
    }
}