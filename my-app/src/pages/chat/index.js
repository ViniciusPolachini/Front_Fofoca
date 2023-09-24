import { ChatRoom } from "../../components/chat/chatRoom/ChatRoom";
import { Profile } from "../../components/chat/profile/Profile";
import style from "./style.module.css"

export default function Chat() {
  return (
    <div className={style.container}>
        <ChatRoom/>
        <Profile/>
    </div>
  );
}

