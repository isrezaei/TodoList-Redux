import {shallowEqual, useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {ChangeColorTasks, DeletingTask, ToggleComplete} from "../ToDoDispatchs";
import {ConditionalRendering} from "./DriveData";

export default function Body()
{


     const AllTodos = useSelector(state => Object.values(state.ToDoItems.AllTasks) , shallowEqual)

    const Drive = useSelector( ConditionalRendering , shallowEqual)




    const dispatch  = useDispatch()

    const ColorTask = ['red' , 'green' , 'blue' , 'pink' , 'yellow']

    const GetColorsFromArray = ColorTask.map(Colors => {
        return (
            <option
                key={Colors}>
                {Colors}
            </option>
        )
    })

    const ChangeColor = (ColorOptions , id) =>
    {
        dispatch(ChangeColorTasks(ColorOptions , id))
    }

    const Deleting = (id) =>
    {
        dispatch(DeletingTask(id))
    }

    const ToggleCheckBox = (id) =>
    {
        dispatch(ToggleComplete(id))
    }


    return AllTodos.map(value => {

        const {id , text , complete} = value

        return (
            <div key={id}>

                <input type={'checkbox'} onChange={()=> ToggleCheckBox(id)} checked={complete} />
                <span>{text}</span>
                <select
                    onChange={(e) => ChangeColor(e.target.value , id)}>
                    {GetColorsFromArray}
                </select>
                <button onClick={() => Deleting(id)}>Delete Tasks</button>

            </div>
        )
    })

}