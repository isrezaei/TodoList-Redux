import {shallowEqual, useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {ChangeColorTasks , DeletingTask} from "../Dispatchs";

export default function Body()
{


    const AllTodos = useSelector(state => Object.values(state.ToDoItems.AllTasks) , shallowEqual)


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

    const onChangeColor = (ColorOptions , id) =>
    {
        dispatch(ChangeColorTasks(ColorOptions , id))
    }

    const Deleting = (id) =>
    {
        dispatch(DeletingTask(id))
    }


    return AllTodos.map(value => {

        const {id , text} = value

        return (
            <div key={id}>

                <input type={'checkbox'}/>

                <p>{text}</p>

                <select
                    onChange={(e) => onChangeColor(e.target.value , id)}>
                    {GetColorsFromArray}
                </select>

                <button onClick={() => Deleting(id)}>Delete Tasks</button>
            </div>
        )
    })

}