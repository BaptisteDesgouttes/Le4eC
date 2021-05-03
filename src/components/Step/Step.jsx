import { React, useState, useEffect } from 'react';
import './Step.css';

export const Ings = (props) => {
    const [stepNum, setStepNum] = useState(0);
    const [divStep, setdivStep] = useState(<div></div>);

    useEffect(() => {
        console.log('change');
        return (
        fetch('https://my-json-server.typicode.com/BaptisteDesgouttes/Le4eC/recipes')
            .then(result => result.json())
            .then(data => {
                setdivStep(
                    <div className='activeStep'>
                        <p>{'Etape '.concat(data.find(element => element.name === props.name).steps[stepNum].id + 1).concat(' : ')}</p>
                        <p>{data.find(element => element.name === props.name).steps[stepNum].step}</p>
                    </div>
                )
            })
            .catch(console.error)
    )});
                        
    return (
        <div className='step'>
            <div>
                <button 
                    type='button'
                    onClick={(event) => setStepNum(current => current === 0 ? current : current - 1)}
                >
                    PREV STEP
                </button>
                <button 
                    type='button'
                    onClick={(event) => setStepNum(current => current === 4 ? current : current + 1)}
                >
                    NEXT STEP
                </button>
            </div>
            {divStep}
        </div>
    );}

export default Ings;