import React,{lazy,Suspense} from "react";
import {Skeleton} from "antd";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  import {helpers} from "../helper/helper"
// import SearchPages from "../pages/search/index";
// import PopularPages from "../pages/popular/index";
// import LoginPages from "../pages/login/index";
const SearchPages = lazy(()=> import('../pages/search/index'));
const PopularPages = lazy(()=> import('../pages/popular/index'));
const LoginPages = lazy(()=> import('../pages/login/index'));
const UpcommingMoviePage = lazy(()=> import('../pages/upcoming/index'));
const DetailPage = lazy(()=> import('../pages/detail/index'));
const PrivateRouter = ({children,...rest}) =>{
    const auth = helpers.isAuthenticated();
    return(
        <Route 
        {...rest}
            render={({location}) => auth ? ( children):
            (<Redirect to={{pathname: "/login",state:{from: location}}}/>)
        }
        />
    )
}
const RouteMovie = () =>{
    return(
        <Router>
            <Suspense fallback={<Skeleton active/>}>
                <Switch>
                    <PrivateRouter path="/" exact> 
                    <SearchPages/>
                    </PrivateRouter>
                    <PrivateRouter path="/search"> 
                    <SearchPages/>
                    </PrivateRouter>
                    <PrivateRouter path="/popular"> 
                    <PopularPages/>
                    </PrivateRouter>
                    <PrivateRouter path="/upcoming" >
                    <  UpcommingMoviePage/>
                    </PrivateRouter>
                    <PrivateRouter path="/movie-detail/:slug~:id" >
                    <  DetailPage/>
                    </PrivateRouter>
                    <Route path="/login"> 
                    <LoginPages/>
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default React.memo(RouteMovie);