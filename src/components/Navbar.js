
import { useState, useEffect } from "react";
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
      <Container>
     
         {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand>  */}
         <Nav className="me-auto">
          <Nav.Item className="text">Uw acties, onze expertise - Succes in elke e-mai</Nav.Item> 
         
           {/* <Nav.Link href="#features">Features</Nav.Link> 
           <Nav.Link href="#pricing">Pricing</Nav.Link>  */}
       
         </Nav>
      <NavDropdown title="NL" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Banner">Header</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Banner</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Footer
              </NavDropdown.Item>
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
