import styles from './ChatRoom.module.css';
import ChatInput from './ChatInput.js';
import Message from './Message.js';
import { socket } from '../../services/socket';
import { useEffect, useState } from 'react';

export default function ChatRoom()
{
    const [mensagens, setMensagens] = useState([]);

    useEffect(()=>{
        socket.on("message", (data) => {
            console.log(data);
            const msgs = [...mensagens];
            msgs.push(data);
            setMensagens(msgs);
        });
    })

    const geraCorEmTomPastel = () => {
        const randomHue = Math.floor(Math.random() * 360); // Matiz (0-359)
        const randomSaturation = Math.floor(Math.random() * 10) + 40; // Saturação (60-100)
        const randomLuminosity = Math.floor(Math.random() * 20) + 60; // Luminosidade (60-90)

        return `hsl(${randomHue}, ${randomSaturation}%, ${randomLuminosity}%)`;
    }

    return(
        <div className={styles.container}>
            <div className={styles.messageArea}>
                {mensagens.map( msg => 
                    <Message
                        conteudo={{
                            text: msg.text,
                            username: msg.username,
                            isSender: false,
                            cor: geraCorEmTomPastel()
                        }}
                    />
                )}
            </div>
            <ChatInput/>
        </div>
    );
}