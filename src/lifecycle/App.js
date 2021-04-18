import React from 'react';
import Children from './childen';

class AppLifeCycle extends React.Component
{
    // Mounting
    constructor(props) {
        super(props);
    // Khai baos state
    this.state = {
        count:0,
        show:true,
       }
    // Phuong thuc chay dau tien va 1 lan
    console.log('contractor app lifecycle dang chay');
    }
    static getDerivedStateFromProps(props, state)
    {
        
        console.log(state,props);
        console.log('getDerivedStateFromProps cua mounting da chay');
        return 0;
    }
    showHideComponent = ()=>{
        this.setState({
            show: !this.state.show
        })
        console.log(this.state.show);
    }
    componentDidMount()
    {
        console.log('componentDidMount() da chay');
    }
    render(){
        console.log('render mouting da chay');
        return (
            <>
            <h1>Render is app life cycle</h1>
            {this.state.show ?<Children c ={this.state.count}/> : null}
            <button 
            type="button"
            onClick={()=> this.showHideComponent()}>Hide component</button>
            </>
        )
    }
}
export default AppLifeCycle