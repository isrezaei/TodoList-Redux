import {combineReducers} from "redux";
import {TodoProducer} from "./ProduceToDo";
import {FilterProduce} from "./ProduceColor";

export const Reducer = combineReducers({
    ToDoItems : TodoProducer ,
    FilterItems : FilterProduce
})