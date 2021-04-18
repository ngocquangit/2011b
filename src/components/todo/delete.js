import React from 'react';
import styled from 'styled-components';
const Ul = styled.ul`
    padding :0;
    margin:0;
`
const Li = styled.li`
    list-style:none;
    padding: 10px 0 10px 50px;
    width:260px;
    height:21px;
    margin: 0 auto;
    background-color: #ccc;
    margin-bottom:1px
`
class ListTask extends React.Component {
    render()
    {
        let todos =this.props.listTodo;
        let renderList = todos.map(function(e,i)
        {
            return(<Li key = {i}> {e}</Li>);
            
        })
        return(
            <>
            <Ul>
                {renderList}
            </Ul>
            </>
        )
    }
}
export default ListTask;