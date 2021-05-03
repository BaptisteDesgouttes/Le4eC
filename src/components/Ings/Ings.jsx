import { React, useState } from 'react';
import './Ings.css';

export const Ings = (props) => {
    const [recipe, setRecipe] = useState({
        "id": 0,
        "name": "",
        "ingredients": [{
            "id": 0,
            "name": "",
            "check": false
          }],
        "steps": [{
            "id": 0,
            "name": "",
            "check": false
          }]
      });

    fetch('https://my-json-server.typicode.com/BaptisteDesgouttes/Le4eC/recipes')
        .then(result => result.json())
        .then(data => {
            setRecipe(data.find(element => element.name === props.name));
        })
        .catch(console.error)
    return (
        <div className='ingredients'>
            <h3>INGREDIENTS</h3>
            <div className='ings'>
                <ul>
                    {recipe.ingredients.map(ing => <li key={ing.id}>{ing.name}</li>)}
                </ul>
            </div>
        </div>
    );}

export default Ings;