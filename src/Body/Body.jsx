import {shallowEqual, useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {ChangeColorTasks, DeletingTask, ToggleComplete} from "../Dispatchs";

export default function Body()
{


    const AllTodos = useSelector(state => Object.values(state.ToDoItems.AllTasks) , shallowEqual)

    console.log(AllTodos)


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

        const {id , text} = value

        return (
            <div key={id}>

                <input type={'checkbox'} onClick={()=> ToggleCheckBox(id)}/>
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