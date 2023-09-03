import { useState } from "react";
import './myForm.css'
function MyForm(){
 
    // const [name,setName]=useState("");
    // const [age,setAge]=useState("");
    // const [email,setemail]=useState("");

    const [inputs,setInputs]=useState({});

    function handleSubmit(e){
        e.preventDefault();
        alert("form submited")
        console.log('form submited!');
        // console.log('Name:',name);
        // console.log('Age:',age);
        // console.log('Email:',email);
            console.log(inputs);

    }

    function handlerChange(e){
           const name=e.target.name;
           const value=e.target.value; 
            setInputs((previousState)=>{return {...previousState,[name]: value}})
    }
    
    return <form onSubmit={handleSubmit} id="form">
        <label> Enter you Name:
        <input type="text" name="name" onChange={handlerChange}/>

        </label><br/><br/>
        <label> Enter you Age:
        <input type="number" name="age"onChange={handlerChange}/>

        </label><br/><br/>
        <label> Enter you email:
        <input type="email" name="email" onChange={handlerChange}/>

        </label><br/>

        <input type="submit" value="submit Form" id="btn"/>
    </form>
}

export default MyForm;