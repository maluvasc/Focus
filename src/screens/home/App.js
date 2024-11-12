import "./App.css";
import NavbarFocus from "../../components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <NavbarFocus />
      <div className="home-app">
        <Image className="photo-code" src="./photo-code2.png" alt="logo" fluid style={{minHeight: "100vh"}}/>
      </div>
      <footer>
        <p>
          2024 © FOCUS. Todos os
          direitos reservados.
        </p>
      </footer>
    </>
  );
}

export default App;
