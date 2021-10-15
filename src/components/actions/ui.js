import { types } from "../../types/types"

export const setError = (err)=>({
    type: types.uiSetError,
    payload: err
});
export const removeError = (err)=>({
    type: types.uiRemoveError,
   
});

export const startLoading = ()=> {
    return{
        type: types.uiStarLoading
    }
}
export const finishLoading = ()=> {
    return{
        type: types.uiFinishLoading
    }
}