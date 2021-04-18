import React from 'react';
import { Card, Col, Row,Skeleton } from 'antd';
import CoronaContext from '../context/MyContext'

class Global extends React.PureComponent
{
    // constructor(props) {
    //     super(props);
    // }
    render(){
        return (
            <>
            <CoronaContext.Consumer>
                {context =>  {
                    console.log(context);
                    if (context.loading || context.virus.length === 0) {
                        return <Skeleton active />
                    }
                    return (
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Ca nhiễm" bordered={false}>
                        <p>Ca nhiễm mới : {context.virus.Countries[186].NewConfirmed} </p>
                        <p>Tổng ca nhiễm : {context.virus.Countries[186].TotalConfirmed} </p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Tử vong" bordered={false}>
                        <p>Ca tử vong mới :  {context.virus.Countries[186].NewDeaths}  </p>
                        <p>Tổng ca tử vong :  {context.virus.Countries[186].TotalDeaths}  </p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Khỏi bệnh" bordered={false}>
                        <p>Ca khỏi bệnh mới :  {context.virus.Countries[186].NewRecovered}  </p>
                        <p>Tổng ca khỏi bệnh :  {context.virus.Countries[186].TotalRecovered}  </p>
                        </Card>
                    </Col>
                    </Row>
                </div>
            )}}
            </CoronaContext.Consumer>
            
            </>
        )

    }
}
export default Global;