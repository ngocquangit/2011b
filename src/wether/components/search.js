import { Input,Row, Col} from 'antd';

const { Search } = Input;
const style = { margin: '20px 0' };

const SearchComponent = (props)=> {

    return(

                <Search 
                style={style}
                placeholder="Nhập vào tên thành phố" 
                enterButton="Tìm kiếm" 
                size="large" 
                loading = {props.loading}
                onSearch={city => props.search(city)}

                />
    )
}
export default SearchComponent;