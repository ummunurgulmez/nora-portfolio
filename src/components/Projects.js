import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import EducationTimeline from "./EducationTimeline";
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
      linkUrl: "",
    },
    {
      title: "Cryptocurrency Forecasting",
      description: "Python, Machine Learning Model (LSTM), Data Manipulation Libraries (Pandas, NumPy), Data Visualization (Matplotlib, Seaborn), Evaluation Metrics (MSE, RMSE)",
      imgUrl: projImg2,
      linkUrl: "https://github.com/kutlinho/Team9_CryptocurrencyForecasting"
    },
    {
      title: "Data Journalism with Anime",
      description: "Python, Data Manipulation Libraries (Pandas, NumPy), Data Visualization (Matplotlib, Seaborn)",
      imgUrl: projImg3,
      linkUrl: "https://github.com/ummunurgulmez/Data-Journalism-with-Anime"
    },
    {
      title: "Shopping App - Pochette",
      description: "Java, Firebase Database, Android Studio, OOP Principles",
      imgUrl: projImg5,
      linkUrl: "https://github.com/ummunurgulmez/android-java-alisveris-uygulamasi"
    },
    {
      title: "Bridge Web Site",
      description: "Flutter, Python, Django, HTML/CSS",
      imgUrl: projImg4,
      linkUrl: "https://github.com/ummunurgulmez/bridge_web"
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
                <h2>About Me</h2>
                <p>Built projects, earned degreese and yes, I can totally discuss tech and random life debates in English.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Languages</Nav.Link>
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
                      <p>*Some projects come with a GitHub twist—click and explore the code magic! 🚀✨</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <EducationTimeline />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> Oh, and by the way, my English? It's B2-level awesome! 🎯 I can discuss complex topics, share opinions, and maybe even convince you that cats are secretly running the world.😹</p>
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
