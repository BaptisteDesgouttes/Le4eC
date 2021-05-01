import { React } from 'react';

export const Ingredients = (props) => ( 
    <div className='ingredient' >
        <input type='checkbox' id={'ing'.concat(props.id)} name='usedIngredient' />
        <label htmlFor={'ing'.concat(props.id)}>{props.ingredient}</label>
    </div>
);

export default Ingredients;