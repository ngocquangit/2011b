import {useState,useEffect} from 'react';
const TimeComponent = () =>
{
    const[timestring,SetTimeString]= useState(null);
    useEffect(()=>{
            const setIntervalTime = setInterval(()=>{
            const now = new Date();
            const hours = `0${now.getHours()}`.slice(-2);
            const minutes = `0${now.getMinutes()}`.slice(-2);
            const seconds = `0${now.getSeconds()}`.slice(-2);
            const Currenttimestring = `${hours}:${minutes}:${seconds}`;
            SetTimeString(Currenttimestring);
        },1000);
      // componentWillUnmount
      return() =>{
        clearInterval(setIntervalTime);
    }
    } 
    ,[])
  

    return(
        <h1> Thời gian hiện tại : {timestring}</h1>
    )

}
export default TimeComponent