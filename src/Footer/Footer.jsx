import {useDispatch , useSelector} from "react-redux";
import {PickNewColors, PickNewStatus} from "../FilterDispatchs";
import {StatusSource} from "../ProduceFilter";

export default function Footer ()
{

    const AllColors = useSelector(state => state.FilterItems.colors)

    const AllStatus = useSelector(state => state.FilterItems.status)

    const AllTasks = useSelector(state => state.ToDoItems.AllTasks)

    console.log(AllStatus)


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

    const FooterRemaining = () =>
    {

    }



    return (
        <div>
            <div style={{marginTop : '3%'}}>
                {FooterColor}
            </div>

            <div style={{marginTop : '1%'}}>
                {FooterStatus}
            </div>
        </div>
    )
}