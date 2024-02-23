import React from 'react'
import "../Heading.css" 


function Skills() {
  return (
    <div id="skill" style={{ backgroundColor: "black", textAlign: "left" ,marginTop:"50px"}}>
      <div>
        {/*<h1 style={{ fontWeight: 'bold',color:"whitesmoke", marginLeft:"30px" }}> PROGRAMMING SKILLS </h1>*/}
        <div class="center-box"  >
  <div class="animated-border-box" style={{marginLeft:"0px"}}>
    <h1   style={{marginLeft:"30px"}} >Skills</h1>
  </div>
</div>

        <ul style={{color:"whitesmoke",fontSize: "17px", listStyleType: "none"}}>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </div>
      <h2 style={{ margin: "15px", textDecoration: "underline", marginTop: "40px",color:"whitesmoke", marginLeft:"30px"  }}>Web Development</h2>
      <div>
        <h2 style={{color:"whitesmoke",fontSize:"25px", listStyleType: "none" ,marginLeft:"30px"}}>Frontend development</h2>
        <ul style={{color:"whitesmoke",fontSize: "17px", listStyleType: "none"}}>
          <li>ReactJs</li>
          <li>Javascript</li>
          <li>html5</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>
      </div>
      <h2 style={{ margin: "15px", textDecoration: "underline", marginTop: "40px" ,color:"whitesmoke", marginLeft:"30px" }}>Version Control</h2>
      <ul style={{color:"whitesmoke",fontSize: "17px", listStyleType: "none"}}>
        <li>
        Git 
        </li>
        <li>Github</li>
      </ul>
      <h2 style={{ margin: "15px", textDecoration: "underline", marginTop: "40px" ,color:"whitesmoke", marginLeft:"30px" }}>Artificial Intelligence</h2>
      <div>
        <ul style={{color:"whitesmoke",fontSize: "17px", listStyleType: "none"}}>
          <li>Numpy</li>
          <li>Pandas</li>
          <li>sklearn</li>
          <li>matplotlib</li>
        </ul>
      </div>
      <h2 style={{ margin: "15px", textDecoration: "underline", marginTop: "40px",color:"whitesmoke", marginLeft:"30px"  }}>Database Management</h2>
      <div>
        <ul style={{color:"whitesmoke",fontSize: "17px", listStyleType: "none"}}>
          <li>MySQL</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills;
