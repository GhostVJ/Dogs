import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const POST_DOGS = "POST_DOGS";


export function getDogs(){
    return async function(dispatch) {
        const response = await (axios("http://192.168.1.4:3001/dogs/"));
        return dispatch({
            type: "GET_DOGS",
            payload: response.data,
        });
       
    };
}

export function getByName(name){
    return async function(dispatch) {
        const response = await (axios(`http://192.168.1.4:3001/dogs?name=${name}`));
        return dispatch({
            type: "GET_BY_NAME",
            payload: response.data,
        });
    };
}

export function getByID(id) {
    return async function(dispatch) {
        const response = await (axios(`http://192.168.1.4:3001/dogs/${id}`));
        console.log(response.data);
        return dispatch({
            type: "GET_BY_ID",
            payload: response.data,
        });
    }
}


export function postDogs(formDog) {
    return async function(dispatch) {
        const response = await (axios.post(`http://192.168.1.4:3001/dogs/`,{
            "name": formDog.name,
            "image": formDog.image,
            "weight": formDog.weight,
            "height": formDog.height,
            "lifespan": formDog.lifespan,
            "temperament": formDog.temperament
        }));
        console.log(response.data);
        return dispatch({
            type: "POST_DOGS",
            payload: response.data,
        });
    }
}