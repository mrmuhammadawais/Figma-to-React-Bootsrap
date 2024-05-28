
import { Container, Row, Col, Nav } from "react-bootstrap";

import rightAbout from '../assets/img/rightAbout.png'
import foregroundblue from '../assets/img/foregroundblue.png'
import Logo from '../assets/img/Logo.png'
export const About=()=>{
    return(
       
    <Container>
 
    <Row>
    <Col >
    <div className="about">
 
      <Col className="grid-container1" >
      <img src={foregroundblue} alt='image1' class="grid-item image1"/>
      </Col>
      <Col className="grid-container1">
   <img src={rightAbout} alt='image2' class="grid-item image2"/>
   
   <Col className="aboutsection"> 

  <p>Strategische E-mailmarketing</p>
 <h2>Versterk uw Merk</h2>
                    
     <h1>Dankzij onze gerichte aanpak en voortdurende optimalisatie van e-mailcampagnes, kunnen wij onze klanten een hoge mate van betrokkenheid en conversie garanderen. We begrijpen de dynamiek van de markt en passen onze strategieën voortdurend aan om ervoor te zorgen dat uw boodschap relevant en impactvol blijft. Met Favoriete Acties als uw partner in e-mailmarketing, bent u verzekerd van een betrouwbare en effectieve manier om uw doelgroep te bereiken en uw merk te versterken.</h1>
     
<Col><img className="aboutlogo" src={Logo} alt="picsss"></img>
 </Col>
   <h10>Uw acties, onze expertise - Succes in elke e-mai</h10></Col>
   </Col>
      </div>
      </Col>
      <Col sm={4}></Col>
    </Row>
    </Container>
    
    )
}
