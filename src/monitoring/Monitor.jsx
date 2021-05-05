import { React, useState, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Chat from '../components/Chat/Chat.jsx'
// import Back from '../components/Back/Back.jsx'
// import Ings from "../components/Ings/Ings.jsx"
// import Step from "../components/Step/Step.jsx"
import { StepRecipe } from './monitoringComponents/StepRecipe.jsx';
import { FakeChat } from './monitoringComponents/FakeChat.jsx';
import { Ingredients } from './monitoringComponents/Ingredients.jsx';

const Monitor = () => {
   
  let recipesNames = ['test', 'autre test'];
  let initialRecipe = {
    "id": 0,
    "name": "test",
    "ingredients": [
      {
        "id": 0,
        "name": "banane"
      },
      {
        "id": 1,
        "name": "pomme"
      }
    ],
    "steps": [
      {
        "id": 0,
        "step": "ajouter"
      },
      {
        "id": 1,
        "step": "melanger"
      }
    ]
  }
  const [recipe, setRecipe] = useState(initialRecipe);
  const [recipeName, setRecipeName] = useState(initialRecipe.name);

  useEffect(() => (
    fetch('https://my-json-server.typicode.com/BaptisteDesgouttes/Le4eC/recipes')
      .then(result => result.json())
      .then(data => {
        let newRecipe = data.find(element => element.name === recipeName);
        setRecipe(newRecipe);
      })
      .catch(console.error)
  ));
  
  // let listIngredients = ['premiering', 'deuxiemeing'];
  return (
    <div>

      {/* Allows to choose the recipe */}
      <div>
        <h3>RECIPE</h3>
        <select onChange={(event) => {
          setRecipeName(event.target.value);
          fetch('https://my-json-server.typicode.com/BaptisteDesgouttes/Le4eC/recipes')
            .then(result => result.json())
            .then(data => {
              let newRecipe = data.find(element => element.name === event.target.value);
              setRecipe(newRecipe);
            })
            .catch(console.error)
        }}>
          {recipesNames.map((name) => <option key={name} value={name}>{name}</option>)}
        </select>
      </div>

      {/* Monitors which step of the recipe is currently realized */}
      <div className='steps'>
        <h4>STEPS</h4>
        <div className='choicesteps'>
          {recipe.steps.map(step => <StepRecipe key={step.id} id={step.id} recipeId={recipe.id} todo={step.step} />)}
        </div>
      </div>

      {/* Management of ingredients */}
      <div className='ingredients'>
      <h4>INGREDIENTS</h4>
        {recipe.ingredients.map(ing => <Ingredients key={ing.id} id={ing.id} recipeId={recipe.id} ingredient={ing.name} />)}
      </div>
      
      {/* Allows to feed the fake chat */}
      <div className='chat'>
        <h3>FAKE CHAT</h3>
        <FakeChat />
      </div>
      
    </div>
  );
}
// eslint-disable-next-line no-lone-blocks
{/* onClick={(event) =>{ ( recipe.steps.map(step => (
            fetch('http://localhost:8000/steps/'.concat(step.id), 
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({"check": false})
                })
                .catch(console.error)
              ))) */}

export default Monitor;