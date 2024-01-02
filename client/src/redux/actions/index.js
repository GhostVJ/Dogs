import axios from "axios";

export const GET_DOGS = "GET_DOGS"



export function getDogs(){
    return async function(dispatch) {

        type: "GET_DOGS"
    }
}