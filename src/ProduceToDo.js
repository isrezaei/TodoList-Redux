import produce from "immer";

const initState = {
    Loader : 'Loading',
    AllTasks : {}
}

export const TodoProducer = produce((state , action)=>{
    switch (action.type) {

        case 'todo/LoadingTaskFormServer' :
            const SaveData = {}
            state.Loader = 'Loading'
            action.payload.forEach(Todo => SaveData[Todo.id] = Todo)
            state.AllTasks = SaveData
            state.Loader = 'Loaded'
            break

        case 'todo/AddTodoToState' :
            const TodoObject = action.payload
            state.AllTasks[TodoObject.id] = TodoObject
            break
        case  'todo/ChangeColorTasks' :
            const TodoColors = action.payload
            state.AllTasks[TodoColors.id].color = TodoColors.NewColor
            break
        case 'todo/DeletingTask':

            const Id = action.payload

            console.log(state.AllTasks[Id])

            delete state.AllTasks[Id]

            break
    }

} , initState)







//Thunk Functions
export const LoadTodos = (DataServer) =>
{
    return async function (dispatch) {

        await DataServer().then(Response => dispatch({
            type : 'todo/LoadingTaskFormServer',
            payload : Response
        }))
    }
}
