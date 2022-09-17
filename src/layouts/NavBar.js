import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchLogo from "../assets/SVG/search.svg";
import ProfileLogo from "../assets/SVG/profile.svg";
import BagLogo from "../assets/SVG/bag.svg";
import AppleLogo from "../assets/SVG/apple.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar key="lg" bg="black" variant="dark" expand="lg" sticky="top" className="p-0 ">
        <Container fluid style={{ maxWidth: "1280px", height: "88px" }}>
          <Link to="/">
            <Navbar.Brand>
              <img src={AppleLogo} alt="React Logo" className="navbar__apple-logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>APPLE</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 ">
                <Nav.Link href="#Mac">Mac</Nav.Link>
                <Nav.Link href="#iPad">iPad</Nav.Link>
                <Nav.Link href="#iPhone">iPhone</Nav.Link>
                <Nav.Link href="#Watch">Watch</Nav.Link>
                <Nav.Link href="#TV">TV</Nav.Link>
                <Nav.Link href="#Accessories">Accessories</Nav.Link>
                <Nav.Link href="#Offers">Offers</Nav.Link>
                <Nav.Link href="/">|</Nav.Link>
                <Nav.Link href="#Support">Support</Nav.Link>
                <Nav.Link href="#Services">Services</Nav.Link>
                <Nav.Link href="#Locations">Locations</Nav.Link>
              </Nav>
              <Form className="d-flex align-items-center">
                <Nav.Link href="#Search">
                  <img src={SearchLogo} alt="React Logo" className="navbar__logo" />
                </Nav.Link>
                <Nav.Link href="#Login">
                  <img src={ProfileLogo} alt="React Logo" className="navbar__logo" />
                </Nav.Link>
                <Nav.Link href="#Cart">
                  <img src={BagLogo} alt="React Logo" className="navbar__logo" />
                </Nav.Link>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
