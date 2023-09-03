import React from "react";

class Apple extends React.Component{
    render(){
        const {AppleInfo}=this.props;
        const {Type,color}=AppleInfo;
       
        const text=`hi i eat ${Type} ${color}`
        return(
            <h3>{text}</h3>
        );
    }
}

export default Apple;