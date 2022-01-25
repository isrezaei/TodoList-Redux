import {BaseData} from "./DataServer";

//Thunk Function For Push New Data
export const NewTasks = (NewId , InputText) =>
{
    return function (dispatch)
    {
        const NewTask = {
            id : NewId ,
            text : InputText ,
            color : 'red' ,
            complete : false
        }
         BaseData.push(NewTask)
        dispatch(AddNewTask(BaseData[NewId]))
    }
}
const AddNewTask = (BaseData) =>
{
    return {
        type :'todo/AddTodoToState',
        payload : BaseData
    }
}

//Real Dispatch for Change Color Task
export const ChangeColorTasks = (ColorOptions , id) =>
{
    return {
        type : 'todo/ChangeColorTasks',
        payload : {
            NewColor : ColorOptions,
            id
        }
    }
}

//Real Dispatch for Deleting Task
export const DeletingTask = (id) =>
{
    return {
        type : 'todo/DeletingTasks',
        payload : id
    }
}

//Real Dispatch for Complete and unCompleted Task
export const ToggleComplete = (id) =>
{
    return {
        type : 'todo/CompletedTasks',
        payload : id
    }

}
//Real Dispatch for Mark All Task
export const MarkAll = () =>
{
    return {
        type : 'todo/MarkAllCompleted',
    }
}

//Real Dispatch for unMark All Task
export const unMarkAll = () =>
{
    return {
        type : 'todo/unMarkAllCompleted',
    }
}


//Real Dispatch for Clear Mark Task
export const ClearMarked = () =>
{
    return {
        type : 'todo/ClearMarked'
    }
}

















