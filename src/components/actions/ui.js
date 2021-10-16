import { types } from "../../types/types"

//////////////////////////////////////////////////////////
//Aca van las acciones sincronas, si devuelve una sola linea no hace falta el return
//////////////////////////////////////////////////////////




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