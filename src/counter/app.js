import React from 'react';
import {ButtonCounter} from '../components/counter/button';
import Result from '../components/counter/result'
import '../counter/counter.css'
class AppCounter extends React.Component {
 constructor(props) {
     super(props);
     this.state=
     {
         count:0
     }
    //  this.incrementNumber = this.incrementNumber.bind(this)
    //  this.decrementNumber = this.decrementNumber.bind(this)
 }
 incrementNumber =()=>
 {
    //update state up
    this.setState(state =>({
        count: state.count +1
    }))
 }
 decrementNumber =()=>
 {
    //update state down
    this.setState({
            count : this.state.count - 1
        })
 }
 
    render()
 {
     return(
         <>
         {/* using component */}
         <section className="container">
         <Result count={this.state.count}/>
         <ButtonCounter 
         type="button"
         click={this.incrementNumber}
         >+</ButtonCounter>
         <ButtonCounter 
         type="button"
         click={this.decrementNumber}
         >-</ButtonCounter>
         </section>
         </>
     )
 }   
}
export default AppCounter;