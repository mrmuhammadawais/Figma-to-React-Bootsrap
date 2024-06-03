

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Container} from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from '../assets/img/logo1.png'

export const NavBar = () => {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark;">
      <Container sm={6}>
     
        
         <Nav className="me-auto">
          <Nav.Item className="text">Uw acties, onze expertise - Succes in elke e-mai</Nav.Item> 
         
       
         </Nav>
      <NavDropdown  title="NL">
             
          </NavDropdown>
       </Container>
    </Navbar>

    <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
         
          <Nav className="me-auto">
          <img className="logo" src={logo1} alt="mylogo"></img>
          </Nav>
          <Navbar.Text>
            <a href="#para">Contact</a>
          </Navbar.Text>
        </Container>
      </Navbar>

</>
   
    
  );
}
