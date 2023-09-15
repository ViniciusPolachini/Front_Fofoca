import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { socket } from '../../services/socket';
import styles from './Login.module.css';

export default function Login() {
  const[nome, setNome] = useState("");
  const[code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log( {
      username: nome,
      room: code,
    });
    socket.emit("select_room", {
      username: nome,
      room: code,
    }, (response) => {
      console.log(response);
      navigate('/chat');
    })
  }

  return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}> 
            <div className={styles.inputDiv}>
                <label htmlFor="Nome">Nome:</label>
                <input id="Nome" type="text" onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div className={styles.inputDiv}>
                <label htmlFor="Code" >Key chat:</label>
                <input id="Code" type="text" onChange={(e) => setCode(e.target.value)}/>
            </div>
            <input className={styles.button} type="submit" value="Fofocar"/>
        </form>
      </div>
    );
  }
  