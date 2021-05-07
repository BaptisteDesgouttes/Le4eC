import { React, useState } from 'react';

export const NewRecipe = (props) => {
    const [newRecipeName, setNewRecipeName] = useState('');
    const [newRecipeIngredients, setNewRecipeIngredients] = useState([]);
    const [newRecipeSteps, setNewRecipeSteps] = useState([]);
    const [ingsIndex, setIngsIndex] = useState(0);
    const [stepsIndex, setStepsIndex] = useState(0);

    return (
        <div>
            {/* Update the name of the recipe */}
            <input 
                type='text'
                placeholder='Name of the new recipe'
                onChange={(event) => {
                    setNewRecipeName(event.target.value);
                }}
            />
            <button
                type="button"
                onClick={(event) => setNewRecipeName('')}
            >
                RESET NAME
            </button>
            <input 
                type='text'
                placeholder='New ingredient'
                onKeyPress={(event) => 
                    { 
                        // Add the ingredient typed to the recipe
                        if (event.key === 'Enter') 
                        {
                            setNewRecipeIngredients(listIngredients => (
                                listIngredients.concat(
                                [{
                                    "id":ingsIndex,
                                    "name": event.target.value,
                                    "check": false
                                }])
                            ));
                            setIngsIndex(current => current + 1);
                        }
                    }}
            />
            <button
                type="button"
                onClick={(event) =>  {
                    setIngsIndex(0);
                    setNewRecipeIngredients([]);
                }}
            >
                RESET INGREDIENTS
            </button>
            <input 
                type='text'
                placeholder='New step'
                onKeyPress={(event) => 
                    { 
                        // Add the step typed to the recipe
                        if (event.key === 'Enter') 
                        {   
                            setNewRecipeSteps(listSteps => (
                                listSteps.concat(
                                    [{
                                        id:stepsIndex,
                                        step: event.target.value,
                                        check: false
                                    }])
                            ));
                            setStepsIndex(current => current + 1);
                        }
                    }}
            />
            <button
                type="button"
                onClick={(event) => {
                    setStepsIndex(0);
                    setNewRecipeSteps([]);
                }}
            >
                RESET STEPS
            </button>
            
            <div className='previsualisation'>
                <h4>New Recipe: </h4>
                <p>Name: {newRecipeName}</p>
                <p>Ingredients: </p>
                <ul>
                    {newRecipeIngredients.map(ing => <li key={ing.id}>{ing.name}</li>)}
                </ul>
                <p>Steps: </p>
                <ul>
                    {newRecipeSteps.map(step => <li key={step.id}>{step.step}</li>)}
                </ul>
            </div>

            <button
                type="button"
                onClick={(event) => {
                    setNewRecipeName('')
                    setNewRecipeIngredients([])
                    setNewRecipeSteps([]);
                }
            }>
                RESET CURRENT INPUT
            </button>
            <button
                type="button"
                onClick={(event) => {
                    fetch('http://localhost:8000/recipe', 
                        {
                            method: 'PUT', // Create the new recipe and delete the previous one
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify({
                                name: newRecipeName,
                                ingredients: newRecipeIngredients,
                                steps: newRecipeSteps
                            })
                        })
                        .catch(console.error);
                }
            }>
                CHANGE CURRENT RECIPE WITH THIS ONE
            </button>
        </div>
    );
}
//input name
//input steps
//input ingredients
//button reset this
//button NEW RECIPE

export default NewRecipe;