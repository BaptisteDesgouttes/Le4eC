import { React } from 'react';
import './Back.css';

export const Back = (props) => (
    <div className='back'>
        <img src='https://www.madmoizelle.com/wp-content/uploads/2014/04/hello-kitty-oeuf.jpg' alt='emission logo' />
        <h4>{props.name}</h4>
    </div>
);

export default Back;