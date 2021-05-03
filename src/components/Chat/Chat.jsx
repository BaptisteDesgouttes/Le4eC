import { React, useState, useEffect } from 'react';
import './Chat.css';

export const Chat = () => {
    let initialMessage = {'pseudo':'Nightbot','content':'Bienvenue sur le chat !'};
    let i=0;
    const [lastMessage, setLastMessage] = useState(initialMessage);
    const [messages, setMessages] = useState([initialMessage]);
    //Pas de jsx dans du state, mettre plutôt juste des primitives normales
    const [messagesDiv, setMessagesDiv] = useState(<div></div>)

    // S'execute à chaque nouvel affichage => trouver un moyen de modifier l'affichage constamment
    useEffect(() => {
        console.log('change');
        return (
        fetch('http://localhost:8000/chat')
            .then(result => result.json())
            .then(data => {
                if(data.pseudo !== lastMessage.pseudo || data.content !== lastMessage.content)
                {
                    setLastMessage({'pseudo':data.pseudo, 'content':data.content})
                    let predicate = data.pseudo === initialMessage.pseudo && data.content === initialMessage.content;
                    predicate ? setMessages([initialMessage]) : setMessages(current => current.concat([data]));
                }
                setMessagesDiv(
                    <div className='messages'>      
                        {messages.map(message => (
                            <div className='message' key={i++}> {/*//message.pseudo.concat(message.content) */}
                                <p>{message.pseudo}: {message.content}</p>
                            </div>
                        ))}
                    </div>
                );
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