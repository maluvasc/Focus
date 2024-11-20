import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import FocusLogo from "./focus.png"

function NavbarFocus() {
  const location = useLocation();
  const profiles = [
    { name: "Início", route: "" },
    { name: "Projetos", route: "projetos" },
    { name: "Equipe", route: "equipe" }
  ];

  return (
    <>
    <nav class="navbar navbar-light" style={{backgroundColor: "#024AAC", height: "100px"}}>
    <div class="container">
          <div className="brand">
            <img className="icon" src={FocusLogo} alt="Logo Focus"></img>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarFocus;
