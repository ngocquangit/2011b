import { Pagination ,Row,Col } from 'antd';
const PaginationComponent = (props)=>{
    return(
        <Row>
            <Col span={20} offset={2} >
                <div style={{textAlign: 'center'}}>
                <Pagination 
                pageSize={20} 
                current={props.currentPage} 
                total={props.totalPage} 
                showSizeChanger={false}  
                onChange={p=> props.change(p)}/>
                </div>
            </Col>
        </Row>
    )
}
export default PaginationComponent;