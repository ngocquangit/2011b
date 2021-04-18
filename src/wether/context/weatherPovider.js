import {useState} from 'react';
import {Row, Col} from 'antd';
import SearchComponent from '../components/search';
import {ApiWeather} from '../services/api';
import WeatherContext from './weatherContext';
import {Helpers} from '../helper/common';

const WeatherPovider = (props)=>{
    const[loading,SetLoading] = useState(false);
    const[dataWeather,SetWeather] = useState({});
    const getDataFromAPI = async (city= '')=>{
        SetLoading(true);
        const data = await ApiWeather.getDataWeatherCity(city);
        if (!Helpers.IsEmptyObject(data)) {
            if(data.cod === 200)
            SetWeather(data);
        }
        SetLoading(false);
    }
    return(
    <>
    <Row style={{marginTop:'20px'}}>
        <Col span={16} offset={4}>
            <SearchComponent search={getDataFromAPI} loading={loading}/>
        </Col>
    </Row>
    <Row style={{marginTop:'20px'}}>
        <Col span={20} offset={2}>
            <WeatherContext.Provider value={{loading,dataWeather}}>
                {props.children}
            </WeatherContext.Provider>
        </Col>
    </Row>
    </>
    )
}
export default WeatherPovider;