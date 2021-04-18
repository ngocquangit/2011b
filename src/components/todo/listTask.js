import React from 'react';
import styled from 'styled-components';
import './todo.css';
import PropTypes from 'prop-types';
const Ul = styled.ul`
    padding :0;
    margin:0;
    position: relative;
`
const Button = styled.button`
    min-width:100px;
    height:40px;
    background-color: #000;
    color:#fff;
`
const Li = styled.li`
    list-style:none;
    padding: 10px 0 10px 50px;
    width:218px;
    height:21px;
    margin: 0 10px;
    display:inline-block;
    background-color: #ccc;
    margin-bottom:1px
`
class ListTask extends React.Component {

    lik = ()=>{
        console.log('ahihi');
    }
    render()
    {
        return(
            <>
            <Ul>
                {this.props.listTodo.map((item,index)=>
                (
                    <Li key={index}>
                        <input type="checkbox" 
                        onClick={()=> this.props.finish(item.id_work)}
                        ></input>
                        <span className={`nameWork ${item.done === true ? 'del' : ''}`}>{item.name_work}</span> 
                        <Button onClick={()=> this.props.del(item.id_work)}>Xóa</Button></Li>
                ))}
            </Ul>
            </>
        )
    }
}
ListTask.propTypes = {
    listTodo: PropTypes.array,
    finish : PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
}
export default ListTask;