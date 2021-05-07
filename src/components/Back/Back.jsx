import { React, useState, useEffect } from 'react';
import './Back.css';

export const Back = (props) => {
    const [recipeName, setRecipeName] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:8000/recipe')
                .then(result => result.json())
                .then(data => setRecipeName(data.name)) // data contains the recipe
                .catch(console.error);
            }, 1000);
            
        return () => clearInterval(interval);
      });
    return (
        <div className='back'>
            {/* <img src='https://www.madmoizelle.com/wp-content/uploads/2014/04/hello-kitty-oeuf.jpg' alt='emission logo' /> */}
            {/* <h2 className='showTitle'>Le4eC</h2> */}
            <h4 className='recipeName'>{recipeName}</h4>
        </div>
    );
};

export default Back;