import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Development of a Secure Communication Protocol for UAV.jpg";
import projImg2 from "../assets/img/Cryptocurrency Forecasting.jpg";
import projImg3 from "../assets/img/Data Journalism with Anime.jpg";
import projImg4 from "../assets/img/Bridge Web Site for disabled people.jpg";
import projImg5 from "../assets/img/Shopping App - Pochette.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Development of a Secure Communication Protocol for UAVs",
      description: "Python, Encryption Algorithms(ECC/AES-GCM), NS-3 Simulation, OpenSSL, SHA-256, E-signature",
      imgUrl: projImg1,
    },
    {
      title: "Cryptocurrency Forecasting",
      description: "Python, Machine Learning Model (LSTM), Data Manipulation Libraries (Pandas, NumPy), Data Visualization (Matplotlib, Seaborn), Evaluation Metrics (MSE, RMSE)",
      imgUrl: projImg2,
      link: "https://github.com/kutlinho/Team9_CryptocurrencyForecasting"
    },
    {
      title: "Data Journalism with Anime",
      description: "Python, Data Manipulation Libraries (Pandas, NumPy), Data Visualization (Matplotlib, Seaborn)",
      imgUrl: projImg3,
      link: "https://github.com/ummunurgulmez/Data-Journalism-with-Anime"
    },
    {
      title: "Shopping App - Pochette",
      description: "Java, Firebase Database, Android Studio, OOP Principles",
      imgUrl: projImg5,
      link: "https://github.com/ummunurgulmez/android-java-alisveris-uygulamasi"
    },
    {
      title: "Bridge Web Site",
      description: "Flutter, Python, Django, HTML/CSS",
      imgUrl: projImg4,
      link: "https://github.com/ummunurgulmez/bridge_web"
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
