import { React, useState, useEffect } from 'react';
import './Step.css';

export const Step = (props) => {
    const [stepNum, setStepNum] = useState(0);
    const [stepText, setStepText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:8000/recipe')
                .then(response => response.json())
                .then(data => data.steps.find(step => step.check)) //return the id of the current step
                .then(step => {
                    setStepNum(step.id + 1);
                    setStepText(step.step);
                })
                .catch(console.error);
            }, 1000);
            
        return () => clearInterval(interval);
      });
                        
    return (
        <div className='step'>
            <div className='activeStep'>
                <p className='activeStepNum'>{'Etape '.concat(stepNum).concat(' : ')}</p>
                <p className='activeStepContent'>{stepText}</p>
            </div>
        </div>
    );}

export default Step;