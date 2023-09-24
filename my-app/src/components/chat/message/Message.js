import styles from './Message.module.css';

export const Message = ({conteudo}) => {
    const getFirstCharacterInTheName = () => {
        const nameArray = conteudo.username.split(" ");
        const profileChars = (nameArray[0][0] || '') + (nameArray[1]?.[0] || '');

        return profileChars;
    }

    return(
        <div className={styles.mensagem} style={{alignSelf: !conteudo.isSender ? "flex-start":"flex-end"}}>
            {!conteudo.isSender && <div>
                <div style={{backgroundColor: conteudo.cor}}>{getFirstCharacterInTheName()}</div>
                <span>{conteudo.username}</span>
            </div>}
            <p>{conteudo.text}</p>
        </div>
    );
}