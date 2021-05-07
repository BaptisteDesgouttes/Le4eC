import { React, useState } from 'react';

// Update the database with the new message
const updateChat = (dataBody, usedMethod) => {
    fetch('http://localhost:8000/chat', 
            {
                method: usedMethod,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(dataBody)
            })
        .catch(console.error);
};

export const FakeChat = (props) => {
    const [pseudo, setPseudo] = useState('');
    const [content, setContent] = useState('');
    
    return (
        <div className='fakeChat'>
            {/* Update the pseudo */}
            <input 
                type='text'
                placeholder='Fake Name'
                onChange={(event) => {
                    setPseudo(event.target.value);
                }}
            />
            {/* Update the content of the message */}
            <input 
                type='text'
                placeholder='Fake Chat'
                onChange={(event) => {
                    setContent(event.target.value);
                }}
                onKeyPress={(event) => 
                { 
                    // If we press enter in this last field, the message is sent
                    if (event.key === 'Enter') updateChat({pseudo, content}, 'PUT');
                }}
            />
            {/* To send the message */}
            <button type='submit' onClick={() => updateChat({pseudo, content}, 'PUT')}>Send</button>
            {/* To reset the chat with the default message */}
            <button type='button' onClick={() => updateChat({'pseudo':'Nightbot','content':'Bienvenue sur le chat !'}, 'PUT')}>RESET</button>
        </div>
    );
};

export default FakeChat;