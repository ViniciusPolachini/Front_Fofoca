import WelcomeItem from "../../components/home/WelcomeItem"
import Login from "../../components/home/Login"
import style from "./style.module.css"

export default function Home() {
  return (
    <div className={style.container}>
        <WelcomeItem></WelcomeItem>
        <Login></Login>
    </div>
  );
}

