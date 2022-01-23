import {createStore} from "redux";
import {Reducer} from "./Reducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

const Middleware =  applyMiddleware(thunk)

export const Store = createStore(Reducer , Middleware)

