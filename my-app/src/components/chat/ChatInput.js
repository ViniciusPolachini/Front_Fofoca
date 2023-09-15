import styles from './ChatInput.module.css';
import { socket } from '../../services/socket';
import { useState } from 'react';

export default function ChatInput()
{
    const [mensagem, setMensagem] = useState("");

    const handleSubmit = (e) => {
        console.log("341231")
        e.preventDefault();
        socket.emit("message", {
          username: "Vinicius",
          room: "1212",
          message: mensagem
        })
      }


    return(
        <form className={styles.forumlario} onSubmit={handleSubmit}>
            <input type="text" className={styles.textInput} onChange={(e) => {setMensagem(e.target.value)}}></input>
            <button type="submit" className={styles.submitInput}>
            <svg width="28" height="28" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6852 17.5051H5.46719M5.14922 19.1088L3.29586 25.1467C2.28078 28.4535 1.77324 30.1069 2.13747 31.125C2.45377 32.0094 3.13311 32.6797 3.97138 32.935C4.93667 33.2287 6.39463 32.5131 9.31055 31.0822L28.0043 21.9079C30.8505 20.511 32.2736 19.8127 32.7134 18.8425C33.0956 17.9996 33.0956 17.0104 32.7134 16.1675C32.2736 15.1975 30.8505 14.4991 28.0043 13.1022L9.27831 3.91221C6.37117 2.4855 4.91762 1.77214 3.95328 2.06478C3.11581 2.31891 2.43654 2.9875 2.11914 3.87008C1.75365 4.88637 2.25577 6.53621 3.26001 9.8359L5.15282 16.0553C5.32529 16.622 5.41154 16.9054 5.44557 17.1951C5.47579 17.4524 5.47547 17.7127 5.44467 17.9698C5.40994 18.2595 5.32304 18.5425 5.14922 19.1088Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
        </form>
    );
}