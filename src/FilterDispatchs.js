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