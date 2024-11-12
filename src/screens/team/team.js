import "./team.css";
import NavbarFocus from "../../components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Team() {
  return (
    <>
      <NavbarFocus />
        <div className="team">
            <Container style={{backgroundColor: "#CAE9FF"}}>
              <Row>
                <Col className="person" xs={6} md={2}>
                <div className="flex">
                  <Image
                    className="imgs"
                    src="https://uploads.spiritfanfiction.com/historias/capitulos/201706/haikyuu-x-leitor-9218701-050620172337.jpg"
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
                    src="https://uploads.spiritfanfiction.com/historias/capitulos/201706/haikyuu-x-leitor-9218701-050620172337.jpg"
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
                    src="https://uploads.spiritfanfiction.com/historias/capitulos/201706/haikyuu-x-leitor-9218701-050620172337.jpg/"
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
                    src="https://uploads.spiritfanfiction.com/historias/capitulos/201706/haikyuu-x-leitor-9218701-050620172337.jpg"
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
                    src="https://uploads.spiritfanfiction.com/historias/capitulos/201706/haikyuu-x-leitor-9218701-050620172337.jpg"
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

export default Team;
