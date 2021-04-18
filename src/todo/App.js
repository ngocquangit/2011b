import React,{Component} from 'react';
import styled from 'styled-components';
import Button from '../components/todo/button';
import Input from '../components/todo/input';
import ListTask from '../components/todo/listTask'
const DivContainer = styled.div`
    max-width:400px;
    min-height:100px;
    border:1px solid #000;
    margin :0 auto;
    padding-bottom: 10px;
`
class AppTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:[],
            id:1,
            work:""
        }
    }
    // Luu state work tu hanh dong vao o nhap du lieu
    changeWork = (event)=>
    {
        let workChage = event.target.value;
            this.setState({
                work:workChage
            })
        
    }
    addTodo = ()=>{
        if (this.state.work !=="") {
       this.setState({
           id: this.state.id +1,
           todos: [...this.state.todos, {id_work:this.state.id,name_work:this.state.work,done:false}],
           work:""
       })
        }
       
    }
    removeTodo = (id) => {
        let newWorks = this.state.todos.filter(item =>  item.id_work !== id);
        this.setState({
            ...this.state,
            todos : newWorks
        })
    }
    finishTodo = (id)=>{
        let newTodos = this.state.todos.map(item => item.id_work === id ? {...item,done: !item.done} : item)
        this.setState({
                ...this.state,
                todos : newTodos
        })
    }
    render()
    {
        console.log(this.state.todos);
        return(
            <>
            <DivContainer>
            <Input 
            val = {this.state.work}
            change = {this.changeWork}
            >Nhập vào đây</Input>
            <Button
            click = {this.addTodo}>Gửi</Button>
            <ListTask 
            listTodo  = {this.state.todos}
            del= {this.removeTodo}
            finish = {this.finishTodo}/>
            </DivContainer>
            </>
        )
    }
}
export default AppTodo;