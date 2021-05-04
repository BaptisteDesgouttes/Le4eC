import { React } from 'react';

export const StepRecipe = (props) => (
    <div className='stepRecipe'>
        <input type='radio' id={'step'.concat(props.id)} name='step' value={props.id}  onClick={(event) => (
            fetch('http://localhost:8000/recipes/'.concat(props.recipeId))
                .then(response => response.json())
                .then(data => {
                    let recipe = data;
                    recipe.steps.map(step => step.id.toString() === event.target.value.toString() ? step.check = true : step.check = false);
                    return recipe;
                })
                .then(newRecipe => {
                    console.log(event.target.value);
                    fetch('http://localhost:8000/recipes/'.concat(props.recipeId), 
                        {
                            method: 'PUT',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(newRecipe)
                        })
                        .catch(console.error);
                    })
                .catch(console.error)
        )} />
        <label htmlFor={'step'.concat(props.id)}>{props.todo}</label>
    </div>
)

export default StepRecipe;