import './FavouriteColor.css'
import { useState } from 'react';

function FavouriteColor(){
    const [color, setColor]= useState('Blue')
    // let color='Blue'
    return <>
    <h1>My favourite color is {color}</h1>
    <button onClick={()=>{ setColor('Red')}} id="btn">Change color</button>
    </>
}

export default FavouriteColor;