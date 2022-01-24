//Real Dispatch for Push New Color And Filter Old Color in Array
export const PickNewColors = (Colors , ChangeType) =>
{
    return {
        type : 'colors/AddNewColorToArray' ,
        payload : {
            Colors,
            ChangeType
        }
    }
}

//Real Dispatch for Change Status
export const PickNewStatus = (Status) =>
{
    return {
        type : 'status/ChangeStatus',
        payload : Status
    }
}


