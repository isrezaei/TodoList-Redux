import {combineReducers} from "redux";
import {TodoProducer} from "./ProduceToDo";

export const Reducer = combineReducers({
    ToDoItems : TodoProducer ,
    FilterItems : ''
})