import jwt from 'jsonwebtoken';
import axios from 'axios';
const keyToken = 'RJ2011B';

const getDataUpComingMovie = async (gte, lte , page =1) => {

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=vi-VN&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${gte}&release_date.lte=${lte}&with_release_type=3`;
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : {};
    return result;
}
const getDetailMovieByID =  async (id)=>{
    const url=`https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=vi-VN&append_to_response=videos%2Cimages&include_image_language=en%2Cnull`;
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : {};
    return result;

}
const checkUserLogin = (user,pass) => {
    let token=null;
    if(user==='a' && pass==='1')
    {
        token = jwt.sign({
            id:1,
            username:user,
            email:'admin@gmail.com',
            phone:'0123456789',
            address:'Ha Noi'
         }, keyToken)
    }
    return token;
}

export const api ={
    checkUserLogin,
    getDataUpComingMovie,
    getDetailMovieByID
}