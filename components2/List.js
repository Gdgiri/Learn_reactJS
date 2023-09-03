import { useState } from "react"

function List(){

   const [List,setList]= useState([])
    const [Count,setCount]=useState(1)
   function addItem(){
        const itemName='item'+Count;
        setList((previousState)=>{
            return[...previousState,itemName]
        })
        setCount((previousState)=>{
                return previousState+1
        })
   }
    return<>

    <h1>List</h1>

    <button onClick={addItem}>Add Item</button>

    <ul>{
            List.map((el,index)=><li key={index}>{el}</li>)
        }
        
    </ul>
    </>
}

export default List;