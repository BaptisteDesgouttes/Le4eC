import { React, useState } from 'react';

export const Ingredients = (props) => {
    const [check, setCheck] = useState(true);
    return ( 
        <div className='ingredient' >
            <input
                type='checkbox'
                id={'ing'.concat(props.id)}
                name='usedIngredient'
                value={props.id}
                onClick={(event) => {
                    fetch('http://localhost:8000/recipes/'.concat(props.recipeId))
                        .then(response => response.json())
                        .then(data => {
                            setCheck(current => !current);
                            return data;
                        })
                        .then(data => {
                            console.log(props.ingredient.concat(' : ').concat(check));
                            let recipe = data;
                            recipe.ingredients.find(ing => ing.id === props.id).check = check;
                            return recipe;
                        })
                        .then(newRecipe => {
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
                }}
            />
            <label htmlFor={'ing'.concat(props.id)}>{props.ingredient}</label>
        </div>
    );
}

export default Ingredients;