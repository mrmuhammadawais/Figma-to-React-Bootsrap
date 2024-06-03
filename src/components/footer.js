import React from "react";
import {Col,Row,Container} from 'react-bootstrap'


  export const Footer=()=>{
     return(
      <footer className="footer">
      <div className="footer-top text-white">
        <Container className="py">
          <Row>
            <Col md={4} className="text-center text-md-left">
              <h7>Favoriete Acties is deel van:</h7>
              <div className="text">PubliSquare BV 
                    Weena 788 
                    3014 DA, Rotterdam  
                    Nederland
                    dpo@favortieteacties.n</div>
            </Col>
           
            <Col md={8} className="text-center text-md-right">
            
              <ul className="list-unstyled">
                <li><a href="/" className="text-white">Home</a></li>
                <li><a href="/" className="text-white">Contact</a></li>
                <li><a href="/" className="text-white">Privacy Policy</a></li>
            
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom text-white">
        <Container className="py-2">
          <Row>
            <Col className="text-left">
              <p className="small mb-0">©Favoriete Acties - 2024.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};
    