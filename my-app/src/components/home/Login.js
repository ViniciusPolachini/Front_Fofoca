import styles from './Login.module.css';

export default function Login() {
    return (
      <div className={styles.container}>
        <form className={styles.form}> 
            <div className={styles.inputDiv}>
                <label htmlFor="Nome">Nome:</label>
                <input id="Nome" type="text"/>
            </div>
            <div className={styles.inputDiv}>
                <label htmlFor="Code" >Key chat:</label>
                <input id="Code" type="text"/>
            </div>
            <input className={styles.button} type="submit" value="Fofocar"/>
        </form>
      </div>
    );
  }
  