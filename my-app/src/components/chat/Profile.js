import styles from "./Profile.module.css";

export default function Profile()
{

    const name = "Vinicius Polachini";
    const roomCode = "XSDTLRTQWEG";

    const getFirstCharacterInTheName = () => {
        const nameArray = name.split(" ");
        const profileChars = (nameArray[0][0] || '') + (nameArray[1]?.[0] || '');

        return profileChars;
    }

    const geraCorEmTomPastel = () => {
        const randomHue = Math.floor(Math.random() * 360); // Matiz (0-359)
        const randomSaturation = Math.floor(Math.random() * 10) + 40; // Saturação (60-100)
        const randomLuminosity = Math.floor(Math.random() * 20) + 60; // Luminosidade (60-90)

        return `hsl(${randomHue}, ${randomSaturation}%, ${randomLuminosity}%)`;
    }

    return(
        <div className={styles.container}>
            <div className={styles.profileIcon} style={{backgroundColor: geraCorEmTomPastel()}}>
                <span>{getFirstCharacterInTheName()}</span>
            </div>
            <p className={styles.name}>{name}</p>
            <p className={styles.roomCode}>{roomCode}</p>
        </div>
    );
}