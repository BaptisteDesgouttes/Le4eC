import { React, useState, useEffect } from 'react';
import './Ings.css';

export const Ings = (props) => {
    const [ingredientsList, setIngredientsList] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:8000/recipes')
                .then(result => result.json())
                .then(data => data.find(element => element.name === props.name)) //return the current recipe to fetch its data
                .then(recipe => setIngredientsList(recipe.ingredients))
                .catch(console.error);
            }, 1000);
            
        return () => clearInterval(interval);
      });

    return (
        <div className='ingredients'>
            <h3>INGREDIENTS</h3>
            <div className='ings'>
                <ul>
                    {ingredientsList.map(ing => ing.check ? <li key={ing.id} className="bold">{ing.name}</li> : <li key={ing.id} className="regular">{ing.name}</li>)}
                </ul>
            </div>
        </div>
    );}

export default Ings;