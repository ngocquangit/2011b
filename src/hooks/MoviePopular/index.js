import PaginationComponent from './components/pagination';
import ListMove from './components/listMovie';
import {useState,useEffect} from 'react';
import {popularityMovies} from './servies/api';
import { Row, Col } from 'antd';
import SwitchLanguage from './components/switchLanguage'
import HeaderComponent from './components/header';
import MovieProvider from './context/userProvider';

const IndexComponent = ()=> {
    const[loading,setLoading] = useState(false);    
    const[movies,setMovies] = useState([]);     
    const[language,setLanguage] = useState('vi-VN');     
    const[totalItems,setTotalItems] = useState(0);
    const[page,setPage] = useState(1);
    useEffect(()=>{
        const getDataFormApi = async ()=>{
            const dataMovie = await popularityMovies(language,page);
            await setLoading(true);
            if (dataMovie) {
                await setMovies(dataMovie.results);
                setTotalItems(dataMovie.total_results)
            }
            await setLoading(false);
            console.log(dataMovie)
        }
        getDataFormApi();
    },[language, page])
    const changeLanguage=(lang = 'en-US') => {
        setLanguage(lang);
    }
    const changePaging=(p=1)=>
    {
        setPage(p);
    }
    return(
        <>
        <MovieProvider>
            <HeaderComponent/>
        </MovieProvider>
        <SwitchLanguage 
        change={changeLanguage}/>
        <Row>
            <Col span={20} offset={2} >
            <ListMove 
            loading={loading}
            listMove = {movies}/>
            {
                movies.length > 0 && !loading &&<PaginationComponent currentPage={page} totalPage={totalItems} change={changePaging}/>
            }
            </Col>
        </Row>
        </>
    )
}
export default IndexComponent;