import { useEffect, useState, useContext, useMemo, useRef, useCallback } from 'react';
import { ChatDataContext } from '../../../services/context';
import { socket } from '../../../services/socket';
import { generateColorByUsername } from '../../utils/getColor';
import { ChatInput } from '../chatInput/ChatInput';
import { Message } from '../message/Message';

import styles from './ChatRoom.module.css';

export const ChatRoom = () => {
    const[chatData, setChatData] = useContext(ChatDataContext);
    const [mensagens, setMensagens] = useState(chatData.messages);
    
    const messageAreaRef = useRef(null);

    useEffect(()=>{
        // abrindo a conexão ao montar o componente
        socket.on("message", (data) => {
            const msgs = [...mensagens];
            msgs.push(data);
            setMensagens(msgs);
        });

        // scroll messageArea to bottom
        if (messageAreaRef.current) {
            messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
        }

        return () => {
            // fechando a conexão ao desmontar o componente
            socket.off("message");
        }
    })

    // useMemo memoriza o valor de profileColor para que a função não seja executada
    // toda vez que um estado alterar, melhorando a performance da página. 
    const profileColor = useCallback((username) => {
        return generateColorByUsername(username);
    }, []);

    return(
        <div className={styles.container}>
            <div className={styles.messageArea} ref={messageAreaRef}>
                {mensagens.map( msg => 
                    <Message
                        conteudo={{
                            text: msg.text,
                            username: msg.username,
                            isSender: chatData.username === msg.username,
                            cor: profileColor(msg.username)
                        }}
                    />
                )}
            </div>
            <ChatInput messageAreaRef={messageAreaRef}/>
        </div>
    );
}