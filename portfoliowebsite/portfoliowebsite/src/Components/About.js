import React from 'react';

import "../Heading.css"

function About() {
  return (
    <div id="about" style={{ backgroundColor: "black" }}>

<div className="center-box" style={{marginLeft:"10px"}} >
  <div className="animated-border-box" style={{marginLeft:"0px"}}>
    <h1 style={{marginLeft:"0px"}} >About Me</h1>
  </div>
</div>


      <p style={{ marginLeft: "30px", fontSize: "17px", textAlign: "left",color:"whitesmoke"}}> I am currently a pre-final year Bachelor's of Technology student specializing in Artificial Intelligence,I am dedicated to staying abreast of the latest developments in AI. I am proficient in front-end development. My work involves translating complex algorithms into visually appealing and user-friendly interfaces. </p>
      <h2 style={{ marginLeft: "30px", fontWeight: "bold", textDecoration: "underline", textAlign: "left",color:"whitesmoke" }}>Education</h2>

      <div className="card mb-3" style={{maxWidth: "540px" , marginLeft:"30px",marginRight:"30px"}} >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./Image/lu.jpeg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Bachelor's of Technology</h5>
        <p className="card-text">Computer Science and Engineering and Artificial Intelligence, University of Lucknow</p>
        <p className="card-text"><small className="text-body-secondary">Nov 2021-Present</small></p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3" style={{maxWidth: "540px" , marginLeft:"30px",marginRight:"30px"}} >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./Image/Kvs.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Senior Secondary Education </h5>
        <p className="card-text">Kendriya Vidhyalaya AFS BKT Lucknow</p>
        <p className="card-text"><small className="text-body-secondary">Nov 2021-Present</small></p>
      </div>
    </div>
  </div>
</div>


      

      <h2 style={{ marginTop: "10px", marginLeft:"30px",fontWeight: "bold", textDecoration: "underline", textAlign: "left" ,color:"whitesmoke"}}>Work Experience</h2>
      <ul style={{ listStyle: "none", textAlign: "left" ,color:"whitesmoke" , fontSize: "17px"}}>
        <li>Coding Ninjas Campus Ambassdor  </li>
        <li>December,2023- Now</li>
        <li>Internship</li>
      </ul>

      <ul style={{ listStyle: "none", textAlign: "left",color:"whitesmoke",fontSize: "17px" }}>
        <li>RecursiveZero</li>
        <li>Frontend Intern</li>
        <li>January,2024-Februrary,2024</li>
        
        <li>Developed a product listing page using ReactJs ,typescript and tailwind to ensure improved code quality
and long term maintainability.</li>
      <li>Revamped responsive design for mobile design enhancing user experience.</li>

      </ul>


      <h2 style={{ marginTop: "10px", marginLeft:"30px",fontWeight: "bold", textDecoration: "underline", textAlign: "left" ,color:"whitesmoke"}}>Achievements and Certificates</h2>

      <ul style={{ listStyle: "none", textAlign: "left" ,color:"whitesmoke"}}>
        <li>CODEKAZE Sep'23 </li>
         <li>AIR 4224 </li>
         <li>College rank 1</li>
        </ul>
        <ul style={{ listStyle: "none", textAlign: "left" ,color:"whitesmoke"}}>
        <li>CODEKAZE June'23</li>
         <li>AIR 11228 </li>
         <li>College rank 4</li>
        </ul>
        <ul style={{ listStyle: "none", textAlign: "left" ,color:"whitesmoke"}}>
        <li>LEETCODE Submission 300+</li>
      </ul>



    </div>
  )
}

export default About;




