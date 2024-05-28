import React from "react";
import {Col,Row} from 'react-bootstrap'

 import copyright from '../assets/img/copyright.png'
  export const Footer=()=>{
     return(
        
 
  <Col>



    <footer className="footer">
    <div className="footer-content">
      <div className="footer-item">
        <h3>Favoriete Acties is deel van:</h3>
        <h4>PubliSquare BV</h4>
        <p2>Weena 788 <br/>
3014 DA, Rotterdam  <br/>
Nederland <br/>
dpo@favortieteacties.nl</p2>
      </div>
      <div className="footer-item">
       
       
      </div>
      <div className="footer-item">
       
         <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Contact </a></li>
          <li><a href="/">Privacy Policy</a></li>
        </ul> 
      </div>
    </div>
  </footer>

    <footer className="footersecond">
    <div className="footer-contentscore">
      <div className="footer-itemtwo">
        
        <p2>Favoriete Acties - 2024</p2>
        <img className="copyright" src={copyright} alt="copyright"></img>
      </div>
      
      </div>
  </footer>
      </Col> 
        

 
        

   
 

    )}


