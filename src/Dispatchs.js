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
            complete : 'false'
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