
import React from 'react';
import "../Heading.css" 

function Projects() {
  const redirectToGitHub = (repositoryLink) => {
    window.open(repositoryLink, "_blank");
  };

  return (
    <div id="project" style={{ backgroundColor: "black", marginTop: "50px" }}>
    {/*  <h1 style={{ textAlign: "left", marginLeft: "30px", color: "whitesmoke" }}>PROJECTS AND MODELS</h1>*/}
    <div class="center-box"  >
  <div class="animated-border-box" style={{marginLeft:"0px"}}>
    <h1 style={{marginLeft:"-40px"}} >Project</h1>
  </div>
</div>

      <h3 style={{ marginTop: "2px", textDecoration: "underline", color: "whitesmoke", textAlign: "left", marginLeft: "30px" }}>FrontEnd Projects</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center" style={{ marginTop: "5px", marginLeft: "20px" }}>
        <div className="col" onClick={() => redirectToGitHub("https://github.com/ShradhaSaxena23/Portfolio.git")}>
          <div className="card" style={{ width: "22rem", cursor: "pointer", marginRight:"20px" }}>
            <img src="./Image/Screenshot (8).png" style={{ height: "200px" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ backgroundColor: "#F5F5F5" }}>
              <h5 className="card-title">Portfolio</h5>
              <p className="card-text">A portfolio website with REACTJS, JS, BOOTSTRAP</p>
            </div>
          </div>
        </div>
        <div className="col" onClick={() => redirectToGitHub("https://github.com/ShradhaSaxena23/Wynk-Music-clone.git")}>
          <div className="card" style={{ width: "22rem", cursor: "pointer" , marginRight:"20px"}}>
            <img src="./Image/Screenshot (4).png" style={{ height: "200px" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ backgroundColor: "#F5F5F5" }}>
              <h5 className="card-title">Wynk Music App Clone</h5>
              <p className="card-text">An online real-time music app using JAVASCRIPT, CSS, HTML5</p>
            </div>
          </div>
        </div>
        <div className="col" onClick={() => redirectToGitHub("https://github.com/ShradhaSaxena23/Weather-App.git")}>
          <div className="card" style={{ width: "22rem", cursor: "pointer" ,marginRight:"20px"}}>
            <img src="./Image/Screenshot (6).png" style={{ height: "200px" }} className="card-img-top" alt="..." />
            <div className="card-body" style={{ backgroundColor: "#F5F5F5" }}>
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">A weather predictor using JAVASCRIPT, HTML5, CSS, BOOTSTRAP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
