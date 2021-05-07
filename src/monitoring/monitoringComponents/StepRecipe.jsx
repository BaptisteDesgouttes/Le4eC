import { React } from 'react';

export const StepRecipe = (props) => (
    <div className='stepRecipe'>
        <input 
            type='radio' // Only one step is print at a time
            id={'step'.concat(props.id)}
            name='step'
            value={props.id} // Allows to compare the target value and the props id.
            onClick={(event) => (
                fetch('http://localhost:8000/recipe')
                    .then(response => response.json())
                    .then(data => {
                        let recipe = data;
                        // If one changes the input, all steps has to be false except the one we clicked.
                        // Comparison between the target value and the id of the step of this instance of the component.
                        recipe.steps.map(step => step.id.toString() === event.target.value.toString() ? step.check = true : step.check = false);
                        return recipe;
                    })
                    .then(newRecipe => {
                        fetch('http://localhost:8000/recipe', 
                            {
                                method: 'PUT', // Update of the recipe, with current step checked to true. components/Step.jsx will fetch this data.
                                headers: {
                                    'Content-type': 'application/json'
                                },
                                body: JSON.stringify(newRecipe)
                            })
                            .catch(console.error);
                        })
                    .catch(console.error)
            )}
        />
        <label htmlFor={'step'.concat(props.id)}>{props.todo}</label>
    </div>
)

export default StepRecipe;