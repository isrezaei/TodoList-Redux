import produce from "immer";

export const StatusSource = {
    All : 'All',
    Completed : 'Completed',
    NotCompleted : 'NotCompleted'
}

const initState = {
    colors : [],
    status : StatusSource.All
}

export const FilterProduce = produce((state , action)=> {
    switch (action.type) {
        case 'colors/AddNewColorToArray' :

            const {Colors , ChangeType} = action.payload

            switch (ChangeType) {
                case 'AddTask' :
                    state.colors.push(Colors)
                    break
                case 'RemoveTask':
                  state.colors = state.colors.filter(oldColor => oldColor !== Colors)
            }
            break
        case 'status/ChangeStatus':
            state.status = action.payload
            break

    }


} , initState)