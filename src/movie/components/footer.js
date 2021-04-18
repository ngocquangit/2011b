import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
const FooterComponent = () =>{
    return(
        <Footer style={{ textAlign: 'center' }}>Copyright &copy; 2021 Nguyễn Ngọc Quang</Footer>
    )
}
export default React.memo(FooterComponent);