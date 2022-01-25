import {useState} from "react";
import {useDispatch} from "react-redux";
import {NewTasks} from "../ToDoDispatchs";

export default function Header()
{


    const dispatch = useDispatch()

    const [InputText , setInputText] = useState('')
    const [NewId , setNewId] = useState(2)



    const SendNewTasks = async () =>
    {

        await dispatch(NewTasks(NewId , InputText))

        setInputText('')
        setNewId(NewId + 1)
    }



    return (
        <>
            <input value={InputText} onChange={(event => setInputText(event.target.value))}/>
            <button onClick={SendNewTasks}>Add Task</button>
        </>
    )
}