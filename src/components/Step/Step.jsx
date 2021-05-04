import { React, useState, useEffect } from 'react';
import './Step.css';

export const Step = (props) => {
    const [stepNum, setStepNum] = useState(0);
    const [stepText, setStepText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('https://my-json-server.typicode.com/BaptisteDesgouttes/Le4eC/recipes')
                .then(result => result.json())
                .then(data => data.find(element => element.name === props.name)) //return the current recipe to fetch its data
                .then(recipe => {
                     fetch('http://localhost:8000/recipes/'.concat(recipe.id))
                        .then(response => response.json())
                        .then(data => data.steps.find(step => step.check)) //return the id of the current step
                        .then(step => {
                            setStepNum(step.id);
                            setStepText(step.step);
                        })
                        .catch(console.error);
                    })
                .catch(console.error);
            }, 1000);
            
        return () => clearInterval(interval);
      });
                        
    return (
        <div className='step'>
            <div className='activeStep'>
                {/* <p>{'Etape '.concat(recipe.steps[stepNum].id + 1).concat(' : ')}</p>
                <p>{recipe.steps[stepNum].step}</p> */}
                <p>{'Etape '.concat(stepNum + 1).concat(' : ')}</p>
                <p>{stepText}</p>
            </div>
        </div>
    );}

export default Step;