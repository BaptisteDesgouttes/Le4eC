import { React, useState } from 'react';

export const FakeChat = (props) => {
    const [pseudo, setPseudo] = useState('');
    const [content, setContent] = useState('');
    //const [message, setMessage] = useState({ pseudo:'', content:''});
    return (
        <div className='stepRecipe'>
            <input 
                type='text'
                placeholder='Fake Name'
                onChange={(event) => {
                    setPseudo(event.target.value);
                }}
            />
            <input 
                type='text'
                placeholder='Fake Chat'
                onChange={(event) => {
                    setContent(event.target.value);
                }}
                onKeyPress={(event) => 
                { 
                    if (event.key === 'Enter')
                    {
                        console.log({"pseudo": pseudo, "content": content});
                    }
                }}
            />
            <button type='submit' onClick={() => console.log({"pseudo": pseudo, "content": content})}>Send</button>
        </div>
    );
};

export default FakeChat;