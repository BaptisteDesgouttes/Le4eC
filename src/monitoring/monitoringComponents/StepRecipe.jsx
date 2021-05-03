import { React } from 'react';

export const StepRecipe = (props) => {
    
    return (
        <div className='stepRecipe' onClick={(event) => (
            fetch('http://localhost:8000/steps/'.concat(props.id), 
                {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({"check": props.id.toString() === event.target.value.toString()})
                })
                .catch(console.error)
        )}>
            <input type='radio' id={'step'.concat(props.id)} name='step' value={props.id} />
            <label htmlFor={'step'.concat(props.id)}>{props.todo}</label>
        </div>
    );
};

export default StepRecipe;