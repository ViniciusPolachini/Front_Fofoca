import { useEffect, useState, useContext, useMemo } from 'react';
import { ChatDataContext } from '../../services/context';
import { socket } from '../../services/socket';
import { geraCorEmTomPastel } from '../../utils/getColor';
import { ChatInput } from '../chatInput/ChatInput';
import { Message } from '../message/Message';

import styles from './ChatRoom.module.css';

export const ChatRoom = () => {
    const[chatData, setChatData] = useContext(ChatDataContext);
    const [mensagens, setMensagens] = useState(chatData.messages);

    useEffect(()=>{
        // abrindo a conexão ao montar o componente
        socket.on("message", (data) => {
            const msgs = [...mensagens];
            msgs.push(data);
            setMensagens(msgs);
        });

        return () => {
            // fechando a conexão ao desmontar o componente
            socket.off();
        }
    })

    // useMemo memoriza o valor de profileColor para que a função não seja executada
    // toda vez que um estado alterar, melhorando a performance da página. 
    const profileColor = useMemo(() => {
        return geraCorEmTomPastel();
    }, []);

    return(
        <div className={styles.container}>
            <div className={styles.messageArea}>
                {mensagens.map( msg => 
                    <Message
                        conteudo={{
                            text: msg.text,
                            username: msg.username,
                            isSender: chatData.username === msg.username,
                            cor: profileColor
                        }}
                    />
                )}
            </div>
            <ChatInput/>
        </div>
    );
}