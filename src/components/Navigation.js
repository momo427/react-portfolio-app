import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap';

function Navigation ({ currentPage, handlePageChange }) {
  return (
        <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Tyra Ferguson</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link 
          href="#Home"
          onClick={() => handlePageChange('Home')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}

    
        > Home</Nav.Link>
           <Nav.Link 
          href="#Project"
          onClick={() => handlePageChange('Project')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}

    
        > Projects</Nav.Link>
      <Nav.Link 
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}

    
        > Resume</Nav.Link>
      <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
        <NavDropdown.Item href = "mailto: tydevspot@gmail.com">Email</NavDropdown.Item>
        <NavDropdown.Item href="https://www.linkedin.com/in/tyra-ferguson-0b1929114">LinkedIn</NavDropdown.Item>
        <NavDropdown.Item href="https://drive.google.com/file/d/1R3bUibay5m4ErC2U2W5C4aVRZqnlBuXz/view?usp=sharing">Download Resume</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="https://twitter.com/intent/tweet?text=@mo_winkle">Twitter</Nav.Link>
      <Nav.Link eventKey={2} href="https://twitter.com/intent/tweet?text=@mo_winkle">
        
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>


    )
}
export default Navigation;
