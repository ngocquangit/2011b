import React from 'react';
import { Table,Skeleton } from 'antd';
import CoronaContext from '../context/MyContext'
const columns = [
    {
      title: 'Đất nước',
      dataIndex: 'Country',
      key: 'Country',
    },
    {
      title: 'Ca nhiễm mới',
      dataIndex: 'NewConfirmed',
      key: 'NewConfirmed',
    },
    {
      title: 'Tổng ca nhiễm',
      dataIndex: 'TotalConfirmed',
      key: 'TotalConfirmed',
    },
    {
      title: 'Ca tử vong mới',
      key: 'NewDeaths',
      dataIndex: 'NewDeaths',
      
    },
    {
      title: 'Tổng ca tử vong',
      key: 'TotalDeaths',
      dataIndex: 'TotalDeaths',
      
    },
    {
      title: 'Ca khỏi bệnh mới',
      key: 'NewRecovered',
      dataIndex: 'NewRecovered',
      
    },
    {
      title: 'Tổng ca khỏi bệnh',
      key: 'TotalRecovered',
      dataIndex: 'TotalRecovered',
      
    },
  ];
  
  
class Countries extends React.PureComponent {
render(){
    return (
        <>
        <CoronaContext.Consumer>
             {context =>  {
                 if (context.loading || context.virus.length === 0) {
                    return <Skeleton active />
                }
                return (
                    <div style={{marginTop: '20px'}}>
                    <Table rowKey="CountryCode" columns={columns} dataSource={context.virus.Countries} />
                    </div>
                    )}}
        </CoronaContext.Consumer>
       
        </>
    )
}
}
export default Countries;