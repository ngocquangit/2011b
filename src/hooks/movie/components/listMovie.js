import { Row, Col,Card,Skeleton } from 'antd';
const { Meta } = Card;
const style = { margin: '20px' };
const listMove = (props)=> {
    if(props.listMovie.length !== 0 && !props.loading) {
      let phim = props.listMovie.filter((item)=>
      item.poster_path !==null) 
      return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {phim.map((item, index) => (
              <Col className="gutter-row" span={6}>
              <Row style={{marginTop: ' 20px'}} justify = 'center'>
                  <Card
                  hoverable
                  style={{ width: 240, marginBottom: '30px' }}
                  cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path }`} />}
                  >
                  <Meta title={item.title} /*description={item.overview} *//>
                  </Card>
              </Row>
          </Col>  
            ))}
            </Row>
            )
          }
          return(
            <>
            </>
          )
      
}
export default listMove;