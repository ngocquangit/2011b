import React,{Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Input = styled.input`
    width:260px;
    height:30px;
    border: 1px solid #ccc;
    padding:0px 3px;
    margin:10px;
`
class InputTodo extends Component {
    render()
    {
        return(
            <>
            <Input 
            value = {this.props.val}
            onChange={this.props.change}
            placeholder = {this.props.children}
            ></Input>
            </>
        )
    }
}
InputTodo.propTypes = {
    val : PropTypes.string,
    change : PropTypes.func.isRequired,
    children : PropTypes.string

}
export default InputTodo;