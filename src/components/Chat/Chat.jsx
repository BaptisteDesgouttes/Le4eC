import { React, useState, useEffect } from 'react';
import './Chat.css';

export const Chat = () => {
    let initialMessage = {'pseudo':'Nightbot','content':'Bienvenue sur le chat !'};
    const [lastMessage, setLastMessage] = useState(initialMessage);
    const [messages, setMessages] = useState([initialMessage]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:8000/chat')
                .then(result => result.json())
                .then(data => {
                    if(data.pseudo !== lastMessage.pseudo || data.content !== lastMessage.content) // Only print a message if it is a new one
                    {
                        setLastMessage({'pseudo':data.pseudo, 'content':data.content}) // To compare above
                        let predicate = data.pseudo === initialMessage.pseudo && data.content === initialMessage.content;
                        predicate ? setMessages([initialMessage]) : setMessages(current => current.concat([data]));
                    }
                })
                .catch(console.error)
        }, 1000);
        
        return () => clearInterval(interval);
      })

    return (
        <div className='chat'>
            <h3>CHAT</h3>
            <div className='messages'>      
                {messages.map(message => (
                    <div className='message' key={message.pseudo.concat(message.content)}>
                        <p className="pseudo">{message.pseudo} :</p><p className="Content">{message.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

//TEST

// import { React, useState, useEffect } from 'react';
// import './Chat.css';

// export const Chat = () => {
//     let initialMessage = {'pseudo':'Nightbot','content':'Bienvenue sur le chat !'};
//     const [messages, setMessages] = useState([initialMessage]);
    
//     useEffect(() => {
//         const interval = setInterval(() => {
//             fetch('http://localhost:8000/chat')
//                 .then(result => result.json())
//                 .then(data => setMessages(data))
//                 .catch(console.error)
//         }, 1000);
        
//         return () => clearInterval(interval);
//       })

//     return (
//         <div className='chat'>
//             <h3>CHAT</h3>
//             <div className='messages'>      
//                 {messages.map(message => (
//                     <div className='message' key={message.pseudo.concat(message.content)}>
//                         <p className="pseudo">{message.pseudo} :</p><p className="Content">{message.content}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


export default Chat;