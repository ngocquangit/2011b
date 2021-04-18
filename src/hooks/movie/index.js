import InputComponent from './components/input';
import ListMove from './components/listMovie';
import { Pagination ,Row,Col } from 'antd';
import {useState} from 'react'
import {searchMovies} from './services/api'

const IndexComponent = ()=> {
    const[loading,setLoading] = useState(false);    
    const[movies,setMovies] = useState([]);    
    const[keyword,setKeyword] = useState("");    
    const[totalItems,setTotalItems] = useState(0);
    const[page,setPage] = useState(1);
    const searchMovieByKey = async (nameMovie,p=1) =>{
        if(nameMovie !== '')
        {
        await setKeyword(nameMovie);
        await setPage(p);
        await setLoading(true);
        const dataMovie = await searchMovies(nameMovie,page);
        if (dataMovie) {
            await setMovies(dataMovie.results);
            await setTotalItems(dataMovie.total_results)
        }

        await setLoading(false);
    }
    }
    console.log(movies);
    return(
        <>
        <InputComponent
        search = {searchMovieByKey}
        loading= {loading}></InputComponent>
        <ListMove
        listMovie = {movies}
        loading= {loading}></ListMove>
        {movies.length !==0 && (
        <Row>
            <Col span={20} offset={2} >
                <div style={{textAlign: 'center'}}>
                <Pagination 
                pageSize={20} 
                current={page} 
                total={totalItems} 
                showSizeChanger={false} 
                onChange={pages => searchMovieByKey(keyword,pages)} />
                </div>
            </Col>
        </Row>
        )}
        </>
    )
}
export default IndexComponent;