import {shallowEqual, useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {ChangeColorTasks, DeletingTask, ToggleComplete} from "../ToDoDispatchs";
import {FinalRendering} from "./DriveData";

export default function Body()
{

    const AllTodos = useSelector(FinalRendering , shallowEqual)
    const LoadingSpinner = useSelector(state => state.ToDoItems.Loader)

    console.log(LoadingSpinner)

    const Loading = LoadingSpinner === 'Loading'





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




    return !Loading ? AllTodos.map(value => {

        const {id , text , complete , color} = value

        return (
            <div key={id}>

                <input type={'checkbox'} onChange={()=> ToggleCheckBox(id)} checked={complete} />
                <span>{text}</span>
                <select
                    defaultValue={color}
                    onChange={(e) => ChangeColor(e.target.value , id)}>
                    {GetColorsFromArray}
                </select>
                <button onClick={() => Deleting(id)}>Delete Tasks</button>
            </div>

        )
    }) : <p>Loading ... </p>
}