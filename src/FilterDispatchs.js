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


export const PickNewStatus = (Status) =>
{
    return {
        type : 'status/ChangeStatus',
        payload : Status
    }
}