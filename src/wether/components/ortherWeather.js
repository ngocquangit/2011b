import { Card } from 'antd';
import {useContext} from 'react'
import WeatherContext from '../context/weatherContext'
const OrtherComponent = () => {
    const data = useContext(WeatherContext);
    const info = data.dataWeather;
    console.log(info);
    return(
        <>
         <Card title="Thông tin Khác" bordered={false} style={{ width: 300 }}>
            <p> - Sức gió:  {info.wind.speed} </p>
            <p> - Tầm nhìn: {info.visibility} </p>
            <p> - Lượng mưa: {info.main.pressure}</p>
        </Card>
        </>
    )
}
export default OrtherComponent;