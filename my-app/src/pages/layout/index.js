import { Outlet } from "react-router-dom";
import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';

export default function Layout() {
  return (
    <div
    style={{
      height: "100%", 
      width: "100%", 
      maxWidth: "100vw", 
      displaty: "flex", }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

