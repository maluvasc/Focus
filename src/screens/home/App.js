import "./App.css";
import NavbarFocus from "../../components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PhotoCode from "./photo-code2.png"
import IconeLeticia from "./iconeleticia.png"
import IconeMalu from "./iconemalu.png"
import IconeNascimento from "./iconenascimento.png"
import iconePaulo from "./iconepaulo.png"
import IconeSalgado from "./iconesalgado.png"
import GitHubIcon from "./image-3.png"

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <NavbarFocus />
      <div className="home-app">
        <Image className="photo-code" src={PhotoCode} alt="logo" fluid style={{minHeight: "100vh"}}/>
      </div>
      <div className="projects-page">
      <div className="projects-block">
        <h1 style={{color: "#024AAC"}}><strong>Nosso projeto</strong></h1>
        <h2 style={{color: "#62B6CB"}}>Gerenciador de Videos com IA</h2>
        <Image className="photo-code" src="" alt="logo" fluid style={{height: "400px", width: "400px"}}/>
      </div>
      <div className="projects-home">
        <p>O Gerenciador de Videos com IA é um software em desenvolvimento, criada por um time <strong>qualificado</strong> e <strong>apaixonado</strong> por tecnologia.</p>
        <p>Nosso Front-end será feito em Javascript + framework React, e nosso Back-end feito na linguagem Java + framework Spring.</p>
        <h1 style={{color: "#024AAC"}}>Mais informações em breve!</h1>
        <div className="github-align">
          <Image className="github-logo"  src={GitHubIcon} alt="logo" fluid style={{height: "100px", width: "100px", color: "black"}}/>
          <a href="https://github.com/maluvasc/Focus" style={{textDecoration: "none"}}>Repositório Focus</a>
        </div>
        <div className="github-align">
          <Image className="github-logo" src={GitHubIcon} alt="logo" fluid style={{height: "100px", width: "100px", color: "black"}}/>
          <a href="https://github.com/maluvasc/FixIt"style={{textDecoration: "none"}}>Repositório e Projeto Gerenciador de Videos com IA</a>
        </div>
      </div>
      </div>
      <div className="team">
            <Container style={{backgroundColor: "#FFF"}}>
              <Row>
                <Col className="person" xs={6} md={2}>
                <div className="flex">
                  <Image
                    className="imgs"
                    src={IconeNascimento}
                    roundedCircle
                  />
                    <h4 className="nome">Gabriel Nascimento</h4>
                    <h6 className="cargo">Engenheiro Back-end</h6>
                    <p className="responsabilidade">Responsável por desenvolver a arquitetura do projeto, por criar APIs para consumo no sistema e estabelecer processos de desenvolvimento e deploy.</p>
                  </div>
                </Col>
                <Col className="person" xs={6} md={2}>
                <div className="flex">
                  <Image
                    className="imgs"
                    src={IconeSalgado}
                    roundedCircle
                  />
                  <h4 className="nome">Gabriel Salgado</h4>
                  <h6 className="cargo">Engenheiro de Qualidade</h6>
                  <p className="responsabilidade">Para garantir a qualidade geral do software, é responsável por conduzir os testes de qualidade e produz relatórios e documentação com os resultados encontrados.</p>
                  </div>
                </Col>
                <Col className="person" xs={6} md={2}>
                <div className="flex">
                  <Image
                    className="imgs"
                    src={IconeLeticia}
                    roundedCircle
                  />
                  <h4 className="nome">Letícia Gomes</h4>
                  <h6 className="cargo">Gerente de Projeto e Scrum Master</h6>
                  <p className="responsabilidade">Responsável por organizar e dirigir a equipe durante as atividades de Desenvolvimento de Software para cumprir escopo, parâmetros e requisitos do projeto.</p>
                  </div>
                </Col>
                <Col className="person" xs={6} md={2}>
                <div className="flex">
                  <Image
                    className="imgs"
                    src={IconeMalu}
                    roundedCircle
                  />
                  <h4 className="nome">Malu Vasconcelos</h4>
                  <h6 className="cargo">Ux Designer e Engenheira Front-end</h6>
                  <p className="responsabilidade">Responsável pelo design UI/UX do site e por selecionar, instalar, codificar e otimizar os elementos da interface do usuário do software. </p>
                  </div>
                </Col>
                <Col className="person" xs={6} md={2}>
                <div className="flex">
                  <Image
                    className="imgs"
                    src={iconePaulo}
                    roundedCircle
                  />
                  <h4 className="nome">Paulo Miguel</h4>
                  <h6 className="cargo">Analista de Negócios</h6>
                  <p className="responsabilidade">Responsável por analisar todos os documentos, processos e sistemas da organização para determinar todos os requisitos do Desenvolvimento de Software.</p>
                  </div>
                </Col>
              </Row>
            </Container>
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
