import Car from './Car';
import Giri from './Giri';
import Apple from './Apple'
function Garrage(){
  // const color="red"
  // const name=prompt("enter the Brand of car");

  const CarInfo={
    brand:"NANDU",
    color:"RED"
  }

  const AppleInfo={
    Type:"GreenApple",
    color:"Green" 
  }

  // const name= prompt("is he live");
const carList=[
  {brand:"BMW" , color:"RED"},
  {brand:"FORD", color:"GREEN"},
  {brand:"Testla", color:"black"},
]

const numberList=[
  1,2,3,4,5,6,6
];
  const isDoorOpend=true;
    return(
  
      <>
      <h1>Who lives in my Garrage </h1>

      { CarInfo.brand !==  undefined && CarInfo.color !== undefined ?

      <Car CarInfo={CarInfo}/>:null}

      
      <button>Button</button>
      
      <Giri/>
      <Apple AppleInfo={AppleInfo}/>
      {isDoorOpend?<h2>✅</h2>:<h2>❌</h2>}

      <ul>
       { carList.map((CarInfo)=> <li key={CarInfo.brand}> <Car CarInfo={CarInfo}/> </li> )}
      </ul>

      <ul>
        {numberList.map((e,index)=><li key={index}><p>{e}</p></li>)}
      </ul>

      </>
    );
  }

  export default Garrage;