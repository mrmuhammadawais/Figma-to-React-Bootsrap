import { Container, Col } from "react-bootstrap";
import bgImage from "../assets/img/aboutBg.png";
import Logo from "../assets/img/Logo.png";
export const About = () => {
  return (
    <div className="about">
      <Container>
        <img
          src={bgImage}
          alt="backgroundimage"
          className="about-background-image"
        />
        <div className="about-section-container">
          <Col>
            <p>Strategische E-mailmarketing</p>
            <h2>Versterk uw Merk</h2>

            <h1>
              Dankzij onze gerichte aanpak en voortdurende optimalisatie van
              e-mailcampagnes, kunnen wij onze klanten een hoge mate van
              betrokkenheid en conversie garanderen. We begrijpen de dynamiek
              van de markt en passen onze strategieën voortdurend aan om ervoor
              te zorgen dat uw boodschap relevant en impactvol blijft. Met
              Favoriete Acties als uw partner in e-mailmarketing, bent u
              verzekerd van een betrouwbare en effectieve manier om uw doelgroep
              te bereiken en uw merk te versterken.
            </h1>

            <Col>
              <img className="aboutlogo" src={Logo} alt="picsss"></img>
            </Col>
            <h6>Uw acties, onze expertise - Succes in elke e-mai</h6>
          </Col>
        </div>
      </Container>
    </div>
  )
};