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
            //TodoObject is one object from main object collection
            const TodoObject = action.payload
            state.AllTasks[TodoObject.id] = TodoObject
            break
        case  'todo/ChangeColorTasks' :
            //TodoColors is included id & new colors from options
            const TodoColors = action.payload
            state.AllTasks[TodoColors.id].color = TodoColors.NewColor
            break
        case 'todo/DeletingTasks':
            const id_ForDeleting = action.payload
            delete state.AllTasks[id_ForDeleting]
            break
        case 'todo/CompletedTasks':
            const id_ForToggleComplete = action.payload
            state.AllTasks[id_ForToggleComplete].complete = !state.AllTasks[id_ForToggleComplete].complete
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
