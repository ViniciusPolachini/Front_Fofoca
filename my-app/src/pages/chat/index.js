import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatRoom } from "../../components/chat/chatRoom/ChatRoom";
import { Profile } from "../../components/chat/profile/Profile";
import { ChatDataContext } from "../../services/context";
import style from "./style.module.css"

export default function Chat() {
  const [chatData, setChatData] = useContext(ChatDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(chatData)
    if(chatData.username === "") {
      navigate('/');
    }
  }, []);

  return (
    <div className={style.container}>
        <ChatRoom/>
        <Profile/>
    </div>
  );
}

