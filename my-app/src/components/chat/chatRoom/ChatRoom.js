import { useEffect, useState, useContext } from 'react';
import { ChatDataContext } from '../../services/context';
import { socket } from '../../services/socket';
import { ChatInput } from '../chatInput/ChatInput';
import { Message } from '../message/Message';

import styles from './ChatRoom.module.css';

export const ChatRoom = () => {
    const[chatData, setChatData] = useContext(ChatDataContext);
    const [mensagens, setMensagens] = useState(chatData.messages);

    useEffect(()=>{
        socket.on("message", (data) => {
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
                            isSender: chatData.username === msg.username,
                            cor: geraCorEmTomPastel()
                        }}
                    />
                )}
            </div>
            <ChatInput/>
        </div>
    );
}