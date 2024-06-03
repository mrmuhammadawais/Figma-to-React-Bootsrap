import {Row, Col,Container} from 'react-bootstrap'

import groped from '../assets/img/groped.png'
export const Banner=()=>{
return(

 
<Container>
<Row>
<div class="col-sm-6">
  {/* <Col> */}
  <p>Email Marketing</p>
         <h2>Effectieve Oplossingen met Favoriete Acties</h2>
        <h1>Favoriete Acties is een mediabureau dat producten en diensten aanbiedt aan haar publiek. Kwaliteit en prestatie staan bij ons voorop.</h1>
        <p>
        Bereik het Juiste Publiek met Onze Experts
        </p>
        <h1>Sinds 2024 hebben wij een team van online marketing experts verzameld, die zich specialiseren in e-mailmarketing. Met onze activiteiten richten wij ons erop om het aanbod van onze klanten onder de aandacht te brengen van het juiste publiek. Middels ons zorgvuldig opgebouwde  e-mailbestand, voorzien wij onze klanten van de meest kwalitatieve conversies.
        </h1>
        <p>Detailgericht Succes</p>
        <h1>Ons team van online marketing experts zorgt ervoor dat elke campagne effectief wordt uitgevoerd, met oog voor detail en prestatie. Door gebruik te maken van ons uitgebreide netwerk en expertise, bereiken we het juiste publiek en helpen we onze klanten hun marketingdoelen te bereiken. Bij Favoriete Acties staat klanttevredenheid centraal, en we streven ernaar om met elke e-mailcampagne de best mogelijke resultaten te behalen.</h1>
  </div>
 
  
  <Col > 
     <div class="grid-container"> 
       <img src={groped} alt='image1' class="grid-item item1"/>   
   
   
  </div>

  </Col>
  
       </Row>
 

      </Container>
)
}