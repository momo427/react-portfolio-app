import * as React from "react";
import { Nav } from "react-bootstrap";


function Navigation({ currentPage, handlePageChange }) {
  return (
    <React.Fragment>
      <Nav className='navi'>
        <Nav.Item>
          <Nav.Link
            href="#Home"
            onClick={() => handlePageChange("Home")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "Home" ? "nav-link " : "nav-link"}
          >
            HOME
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#Project"
            onClick={() => handlePageChange("Project")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Project" ? "nav-link " : "nav-link"
            }
          >
            PROJECTS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#Resume"
            onClick={() => handlePageChange("Resume")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Resume" ? "nav-link " : "nav-link"
            }
          >
            RESUME
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link " : "nav-link"
            }
          >
            CONTACT
          </Nav.Link>
        </Nav.Item>

       
      </Nav>
    </React.Fragment>
  );
}

export default Navigation;
