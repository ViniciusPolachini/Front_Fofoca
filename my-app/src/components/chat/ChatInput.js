import styles from './ChatInput.module.css';

export default function ChatInput()
{
    return(
        <form className={styles.forumlario}>
            <input type="text" className={styles.textInput}></input>
            <input type="submit" value=">" className={styles.submitInput}></input>
        </form>
    );
}