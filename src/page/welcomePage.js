import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/welcomePage.css'
import { Link } from "react-router-dom";
import ButtonItem from "../components/Button";

export default function WelcomePage() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={3} style={{ backgroundColor: '#0000a0',height:'100vh'}}>
            <h6 style={{color:'white', marginLeft:'4%', marginTop:'4%'}}>BALINESS</h6>
            <h1 className="title text-center">BALI</h1>
            <p className="explanation">
              Plan your vacation in one of <br /> the 
              most beautiful place in the world
            </p>
            <Link to="/home" >
                <ButtonItem style={{ marginLeft: '4%'}} title="Explore" />
            </Link>
            
          </Col>
          <Col md={9} style={{padding:'0'}}>
          <video  style={{height:'100%', width:'100%', objectFit:'cover'}} autoPlay loop muted>
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-man-looks-over-cliff-edge-to-sea-on-bali-indonesia-12998-large.mp4"
              type="video/mp4"
            ></source>
            Sorry, your browser doesn't support videos.
          </video>
          </Col>
        </Row>
      </Container>
    </>
  );
}
