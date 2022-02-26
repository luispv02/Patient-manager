import { types } from "../types/types"

export const openMenu = () => {
    return {
        type: types.openMen
    }
}

export const hiddenMenu = () => {
    return {
        type: types.closeMenu
    }
}