import React from 'react';
import {Row, Col,Pagination } from 'antd';
const PaginationComponent=(props)=>{
    const arrTime = [props.fdate, props.tdate]
    return(
    <Row style={{margin: '20px 0' }}>
        <Col span={24} style={{textAlign: 'center'}}>
        <Pagination current={props.current} total={props.total}
        pageSize={20} 
        showSizeChanger={false}
        onChange={(p)=> props.change(null,arrTime,p)}
        />
        </Col>
    </Row>
    )
}
export default PaginationComponent