import {shallowEqual, useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {ChangeColorTasks} from "../Dispatchs";

export default function Body()
{


    const ToDoObjectKeys = useSelector(state => Object.keys(state.ToDoItems.AllTasks) , shallowEqual)

    const TodosSingleObjects = useSelector(state => Object.values(state.ToDoItems.AllTasks))



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
        return dispatch(ChangeColorTasks(ColorOptions , id))
    }


    return ToDoObjectKeys.map(id => {
            return (
                <div key={id}>

                    <p>{TodosSingleObjects[id].text}</p>

                    <select
                        onChange={e => onChangeColor(e.target.value , id)}>
                        {GetColorsFromArray}
                    </select>
                </div>
            )
        }
    )


}