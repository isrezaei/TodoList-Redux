
export const BaseData = [
    {id : 0 , text : 'Hello my friends' , color : 'red' , complete : 'false'},
    {id : 1 , text : 'This is a Todo List' , color : 'red' , complete : 'false'},
]

export default function DataServer ()
{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(BaseData)
        } , 1000)
    })
}

