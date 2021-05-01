import { React, useState } from 'react';

const postMessage = (pseudo, content) => {
    fetch('http://localhost:8000/chat', 
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',

                },
                body: JSON.stringify({pseudo, content})
            })
        .catch(console.error);
        console.log({"pseudo": pseudo, "content": content});
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
                        postMessage(pseudo, content);
                    }
                }}
            />
            <button type='submit' onClick={() => postMessage(pseudo, content)}>Send</button>
            <button type='button' onClick={() => {
                fetch('http://localhost:8000/chat')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(console.error);
            }}>
                GET
            </button>
        </div>
    );
};

export default FakeChat;