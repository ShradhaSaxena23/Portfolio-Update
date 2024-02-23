



import React from 'react'




   
   function Navbar() {
     return (
       <div >
       <nav className="navbar bg-body-tertiary fixed-top" style={{ padding:"0px"}}>
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " ></span>
    </button>
    <div  style={{backgroundColor:"#F7F7F7"}} className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"style={{backgroundColor:"lightgray"}} >
      <div className="offcanvas-header">
        
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      
      <div className="offcanvas-body" style={{backgroundColor:"#F7F7F7"}} >
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#project">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skill">Skills</a>
          </li>
          </ul>

           
        
      </div>
    </div>
  </div>
</nav>

       </div>
     )
   }
   
   export default Navbar