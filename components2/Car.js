import React from "react";
import './FavouriteColor.css'

class car extends React.Component{

    constructor(){
        super();
        this.state={color:"Red",Model:"Ford"}
    }

    render(){
        return<>
        <h1>My car color is {this.state.color} and Model is {this.state.Model}</h1>
        <button onClick={()=>{this.setState(previousState=>{return{...previousState,color:"Blue"}})}} id="btn1">Change color </button>
        </>
    }
}

export default car;