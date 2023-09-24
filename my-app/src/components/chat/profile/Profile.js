import { useContext, useMemo } from "react";
import { ChatDataContext } from '../../services/context';
import { geraCorEmTomPastel } from "../../utils/getColor";
import { getFirstCharacterInTheName } from "../../utils/getInitial";
import styles from "./Profile.module.css";


export const Profile = () => {
    const[chatData, setChatData] = useContext(ChatDataContext);

    // useMemo memoriza o valor de firstCharacterInTheName para que a função não seja executada
    // toda vez que um estado alterar, melhorando a performance da página. 
    const firstCharacterInTheName = useMemo(() => {
        return getFirstCharacterInTheName(chatData.username);
    // esse valor só será recalculado se conteudo.username mudar, pois ai seria
    // necessário um novo valor para as iniciais baseado no nome do usuário.
    }, [chatData.username]);

    // useMemo memoriza o valor de profileColor para que a função não seja executada
    // toda vez que um estado alterar, melhorando a performance da página. 
    const profileColor = useMemo(() => {
        return geraCorEmTomPastel();
    }, []);

    return(
        <div className={styles.container}>
            <div className={styles.profileIcon} style={{backgroundColor: profileColor}}>
                <span>{firstCharacterInTheName}</span>
            </div>
            <p className={styles.name}>{chatData.username}</p>
            <p className={styles.roomCode}>{chatData.room}</p>
        </div>
    );
}