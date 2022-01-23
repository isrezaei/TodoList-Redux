import {useState} from "react";
import {useDispatch} from "react-redux";
import {NewTasks} from "../Dispatchs";

export default function Header()
{


    const dispatch = useDispatch()

    const [InputText , setInputText] = useState('')
    const [NewId , setNewId] = useState(2)



    const SendNewTasks = () =>
    {

        setNewId(NewId + 1)


        dispatch(NewTasks(NewId , InputText))

    }



    return (
        <>
            <input onChange={(event => setInputText(event.target.value))}/>
            <button onClick={SendNewTasks}>Add Task</button>
        </>
    )
}