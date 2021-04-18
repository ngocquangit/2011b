import React from 'react';
import HeaderComponent from './header';
import FooterComponent from './footer';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const SiteLayout = styled.div`
min-height: 83vh;
padding: 24px;
background: #fff;
`;
const { Content } = Layout;
const MasterLayout = (props)=>{

    return(
        <Layout>
            <HeaderComponent/>
            <Content style={{ padding: '0 50px' }}>
            <SiteLayout>
                {props.children}
            </SiteLayout>
            </Content>
            <FooterComponent/>
        </Layout>
    )
}
MasterLayout.propTypes={
    children: PropTypes.node.isRequired
}
export default React.memo(MasterLayout);