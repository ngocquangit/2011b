import { Card } from 'antd';
import {useContext} from 'react'
import WeatherContext from '../context/weatherContext'

const InfoComponent = (props) => {
    const data = useContext(WeatherContext);
    const info = data.dataWeather.weather[0];
    console.log(info);
    return(
        <>
         <Card title="Thông tin thời tiết" bordered={false} style={{ width: 300 }}>
            <p> - Thời tiết: {info.main} </p>
            <p> - Chi tiết: {info.description} </p>
            <img src={`http://openweathermap.org/img/w/${info.icon}.png`}></img>
        </Card>
        </>
    )
}
export default InfoComponent;