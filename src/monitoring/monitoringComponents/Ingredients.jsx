import { React, useState } from 'react';

export const Ingredients = (props) => {
    const [check, setCheck] = useState(true);
    return ( 
        <div className='ingredient' >
            <input
                type='checkbox' // Several ingredients can be chosen at a time.
                id={'ing'.concat(props.id)}
                name='usedIngredient'
                value={props.id} // Allows to compare the target value and the props id.
                onClick={(event) => {
                    setCheck(current => !current); //Each click on the input change the boolean from right to false or the opposite.
                    fetch('http://localhost:8000/recipe')
                        .then(response => response.json())
                        .then(data => {
                            let recipe = data;
                            // Change the value of the ingredient clicked (the right instance of the component)
                            recipe.ingredients.find(ing => ing.id === props.id).check = check;
                            return recipe;
                        })
                        .then(newRecipe => {
                            fetch('http://localhost:8000/recipe', 
                                {
                                    method: 'PUT', // Update of the recipe, with current ingredients checked to true. components/Ings.jsx will fetch this data.
                                    headers: {
                                        'Content-type': 'application/json'
                                    },
                                    body: JSON.stringify(newRecipe)
                                })
                                .catch(console.error);
                            })
                        .catch(console.error)
                }}
            />
            <label htmlFor={'ing'.concat(props.id)}>{props.ingredient}</label>
        </div>
    );
}

export default Ingredients;