import React from 'react';
import '../Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faSquareGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';



function Smallhome() {

const Typewriter=({text ,  delay})=>{
  const [currentText,setCurrentText]=React.useState('');
  const [currentIndex,setCurrentIndex]=React.useState(0);
  
  React.useEffect(()=>{
  if (currentIndex< text.length){
    const timeout=setTimeout(() =>{
      setCurrentText(prevText => prevText+ text[currentIndex]) ;
      setCurrentIndex(prevIndex=>prevIndex+1);
    },delay)
    return () => clearTimeout(timeout);
  }
  }, [currentIndex, delay, text]);

return <span>{currentText}</span>;
}


  return (
    < div  style={{ backgroundColor:"black",marginTop:"30px"}}>
    
  <div className="card-body" style={{ backgroundColor:"black",marginTop:"50px"}} >
      <div style={{marginTop:"50px",backgroundColor:"black"}}>
        <br style={{backgroundColor:"lightgray"}}/>
      <h1 style={{color:"#D98F66", marginLeft:"10px",marginTop:"25px"}}>Hi, I am Shradha Saxena</h1>
      </div>

   
    <p className="card-text" style={{color:"white", fontSize:"20px",marginLeft:"10px" ,marginTop:"20px"}}> 
     <Typewriter text="I am into frontend development ." delay={100} /></p>
     <button type="button" className="btn btn-outline-warning glowing-button" style={{ fontSize: "20px", fontFamily: "Roboto", fontWeight: "300px", marginLeft: "10px",marginTop:"20px", border: "3px solid" }}>HIRE ME</button>

    <br/>
    <button type="button" style={{marginTop:"30px",marginLeft:"10px" }} class="btn btn-outline-warning glowing-button">
    <a style={{color:" orange",textDecoration:" none"}} href="https://drive.google.com/file/d/10cN8o7CYZZarNW5CNEMOXRHaI0QpgzUF/view?usp=sharing" download="filename.pdf">Download CV</a>
</button>
< div className="card" style={{width: "20rem" ,backgroundColor:"black"}}>
    <div style={{backgroundColor:"black" ,height:"50px",marginTop:"20px",marginLeft:"100px"}}><span style={{ margin: "5px" ,color:"blue"}}><a  href="https://www.linkedin.com/in/shradha-saxena-875743224"><FontAwesomeIcon icon={faLinkedin} size='3x' /></a></span><span style={{ margin: "5px" }}><a style={{color:"white"}} href="https://github.com/ShradhaSaxena23" ><FontAwesomeIcon icon={faSquareGithub} size='3x' /></a></span><span style={{ margin: "5px"}}><a style={{color:"white"}}href="https://x.com/ShradhaSaxena_?t=BVKt1EWjsmCpN5UuuOnmKg&s=08"><FontAwesomeIcon icon={faXTwitter} size='3x' /></a></span></div>
   
       
     
    <img src="./Image/try.png" style={{backgroundColor:"black" ,marginTop:"25px" ,marginLeft:"50px"}} className="card-img-top" alt="..."></img>
   

  </div>
 
  
</div>

    </div>
  )
}

export default Smallhome;