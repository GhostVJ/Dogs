import {createStore, applyMiddleware} from "redux";
//import {composeWithDevTools} from "redux-devtools-extension";
import trunk from "redux-thunk";
import rootReducer from "../reducer";

//export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(trunk)))
export const store = createStore(rootReducer,applyMiddleware(trunk))