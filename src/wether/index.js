import WeatherPovider from './context/weatherPovider';
import WeatherContext from './context/weatherContext';
import MainComponent from './components/mainWeather';
import InfoComponent from './components/infoWeather';
import OrtherComponent from './components/ortherWeather';
import {useContext} from 'react';
import {Row, Col} from 'antd';
import {Helpers} from './helper/common'

const IndexComponent = ()=> {
    return(
        <>
        <WeatherPovider>
        <WeatherContext.Consumer>
            {context => {
                if(!Helpers.IsEmptyObject(context.dataWeather))
                {
                    // console.log(context);
                    // console.log(context.loading);
                    return(
                        <Row gutter={16}>
                        <Col span={8}>
                            <MainComponent/>
                        </Col>
                        <Col span={8}>
                            <InfoComponent/>
                        </Col>
                        <Col span={8}>
                        <OrtherComponent/>
                        </Col>
                        </Row>
                    )
                }
            }
            }
        </WeatherContext.Consumer>
        </WeatherPovider>
       
        </>
    )
}
export default IndexComponent;