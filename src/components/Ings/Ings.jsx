import { React, useState, useEffect } from 'react';
import './Ings.css';

export const Ings = (props) => {
    const [ingredientsList, setIngredientsList] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:8000/recipe')
                .then(result => result.json())
                .then(data => setIngredientsList(data.ingredients)) // data contains the recipe
                .catch(console.error);
            }, 1000);
            
        return () => clearInterval(interval);
      });

    return (
        <div className='ingredients'>
            <h3>INGREDIENTS</h3>
            <div className='ings'>
                <ul>
                    {/* For each ingredient, we create a text which will be have a different aspect if they are currently used in the step */}
                    {ingredientsList.map(ing => ing.check ? <li key={ing.id} className="bold">{ing.name}</li> : <li key={ing.id} className="regular">{ing.name}</li>)}
                </ul>
            </div>
        </div>
    );}

export default Ings;