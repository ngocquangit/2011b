import {useState} from 'react';
import ButtonComponent from './components/button';
import ResultComponent from './components/result';

function AppHoolCounter() {
    const [count,setCount] = useState(0);
    const incrementCount = ()=>{
        setCount(count+1);
    }
    const decrementCount = ()=>{
        setCount(count-1);
    }
    
    return(
        <>
        <ResultComponent count={count}></ResultComponent>
        <ButtonComponent type="button"
        click={incrementCount}>
            +
        </ButtonComponent>
        <ButtonComponent type="button"
        click={decrementCount}>
            -
        </ButtonComponent>
        </>
    )
}

export default AppHoolCounter;