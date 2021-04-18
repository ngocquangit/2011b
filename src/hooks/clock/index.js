import TimeComponent from './components/time';
import {useState} from 'react';

const Clock = ()=>{
    const[showTime,setShowTime] = useState(true);
    const showHideTime =() =>{
        setShowTime(!showTime);
    }
    return(
        <>
    {showTime && <TimeComponent/>}
    <button onClick={()=> showHideTime()} > {showTime?'Xóa đồng hồ':'Hiển thị đồng hồ'}</button>
    </>
    )
}
export default Clock;