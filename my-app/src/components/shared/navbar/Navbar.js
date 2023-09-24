import { useCallback, useContext } from 'react';
import { ChatDataContext } from '../../../services/context';
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const [chatData, setChatData] = useContext(ChatDataContext);

  // o useCallback memoria a execução da função e evita que ela seja reconstruída
  // toda vez que um estado atualizar, melhorando a performance do app.
  const handleExit = useCallback((e) => {
    e.preventDefault();
    const data = {...chatData};
    data.username = "";
    data.room = "";
    data.messages = "";
    setChatData(data);
    navigate("/");
  // a função irá sempre executar esses passos independente do valor de chatData
  // por isso não precisamos passar ele como dependência.
  }, [])

  return (
    <div className={styles.container}>   
      <div className={styles.welcomeContainer}>
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.0001 16V11.2C40.0001 8.21309 40.0001 6.71959 39.4187 5.57874C38.9075 4.57519 38.0916 3.7593 37.0881 3.24799C35.9473 2.66669 34.4537 2.66669 31.4667 2.66669H11.2001C8.21315 2.66669 6.71965 2.66669 5.5788 3.24799C4.57525 3.7593 3.75936 4.57519 3.24805 5.57874C2.66675 6.71959 2.66675 8.21309 2.66675 11.2V40L13.3334 34.6667M45.3334 45.3334L39.4833 41.4331C38.6841 40.9006 38.2846 40.6342 37.8523 40.4454C37.4686 40.2779 37.0667 40.1563 36.6545 40.0827C36.1902 40 35.7099 40 34.7497 40H21.8667C18.8798 40 17.3863 40 16.2455 39.4187C15.2419 38.9075 14.426 38.0915 13.9147 37.088C13.3334 35.9472 13.3334 34.4536 13.3334 31.4667V24.5334C13.3334 21.5464 13.3334 20.0528 13.9147 18.912C14.426 17.9085 15.2419 17.0926 16.2455 16.5813C17.3863 16 18.8798 16 21.8667 16H36.8001C39.787 16 41.2806 16 42.4214 16.5813C43.4249 17.0926 44.2409 17.9085 44.7521 18.912C45.3334 20.0528 45.3334 21.5464 45.3334 24.5334V45.3334Z" stroke="white" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {chatData.username!=="" && <p className={styles.welcomeText}>BEM-VINDO(A) {chatData.username.toUpperCase()} </p>}
      </div>
      {chatData.username!=="" && <button className={styles.logout} onClick={handleExit}>SAIR</button>}
    </div>
  );
}