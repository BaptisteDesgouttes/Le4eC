import { React, useState } from 'react';

export const Chat = () => {
    const [message, setMessage] = useState({'pseudo':'', 'steps':''})

    return (
        <div className='message'>
            <button type='button' onClick={(event) => {
                fetch('http://localhost:8000/chat')
                    .then(result => result.json())
                    .then(data => {
                        setMessage(data[0]);
                        console.log(data);
                    })
                    .catch(console.error);
            }}>
                UPDATE
            </button>
            <p>{message.pseudo}: {message.content}</p>
        </div>
    );
}

export default Chat;