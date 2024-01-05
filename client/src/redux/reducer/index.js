import {GET_DOGS, GET_BY_NAME, GET_BY_ID, POST_DOGS} from "../actions";

let initialState = {allDogs:[], allDogsCopy:[] , detailDog:[], postDog:[]}


function rootReducer(state = initialState,action) {
    switch(action.type) {
        case GET_DOGS:
            return{
         ...state,
         allDogs: action.payload,       
            };
        case GET_BY_NAME:
            return {
        ...state,
        allDogs: action.payload,
            };
        case GET_BY_ID:
            return {
        ...state,
            };
        case POST_DOGS:
            return {
        ...state,
        detailDog: action.payload,
            };
        default:
            return state
    }
}

export default rootReducer