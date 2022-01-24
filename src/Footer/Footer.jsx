import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {PickNewColors, PickNewStatus} from "../FilterDispatchs";
import {MarkAll , ClearMarked} from "../ToDoDispatchs";
import {StatusSource} from "../ProduceFilter";


export default function Footer ()
{


    const AllColors = useSelector(state => state.FilterItems.colors , shallowEqual)

    const AllStatus = useSelector(state => state.FilterItems.status , shallowEqual)

    const AllTodos = useSelector(state => Object.values(state.ToDoItems.AllTasks) , shallowEqual)



    const dispatch = useDispatch()

    const ColorTask = ['red' , 'green' , 'blue' , 'pink' , 'yellow']


    const GetColorsFromFooter = (colors , ChangeType) =>
    {
        dispatch(PickNewColors(colors , ChangeType))
    }

    const GetStatusFromFooter = (Status) =>
    {
        dispatch(PickNewStatus(Status))
    }


    const FooterColor = ColorTask.map(Colors => {
        const Checked = AllColors.includes(Colors)
        const ChangeType = Checked ? 'RemoveTask' : 'AddTask'
        return (
            <span key={Colors}>
                    <span>{Colors.toUpperCase()}</span>
                    <input onClick={()=> GetColorsFromFooter(Colors , ChangeType)} type={'checkbox'}/>
            </span>
        )
    })

    const FooterStatus = Object.values(StatusSource).map(Status => {

        return (
            <span key={Status}>
                <span>{Status}</span>
                <input onChange={()=> GetStatusFromFooter(Status)} type='radio' checked={Status === AllStatus}/>
            </span>
        )
    })

    const FooterMarkAllCompleted = () =>
    {
        dispatch(MarkAll())
    }

    const FooterClearMarked = () =>
    {
        dispatch(ClearMarked())
    }



    return (
        <div>
            <div style={{marginTop : '3%'}}>
                {FooterColor}
            </div>

            <div style={{marginTop : '1%'}}>
                {FooterStatus}
            </div>

            <div style={{marginTop : '1%'}}>
                Remaining Todos {AllTodos.length}
            </div>

            <div style={{marginTop : '1%'}}>

                <button onClick={()=> FooterMarkAllCompleted()}>Mark All Completed</button>

                <button onClick={()=> FooterClearMarked()}>Clear Marked</button>

            </div>

        </div>
    )
}