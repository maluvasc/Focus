import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

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
            <img className="icon" src="focus.png" alt="Logo Focus"></img>
          </div>
            {profiles.map((profile) => (
              <Nav.Link
                class="nav-link"
                key={profile.name}
                className={`link ${location.pathname === `/${profile.route}` ? "active" : ""}`}
              >
                <Link to={`/${profile.route}`} className="link">
                  {profile.name}
                </Link>
              </Nav.Link>
            ))}
        </div>
      </nav>
    </>
  );
}

export default NavbarFocus;
