import { Card } from 'antd';
import {useContext} from 'react'
import WeatherContext from '../context/weatherContext'

const MainComponent = () => {
    const data = useContext(WeatherContext);
    const info = data.dataWeather.main;
    return(
        <>
         <Card title="Thông tin thời tiết" bordered={false} style={{ width: 300 }}>
            <p> - Nhiệt độ: {info.temp_min} - {info.temp_max} </p>
            <p> - Áp suất: {info.pressure} </p>
            <p> - Độ ẩm:  {info.humidity}</p>
        </Card>
        </>
    )
}
export default MainComponent;