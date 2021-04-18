import React,{Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Button = styled.button`
    min-width:100px;
    height:30px;
    background-color: #000;
    color:#fff;
`
class ButtonTodo extends Component {
    render()
    {
        return(
            <>
            <Button 
            onClick = {() =>this.props.click() }>{this.props.children}</Button>
            </>
        )
    }
}
ButtonTodo.propTypes = {
    click: PropTypes.func.isRequired,
    children: PropTypes.node
}
export default ButtonTodo;