import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import {Link,useLocation, useHistory} from 'react-router-dom';
import {helpers} from '../helper/helper';
const DivLogo = styled.div`
            float: left;
            width: 120px;
            height: 31px;
            margin: 16px 24px 16px 0;
            background: rgba(255, 255, 255, 0.3);`;
const { Header } = Layout;



const HeaderComponent = () =>{
    const history = useHistory();
    const {pathname} =useLocation();
    const info = helpers.decodeTokenLocalStorage();
    const username = info != null ? info['username']:null;
    const logout = () => {
        helpers.removeTokens();
        history.push('/login')
    }
    return(
        <Header>
      <DivLogo className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
        <Menu.Item key="/search">
            <Link to="/search"> Tìm kiếm</Link></Menu.Item>
        <Menu.Item key="/popular">
            <Link to="/popular">Phim nổi bật</Link></Menu.Item>
        <Menu.Item key="/upcoming">
            <Link to="/upcoming">Sắp chiếu</Link></Menu.Item>
            {
                !helpers.IsEmptyObject(info)
                && <Menu.Item key="/login">
                <Link to="/login">Đăng nhập</Link></Menu.Item>
            }
        <Menu.Item onClick={() =>logout()}>
            logout
        </Menu.Item>

        <Menu.Item>
            Xin Chao {username}</Menu.Item>
      </Menu>
      
    </Header>
    )
}
export default React.memo(HeaderComponent);

