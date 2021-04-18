import React from 'react';
class ChildLifecycle extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            c:0
        }
        console.log('Contractor ChildLifecycle mouting da chay');
    }
    static getDerivedStateFromProps(props, state)
    {
        
        console.log(state,props);
        console.log('getDerivedStateFromProps ChildLifecycle cua mounting da chay');
        return 0;
    }
    componentDidMount()
    {
        console.log('componentDidMount() ChildLifecycle da chay');
    }
    shouldComponentUpdate(nextProps, nextState)
    {
        console.log(nextProps);
        console.log(nextState);
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log(prevProps);
        console.log(prevState);
        return 10
    }
    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log(snapshot);
        document.getElementById('text').style.color = 'red';
    }
    componentWillUnmount()
    {
        console.log('componentWillUnmount chay');
    }
    plusCount =() => {
        this.setState({
            c:this.state.c+1
        })
    }
    render(){
        console.log('render ChildLifecycle mouting da chay');
        return (
            <>
            <h3>Gia tri nhan tu props {this.props.c} </h3>
            <h2 id="text"> Gia tri nhan tu state {this.state.c} </h2>
            <button 
            type="button" 
            onClick={() => this.plusCount()}
            >+1</button>
            </>
        )
    }
}
export default ChildLifecycle ;