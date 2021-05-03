import { React, useState, useEffect } from 'react';
import './Chat.css';

let a = 0;
setInterval(()=> a++,1000);

export const Chat = () => {
    let initialMessage = {'pseudo':'Nightbot','content':'Bienvenue sur le chat !'};
    let i=0;
    const [lastMessage, setLastMessage] = useState(initialMessage);
    const [messages, setMessages] = useState([initialMessage]);
    const [messagesDiv, setMessagesDiv] = useState(<div></div>)

    // S'execute à chaque nouvel affichage => trouver un moyen de modifier l'affichage constamment
    useEffect(() => {
        console.log('change');
        return (
        fetch('http://localhost:8000/chat')
            .then(result => result.json())
            .then(data => {
                setMessagesDiv(
                    <div className='messages'>      
                        {messages.map(message => (
                            <div className='message' key={i++}> {/*//message.pseudo.concat(message.content) */}
                                <p>{message.pseudo}: {message.content}</p>
                            </div>
                        ))}
                    </div>
                );
                if(data.pseudo !== lastMessage.pseudo || data.content !== lastMessage.content)
                {
                    setLastMessage({'pseudo':data.pseudo, 'content':data.content})
                    let predicate = data.pseudo === initialMessage.pseudo && data.content === initialMessage.content;
                    predicate ? setMessages([initialMessage]) : setMessages(current => current.concat([data]));
                    
                }
            })
            .catch(console.error)
        )});

    return (
        <div className='chat'>
            <h3>CHAT</h3>
            {messagesDiv}
            
        </div>
    );
}



export default Chat;