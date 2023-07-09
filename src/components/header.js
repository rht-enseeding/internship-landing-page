import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { logo } from '../assets';

function Header() {
   const handleColumnClick = (link) => {
     window.location.href = link; // Redirect to the provided link
   };
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="Navbar">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="" style={{ height: "70px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{width:"60%"}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 mx-2">
                  <Nav.Link href="#action1" id="navlink" className="headlink">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#action1" id="navlink" className="headlink">
                    Instructor
                  </Nav.Link>
                  <Nav.Link href="#action1" id="navlink" className="headlink">
                    College
                  </Nav.Link>
                  <Nav.Link href="#action1" id="navlink" className="headlink">
                    Employer
                  </Nav.Link>
                  <Nav.Link
                    href="https://app.interncove.com/"
                    id="navlink"
                    className="headlink"
                  >
                    Login
                  </Nav.Link>
                  <button
                    className="navbtn px-1 effect"
                    onClick={() =>
                      handleColumnClick("https://app.interncove.com/")
                    }
                  >
                    Register
                  </button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;