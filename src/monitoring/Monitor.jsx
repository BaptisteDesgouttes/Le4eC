import { React, useState } from 'react';
import { StepRecipe } from './monitoringComponents/StepRecipe.jsx';
import { FakeChat } from './monitoringComponents/FakeChat.jsx';
import { Ingredients } from './monitoringComponents/Ingredients.jsx';



let ingredients = [
  {
    'id':1,
    'name':'Banana'
  },
  {
    'id':2,
    'name':'Apple'
  }
]

const Monitor = () => {
  const [recipe, setRecipe] = useState({"name":null, "steps":[]})
  fetch('https://my-json-server.typicode.com/BaptisteDesgouttes/Le4eC/recipes')
    .then(result => result.json())
    .then(data => {
      setRecipe(data[0]);
    })
    .catch(console.error);
  return (
    <div>
      {/* Monitors which step of the recipe is currently realized */}
      <div className='steps'>
        {recipe.steps.map(step => <StepRecipe key={step.id} id={step.id} todo={step.step} />)}
      </div>
      
      {/* Allows to feed the fake chat */}
      <div className='chat'>
        <FakeChat />
      </div>

      {/* Management of ingredients */}
      <div className='ingredients'>
        {ingredients.map(ing => <Ingredients key={ing.id} id={ing.id} ingredient={ing.name} />)}
      </div>
      
    </div>
  );
}

export default Monitor;