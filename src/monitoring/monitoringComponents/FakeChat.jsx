import { React, useState } from 'react';

const updateChat = (data, usedMethod) => {
    fetch('http://localhost:8000/chat', 
            {
                method: usedMethod,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        .catch(console.error);
};

export const FakeChat = (props) => {
    const [pseudo, setPseudo] = useState('');
    const [content, setContent] = useState('');
    
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
                        updateChat({pseudo, content}, 'PUT');
                    }
                }}
            />
            <button type='submit' onClick={() => updateChat({pseudo, content}, 'PUT')}>Send</button>
            <button type='button' onClick={() => updateChat({'pseudo':'Nightbot','content':'Bienvenue sur le chat !'}, 'PUT')}>RESET</button>
        </div>
    );
};

export default FakeChat;