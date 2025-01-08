import agile from "../assets/img/agile.png";
import js from "../assets/img/js.png";
import python from "../assets/img/python.png";
import sql from "../assets/img/sql.png";
import machinelearning from "../assets/img/machinelearning.png";
import html from "../assets/img/html.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
 
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Languages & Frameworks/Tools</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <img src= {python}/>
                                &nbsp;
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                            <img src= {html}/>
                                &nbsp;
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                            <img src= {js}/>
                            &nbsp;
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src= {sql}/>
                                &nbsp;
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src= {machinelearning}/>
                                &nbsp;
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src= {agile}/>
                                &nbsp;
                                <h5>Agile Methodologies</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
