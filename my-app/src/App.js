import Home from './pages/home/';
import Chat from './pages/chat';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div style={{
        height: "100%", 
        width: "100%", 
        maxWidth: "100vw", 
        displaty: "flex", 
      }}>
      <Navbar />
      <Chat/>
      <Footer />
    </div>
  );
}

export default App;
