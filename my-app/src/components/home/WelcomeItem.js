import imagem from "../../images/fofoca.png";
import styles from './WelcomeItem.module.css';

export default function WelcomeItem() {
    return (
      <div className={styles.container}>
        <div>
          <p className={styles.titulo}>FoFoca</p>
          <p className={styles.subtitulo}>O melhor site de chat da SECOMPP</p>
        </div>
        <img src={imagem} className={styles.imagem}></img>
      </div>
    );
  }
  
  