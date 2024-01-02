import axios from "axios";

export const GET_DOGS = "GET_DOGS"



export function getDogs(){
    return async function(dispatch) {
        const response = await axios("https://api.thedogapi.com/v1/breeds/?api_key=live_2RhtI3yoCHszGVETOwDI6b3NbJYzmZS6kOzRHnkCajeWtkvsIV6JQdnOqwxMmELM");
        return dispatch({
            type: "GET_DOGS",
            payload: response.data,
        });
       
    };
}