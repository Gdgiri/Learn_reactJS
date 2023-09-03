import { useEffect, useState } from "react";

function Timer(){

    const [Count,setCount]=useState(0);

    useEffect(()=>{
        console.log('screen rendered!');
        // checkCount()
       setTimeout(()=>{
        setCount((previousState)=>{
                return previousState+1
        })
       },5000)
    })


        function checkCount(){
            if(Count>10){
                setCount(1);
            }
        }
    
   

   function updateCount(){
        setCount((previousState)=>{ return previousState+1})
    }

    return <>
    
   <h1> I have rendered {Count} Times</h1>
   <button onClick={updateCount}>Increse count</button>
   
    </>
}

export default Timer;