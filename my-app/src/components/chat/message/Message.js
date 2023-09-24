import { useMemo } from 'react';
import { getFirstCharacterInTheName } from '../../utils/getInitial';
import styles from './Message.module.css';

export const Message = ({conteudo}) => {

    // useMemo memoriza o valor de firstCharacterInTheName para que a função não seja executada
    // toda vez que um estado alterar, melhorando a performance da página. 
    const firstCharacterInTheName = useMemo(() => {
        return getFirstCharacterInTheName(conteudo.username);
    // esse valor só será recalculado se conteudo.username mudar, pois ai seria
    // necessário um novo valor para as iniciais baseado no nome do usuário.
    }, [conteudo.username]);

    return(
        <div className={styles.mensagem} style={{alignSelf: !conteudo.isSender ? "flex-start":"flex-end"}}>
            {!conteudo.isSender && <div>
                <div style={{backgroundColor: conteudo.cor}}>{firstCharacterInTheName}</div>
                <span>{conteudo.username}</span>
            </div>}
            <p>{conteudo.text}</p>
        </div>
    );
}