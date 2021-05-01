import { React, useState } from 'react';
import { StepRecipe } from './monitoringComponents/StepRecipe.jsx';
import { FakeChat } from './monitoringComponents/FakeChat.jsx';
import { Ingredients } from './monitoringComponents/Ingredients.jsx';

const Monitor = () => {
  let initialRecipe = {
      "ingredients": [
          {
              "id": 0,
              "name": "sucre"
          },
          {
              "id": 1,
              "name": "sel"
          }
      ],
      "steps": [{
              "id": 0,
              "step":"ajouter plus"
          },
          {
              "id": 1,
              "step": "melanger plus"
          }
      ]
  }
  const [recipe, setRecipe] = useState(initialRecipe)
  
  return (
    <div>

      {/* Allows to choose the recipe */}
      <div>
        <h3>RECIPE</h3>
        <input 
          type='text'
          placeholder='Exact name of the recipe'
          onKeyPress={(event) => 
          { 
            if (event.key === 'Enter')
            {
              fetch('https://my-json-server.typicode.com/BaptisteDesgouttes/Le4eC/recipes')
                .then(result => result.json())
                .then(data => {
                  let newRecipe = data.find(element => element.name === event.target.value);
                  setRecipe(newRecipe);
                })
                .catch(console.error)
            }
          }}
        />
      </div>

      {/* Monitors which step of the recipe is currently realized */}
      <div className='steps'>
        <h4>STEPS</h4>
        {recipe.steps.map(step => <StepRecipe key={step.id} id={step.id} todo={step.step} />)}
      </div>

      {/* Management of ingredients */}
      <div className='ingredients'>
      <h4>INGREDIENTS</h4>
        {recipe.ingredients.map(ing => <Ingredients key={ing.id} id={ing.id} ingredient={ing.name} />)}
      </div>
      
      {/* Allows to feed the fake chat */}
      <div className='chat'>
        <h3>FAKE CHAT</h3>
        <FakeChat />
      </div>
      
    </div>
  );
}

export default Monitor;