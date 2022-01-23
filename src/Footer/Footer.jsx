import {useDispatch , useSelector} from "react-redux";
import {PickNewColors} from "../FilterDispatchs";

export default function Footer ()
{

    const AllColors = useSelector(state => state.FilterItems.colors)


    const dispatch = useDispatch()

    const ColorTask = ['red' , 'green' , 'blue' , 'pink' , 'yellow']


    const GetColorsFromFooter = (colors , ChangeType) =>
    {
        dispatch(PickNewColors(colors , ChangeType))
    }



    const FooterColor = ColorTask.map(colors => {

       const Checked = AllColors.includes(colors)

        const ChangeType = Checked ? 'RemoveTask' : 'AddTask'


        return (
            <span key={colors}>
                    <span>{colors.toUpperCase()}</span>
                    <input onClick={()=> GetColorsFromFooter(colors , ChangeType)} type={'checkbox'}/>
            </span>
        )
    })

    console.log(AllColors)


    return (
        <div style={{marginTop : '3%'}}>
            {FooterColor}
        </div>
    )
}