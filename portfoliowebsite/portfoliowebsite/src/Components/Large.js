

import React from 'react';
import "../Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInstagram, faLinkedin, faSquareGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const Home = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={{ backgroundColor: "black" }}>
        <div className="card mb-3" style={{ maxWidth: "100%", height: "720px", backgroundColor: "black" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="./Image/try.png" style={{ height: "400px", width: "500px", marginLeft: "120px", marginTop: "150px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body" style={{ margin: "100px" }}>
                <h1 style={{ color: "#D98F66", marginLeft: "10px", marginTop: "50px" }}>Hi, I am Shradha Saxena</h1>
                <p className="card-text" style={{ fontSize: "25px", fontFamily: "Roboto", fontWeight: "300px", color: "white", marginLeft: "50px" }}>
                  <Typewriter text="I am into frontend development ." delay={100} />
                </p>
                <button type="button" class="btn btn-outline-warning glowing-button" style={{ fontSize: "20px", fontFamily: "Roboto", fontWeight: "300px", marginLeft: "50px" }}>HIRE ME</button>
                <br/>
                <button type="button" class="btn btn-outline-warning glowing-button" style={{marginTop:"30px",marginLeft:"50px"}}><a style={{color:" orange",textDecoration:" none"}} href="https://drive.google.com/file/d/10cN8o7CYZZarNW5CNEMOXRHaI0QpgzUF/view?usp=sharing" download="filename.pdf">Download CV</a>
</button>
                <div style={{backgroundColor:"black" ,height:"50px",marginTop:"20px",marginLeft:"50px"}}><span style={{ margin: "5px" ,color:"blue" }}><a  href="https://www.linkedin.com/in/shradha-saxena-875743224"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a></span><span style={{ margin: "5px"}}><a style={{color:"white"}} href="https://github.com/ShradhaSaxena23" ><FontAwesomeIcon icon={faSquareGithub} size='2x' /></a></span><span style={{ margin: "5px" }}><a style={{color:"white"}}href="https://x.com/ShradhaSaxena_?t=BVKt1EWjsmCpN5UuuOnmKg&s=08"><FontAwesomeIcon icon={faXTwitter} size='2x' /></a></span></div>
   
    
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "black" }}></div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Home;
