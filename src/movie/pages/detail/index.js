import React,{useState,useEffect} from 'react';
import {Col,Row,Skeleton,Image,Button } from 'antd';
import MasterLayout from '../../components/masterLayout';
import {useParams} from 'react-router-dom';
import {api} from '../../servies/api'
import {helpers} from '../../helper/helper';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';

const DetailComponent = ()=>{
    const {id} = useParams();
    const[loading,setLoading] = useState(false);
    const[moviesDetail,SetMoviesDetail]= useState({});
    const [isOpen, setOpen] = useState(false)
    useEffect(()=>{
        const getData=  async ()=>{
            setLoading(true);
            const data = await api.getDetailMovieByID(id);
            if(!helpers.IsEmptyObject(data)){
                SetMoviesDetail(data);
            }
            setLoading(false);
        }
        getData();
    },id)
    if(loading || helpers.IsEmptyObject(moviesDetail))
    {
        return(
             <MasterLayout>
                 <Skeleton active />
            </MasterLayout>
        )
    }
    return(
        <MasterLayout>
            <Row style={{marginTop: ' 20px 0'}}>
                <Col span={8}>
                    <Image src={`https://image.tmdb.org/t/p/w300/${moviesDetail.poster_path}`} ></Image>
                    <h1>{moviesDetail.original_title}</h1>
                    <p> {moviesDetail.release_date}</p>
                </Col>
                <Col span={8}>
                    <p> {moviesDetail.overview}</p>
                    <p> Đánh giá:  {moviesDetail.vote_average}</p>
                    <p> Lượt đánh giá:  {moviesDetail.vote_count}</p>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={helpers.IsEmptyObject(moviesDetail.videos.results[0]) ? moviesDetail.videos.results[0].key : 's4R26OnXqFE' } onClose={() => setOpen(false)} />
                        
                        <Button type="primary" onClick={()=> {setOpen(true)
                        console.log(moviesDetail.videos.results[0].key);}}>Xem demo</Button >
                </Col>
                <Col span={8}>
                    {moviesDetail.images.backdrops.map((item, index)=>( 
                <Image
                    key={index}
                    alt={moviesDetail.original_title} 
                    src={`https://image.tmdb.org/t/p/w300/${item.file_path}`}
                    style={{marginBottom: '20px'}}
                >
                </Image>
                  ))}
                </Col>
            </Row>
        </MasterLayout>
    )

}
export default DetailComponent;