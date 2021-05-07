import { React, useState, useEffect } from 'react';
import { StepRecipe } from './monitoringComponents/StepRecipe.jsx';
import { FakeChat } from './monitoringComponents/FakeChat.jsx';
import { Ingredients } from './monitoringComponents/Ingredients.jsx';
import { NewRecipe } from './monitoringComponents/NewRecipe.jsx';

const Monitor = () => {
  const [recipeSteps, setRecipeSteps] = useState([]);
  const [recipeIngs, setRecipeIngs] = useState([]);

  // Get the current recipe.
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:8000/recipe')
        .then(result => result.json())
        .then(data => {
          setRecipeSteps(data.steps);
          setRecipeIngs(data.ingredients);
        })
        .catch(console.error);
      }, 1000);
      
    return () => clearInterval(interval);
  });
  
  return (
    <div>

      {/* Monitors which step of the recipe is currently realized */}
      <div className='steps'>
        <h4>STEPS</h4>
        <div className='choicesteps'>
          {recipeSteps.map(step => <StepRecipe key={step.id} id={step.id} todo={step.step} />)}
        </div>
      </div>

      {/* Management of ingredients */}
      <div className='ingredients'>
      <h4>INGREDIENTS</h4>
        {recipeIngs.map(ing => <Ingredients key={ing.id} id={ing.id} ingredient={ing.name} />)}
      </div>
      
      {/* Allows to feed the fake chat */}
      <div className='chat'>
        <h3>FAKE CHAT</h3>
        <FakeChat />
      </div>

      {/* Allows to change the recipe */}
      <div className='ChangeRecipe'>
        <h4>CREATE AND CHANGE RECIPE</h4>
        <NewRecipe />
      </div>
      
    </div>
  );
}

export default Monitor;