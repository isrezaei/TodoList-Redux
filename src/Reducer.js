import {combineReducers} from "redux";
import {TodoProducer} from "./ProduceToDo";
import {FilterProduce} from "./ProduceFilter";

export const Reducer = combineReducers({
    ToDoItems : TodoProducer ,
    FilterItems : FilterProduce
})