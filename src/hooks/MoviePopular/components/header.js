import React ,{useContext} from 'react';
import {Row, Col,Avatar,Image } from 'antd';
import MovieContext from '../context/index';
const HeaderComponent = () =>{
    const info = useContext(MovieContext);
    console.log(info);
    return (

        <>
        <Row>
            <Col span={20}>

            </Col>
            <Col span={4}>
                <span style={{marginRight:'10px'}}>Hi: {info.name}</span> 
                <Avatar
                    size={40}
                    src={<Image src={info.avatar} />}
                    />
                
            </Col>
        </Row>
        </>
    )
}
export default React.memo(HeaderComponent);