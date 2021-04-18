import React from 'react';
import HeaderComponent from '../components/basic/header'
class Basic extends React.Component
{ 
    constructor(props) {
    super(props);
    this.state = {
        color:'black',
        count:0
        }
    }
    changeColor = (event) => {
        let nameBtn = event.target.name;
        if (nameBtn !=='')
        {
        this.setState({
            color: nameBtn
        })
        }
    }
    changeCount =()=>{
        // this.setState({count:this.state.count+1})
        this.setState((state) => ({count:state.count+1}));
    }
    viewCount = ()=>{
        this.changeCount();
        this.changeCount();
    }
    render() {
        return (
            <>
            <HeaderComponent/>
            <h3 style={{color:this.state.color}}>This is color</h3>
            <h3>{this.state.count}</h3>
            <button type="button"
            onClick={()=> this.viewCount()}>+</button>
            <button 
            name="red" 
            type="button"
            onClick={(e)=> this.changeColor(e)}>Đỏ</button>
            <button 
            name="green" 
            type="button"
            onClick={(e)=> this.changeColor(e)}>Xanh</button>
            </>
        )
    }
}
export default Basic;