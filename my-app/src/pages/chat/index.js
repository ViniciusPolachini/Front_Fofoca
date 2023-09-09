import Profile from "../../components/chat/Profile"
import ChatRoom from "../../components/chat/ChatRoom"
import style from "./style.module.css"

export default function Chat() {
  return (
    <div className={style.container}>
        <ChatRoom/>
        <Profile/>
    </div>
  );
}

