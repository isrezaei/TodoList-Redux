import {createSelector} from "reselect";
import {StatusSource} from "../ProduceFilter";



const Tasks = state => state.ToDoItems
const Filters = state => state.FilterItems

const ConditionalRendering = createSelector([Tasks , Filters], (Tasks , Filters)=>{


    const TasksObjectValue = Object.values(Tasks.AllTasks)

    const FooterColors = Filters.colors
    const FooterStatus = Filters.status

    const ShowAll = FooterStatus === StatusSource.All
    const ShowStatus = FooterStatus === StatusSource.Completed

    return TasksObjectValue.filter(value => {
        const ColorFilters = FooterColors.length === 0 || FooterColors.includes(value.color)
        const StatusFilter = ShowAll || ShowStatus === value.complete


        return ColorFilters && StatusFilter
    })
})


export const FinalRendering = createSelector([ConditionalRendering] , value => value.map(value => value))





