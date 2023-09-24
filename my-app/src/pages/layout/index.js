import { useState } from "react";
import { ChatDataContext } from "../../services/context";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/shared/navbar/Navbar";
import { Footer } from "../../components/shared/footer/Footer";

export default function Layout() {
  const [chatData, setChatData] = useState({
    messages: [],
    username: "",
    room: ""
  });


  return (
    <div
    style={{
      height: "100%", 
      width: "100%", 
      maxWidth: "100vw", 
      displaty: "flex", }}
    >
      <ChatDataContext.Provider value ={[chatData, setChatData]}>
      <Navbar/>
      <Outlet />
      <Footer/>
      </ChatDataContext.Provider>
    </div>
  );
}

