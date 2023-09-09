import styles from './ChatRoom.module.css';
import ChatInput from './ChatInput.js';
import Message from './Message.js';

export default function ChatRoom()
{
    const geraCorEmTomPastel = () => {
        const randomHue = Math.floor(Math.random() * 360); // Matiz (0-359)
        const randomSaturation = Math.floor(Math.random() * 10) + 40; // Saturação (60-100)
        const randomLuminosity = Math.floor(Math.random() * 20) + 60; // Luminosidade (60-90)

        return `hsl(${randomHue}, ${randomSaturation}%, ${randomLuminosity}%)`;
    }

    return(
        <div className={styles.container}>
            <div className={styles.messageArea}>
                <Message
                conteudo={{
                    userName: "Mauricio Meidas",
                    mensagem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    cor: geraCorEmTomPastel(),
                    isSender: false
                }}
                />
                <Message
                conteudo={{
                    userName: "Vinicius Polachini",
                    mensagem: "Adeus",
                    cor: geraCorEmTomPastel(),
                    isSender: true
                }}
                />
                <Message
                conteudo={{
                    userName: "Karol",
                    mensagem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    cor: geraCorEmTomPastel(),
                    isSender: false
                }}
                />
                <Message
                conteudo={{
                    userName: "Karol",
                    mensagem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    cor: geraCorEmTomPastel(),
                    isSender: false
                }}
                />
            </div>
            <ChatInput/>
        </div>
    );
}