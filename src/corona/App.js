import React from 'react';
import Global from './components/Global'
import Countries from './components/Countries'
import { Col, Row } from 'antd';
import CoronaProvider from './context/CoronaProvider'
class App extends React.Component {
    render() {
        return (
            <>
            <Row>
                <Col span={20} offset={2}>
                <CoronaProvider>
                <Global/>
                <Countries/>
                </CoronaProvider>
                </Col>
            </Row>

           
            </>
        )
    }
}
export default App