import React , {useState} from 'react';
import MasterLayout from '../../components/masterLayout';
import {Row, Col} from 'antd';
import { DatePicker } from 'antd';
import {api} from '../../servies/api';
import {helpers} from '../../helper/helper'
import ListMovie from '../../components/listMovie'
import PaginationComponent from '../../components/pagination'

const { RangePicker } = DatePicker;

 const UpcommingMoviePage = ()=>{
     const [loading,setLoading] = useState(false);
     const [page, setPage] = useState(1);
     const [tdate, setToDate] = useState('');
     const [fdate, setFromDate] = useState('');
     const [comingMovies, setComingMovies] = useState({});
     const [totalItem, setTotalItem] = useState(0);

    const getChooseDate = async (t1, t2,p=1) => {
        setLoading(true);
        setPage(p);
        let fromDate = t2[0];
        let toDate = t2[1];
        let movies = await api.getDataUpComingMovie(fromDate,toDate,page);
        if(movies.hasOwnProperty('results')){
            setComingMovies(movies.results);
            setTotalItem(movies.total_results);
            setFromDate(fromDate);
            setToDate(toDate);
        }
        setLoading(false);
    }
    console.log(comingMovies);
     return(
         <MasterLayout>
             <Row>
                 <Col span={24}>
                    <RangePicker
                    onChange={(d1,d2) => getChooseDate(d1,d2)} />
                </Col>
             </Row>
              {
                 !helpers.IsEmptyObject(comingMovies) 
                 && 
                 <ListMovie
                 loading={loading}
                 movies={comingMovies}/>
                 
             } 
              {
                 !helpers.IsEmptyObject(comingMovies) 
                 && 
                 !loading
                 &&
                 <PaginationComponent
                 current= {page}
                 total={totalItem}
                 fdate={fdate}
                 tdate={tdate}               
                 change = {getChooseDate} 
                  />
                 
             } 

         </MasterLayout>
     )
 }
 export default UpcommingMoviePage;