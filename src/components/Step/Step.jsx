import { React, useState, useEffect } from 'react';
import './Step.css';

export const Ings = (props) => {
    const [stepNum, setStepNum] = useState(0);
    const [recipe, setRecipe] = useState({
        "id": 0,
        "name": "",
        "ingredients": [{
            "id": 0,
            "name": ""
          }],
        "steps": [{
            "id": 0,
            "name": ""
          }]
      });

    useEffect(() => {
        const interval = setInterval(() => {
        fetch('https://my-json-server.typicode.com/BaptisteDesgouttes/Le4eC/recipes')
            .then(result => result.json())
            .then(data => {
                setRecipe(data.find(element => element.name === props.name));
            })
            .catch(console.error)
        }, 1000);

        return () => clearInterval(interval);
      });
                        
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
            
            <div className='activeStep'>
                <p>{'Etape '.concat(recipe.steps[stepNum].id + 1).concat(' : ')}</p>
                <p>{recipe.steps[stepNum].step}</p>
            </div>
        </div>
    );}

export default Ings;