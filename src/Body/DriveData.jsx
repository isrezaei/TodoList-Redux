import {createSelector} from "reselect";
import {StatusSource} from "../ProduceFilter";



const Tasks = state => state.ToDoItems
const Filters = state => state.FilterItems




export const ConditionalRendering = createSelector([Tasks , Filters], (Tasks , Filters)=>{

    // console.log(Tasks)
    // console.log(Filters.status)

    const TasksObjectValue = Object.values(Tasks.AllTasks)



    const FooterColors = Filters.colors
    const FooterStatus = Filters.status



    const ShowAll = FooterStatus === StatusSource.All
    const ShowStatus = FooterStatus === StatusSource.Completed

    const FilterTasksByColorsAdnStatus = TasksObjectValue.filter(value => {

        const ColorFilters = FooterColors.length === 0 || FooterColors.includes(value.color)
        const StatusFilter = ShowAll || ShowStatus === value.complete


        return ColorFilters && StatusFilter

    })

    console.log(FilterTasksByColorsAdnStatus)



    return null

})



