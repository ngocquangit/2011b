// import Proptypes from 'proptypes'
import { Input,Row, Col} from 'antd';

const { Search } = Input;
const style = { margin: '20px 0' };

const InputComponent = (props)=> {

    return(
        <Row justify="center">
            <Col span={18} offset={3}>
                <Search 
                style={style}
                placeholder="Nhập vào tên phim" 
                enterButton="Tìm kiếm" 
                size="large" 
                onSearch={val=> props.search(val)}
                loading = {props.loading}
                />
        </Col>
        </Row>
    )
}
// InputComponent.propTypes ={
//     search: PropTypes.func.isRequired,
// }
export default InputComponent;