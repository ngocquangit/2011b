import React,{useState,useEffect} from 'react'
import ButtonComponent from './components/button';
import InputComponent from './components/input';
import ResultComponent from './components/result';

function PTBH()
{
    const [hsa, setHsa] = useState(0);
    const [hsb, setHsb] = useState(0);
    const [hsc, setHsc] = useState(0);
    const [result, setResult] = useState("");
    const getNumberInput = (event) =>{
        let val = event.target.value;
        val = Number.parseInt(val)
        const name = event.target.name;
        console.log(val,name);
        if(name ==='hsa')
        setHsa(val);
        else if(name ==='hsb')
        setHsb(val);
        else if(name ==='hsc')
        setHsc(val);
    }
    const GiaiPtbh = () =>
    {
        if(hsa === 0) {
            if(hsb === 0) {
                if (hsc === 0) {
                    setResult('Phuong trinh vo so nghiem')
                     
                } else {
                    setResult('Phuong trinh vo nghiem')
                }
            } else {
                setResult('Phuong trinh co nghiem duy nhat: '+(-hsc/hsb))
            }
        } else {
            let delta = hsb*hsb - 4*hsa*hsc;
            if(delta > 0) {
                let x1 = (-hsb+Math.sqrt(delta))/(2*hsa);
                let x2 = (-hsb-Math.sqrt(delta))/(2*hsa);
                setResult('Nghiem thu nhat x1 = '+x1+'\n Nghiem thu hai x2 = '+x2)
            } else if ( delta === 0) {
                let sum = -hsb/2*hsa
                setResult('Phuong trinh co nghiem kep: x1 = x2 = '+sum)
            } else {
                setResult('Phuong trinh vo nghiem')
            }

    }
}
    return(
        <>
        <div style={{width:'300px',padding:'0 20px', border: '1px solid #888',margin:'0 auto'}}>
            <label>He so A</label>
            <InputComponent type="text" name="hsa" value={hsa} class="input" change={getNumberInput}/>
            <br/>
            <br/>
            <label>He so B</label>
            <InputComponent type="text" name="hsb" value={hsb} class="input" change={getNumberInput}/>
            <br/>
            <br/>
            <label>He so C</label>
            <InputComponent type="text" name="hsc" value={hsc} class="input" change={getNumberInput} />
            <br/>
            <br/>
            <ButtonComponent type="button" click={GiaiPtbh}/>
            <ResultComponent result={result}/>

        </div>

        </>
    )
    
}
export default PTBH;