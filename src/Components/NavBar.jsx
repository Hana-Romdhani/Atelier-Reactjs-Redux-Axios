import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              
                <NavLink to="events"  style={({isActive})=>({textDecoration:isActive? "underline":"none"})}>Event</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    
}