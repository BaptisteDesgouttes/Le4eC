import { React } from 'react';

export const StepRecipe = (props) => (
    <div className='stepRecipe' onInput={(event) => console.log(props.todo)}>
        <input type='radio' id={'step'.concat(props.id)} name='step' value={'step'.concat(props.id)} />
        <label htmlFor={'step'.concat(props.id)}>{props.todo}</label>
    </div>
);

export default StepRecipe;