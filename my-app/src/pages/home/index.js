import { Login } from "../../components/home/login/Login";
import { WelcomeItem } from "../../components/home/welcomeItem/WelcomeItem";
import style from "./style.module.css"

export default function Home() {
  return (
    <div className={style.container}>
        <WelcomeItem/>
        <Login/>
    </div>
  );
}

