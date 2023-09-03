function Car(props){
 
const{CarInfo}=props
const{brand,color}=CarInfo
  
  const text=`Hi! i am a ${color} ${brand} Car 🚗🚘`;
    return (
      <h2>{text}</h2>
  
    );
  }

  export default Car;