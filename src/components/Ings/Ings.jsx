import { React, useState } from 'react';
import './Ings.css';

export const Ings = (props) => {
    const [divIngs, setdivIngs] = useState(<div></div>);
    fetch('https://my-json-server.typicode.com/BaptisteDesgouttes/Le4eC/recipes')
        .then(result => result.json())
        .then(data => {
            setdivIngs(
                <div className='ings'>
                    <ul>
                        {data.find(element => element.name === props.name).ingredients.map(ing => <li key={ing.id}>{ing.name}</li>)}
                    </ul>
                </div>
            )
        })
        .catch(console.error)
    return (
        <div className='ingredients'>
            <h3>INGREDIENTS</h3>
            {divIngs}
        </div>
    );}

export default Ings;