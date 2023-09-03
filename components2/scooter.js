import React,{ useState } from "react";
import './scooter.css';

function Scooter(){
    // multiple state hook
    // const [Color,setColor]=useState("red")
    // const [Brand,setBrand]=useState("Hero")
    // const [Model,setModel]=useState("Passion PRO")
    // const [Year,setYear]=useState("2019")

    // state with object

    const [Scooter,setScooter]=useState(
        {
            Color:"blue",
            Brand:"Bajaj",
            Model:"pulsar",
            Year:"2023"
        }
         );
function UpdateColor(){
    setScooter((previousState)=>{
        return {...previousState,Color:"Red"}//spread operator
    })
}

console.log('currentState',Scooter);

    return<>
    <h1>My scooter</h1>
    <p>Color:{Scooter.Color}</p>
    <p>Brand:{Scooter.Brand}</p>
    <p>Model:{Scooter.Model}</p>
    <p>Year:{Scooter.Year}</p>

    <button onClick={UpdateColor} id="btn1">Change color</button>
        </>
}

export default Scooter;