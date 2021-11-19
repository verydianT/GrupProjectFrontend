import "bootstrap/dist/css/bootstrap.min.css";
import ButtonItem from "../components/Button";
import Carousell from "../components/Carousel";
import Gallery from "../components/Gallery";
import NaviBar from "../components/Navbar";
import Slide from "../components/Slider";
import "../FolderCSS/Slider.css";
import '../FolderCSS/Content.css';
import { Link } from "react-router-dom";
import {Container, Row, Col, Image, Card} from 'react-bootstrap';
import ScrollToTop from "../components/ScrollToTop";

// Landing Page
const dataSlider = [
  {
    image: "https://images.unsplash.com/photo-1595319101337-601371f02e1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
    alt: "Image 1",
    text: "Nusa Penida",
    link: "/wisata1",
  },
  {
    image: "https://images.unsplash.com/photo-1444194563460-454833ba6005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80",
    alt: "Image 2",
    text: "Ubud",
    link: "/wisata1",
  },
  {
    image: "https://images.unsplash.com/photo-1538172522459-61e5aede6d06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80",
    alt: "Image 3",
    text: "Kuta",
    link: "/wisata1",
  },
  {
    image: "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    alt: "Pura Uluwatu",
    text: "Pura Uluwatu",
    link: "/wisata1",
  },
  {
    image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_klook_water/activities/dw5mamvpyhc4jp0xohoc/Vue%20Beach%20Club%20Day%20Pass%20di%20Canggu.jpg",
    alt: "Image 5",
    text: "Vue Beach Club, Canggu",
    link: "/wisata1",
  },
];

const dataLandingPage = [
  {
    content: (
      <>
        <img className="d-block w-100" src="https://images.unsplash.com/photo-1557093793-e196ae071479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" alt="Nusapenida" />
      </>
    ),
    title: "Nusa Penida",
  },
  {
    content: (
      <>
        <img className="d-block w-100" src="https://images.unsplash.com/photo-1554481923-a6918bd997bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1965&q=80" alt="Nusapenida" />
      </>
    ),
    title: "Pantai Kuta",
  },
  {
    content: (
      <>
        <img className="d-block w-100" src="https://images.unsplash.com/photo-1573790387438-4da905039392?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1925&q=80" alt="Nusapenida" />
      </>
    ),
    title: "Pantai Kuta",
  },
];

const buttonWisata = {
  title: "Search",
};

const LandingPage = () => (
  <>
    <div>
      <NaviBar />
      <div>
      <Carousell carouselData={dataLandingPage} clas/>
      </div>
      <div>
        <h1 style={{position:"absolute", top:"50%", left:"23%" }} className="h11" >Eksplor Bali dengan Harga Eksklusif</h1>
        <h5 style={{position:"absolute", top:"58%", left:"39%" }} className="h55">Temukan tempat wisata menarik di Bali</h5>
      </div>
      <Link to="/maps" >
          <ButtonItem style={{position:"absolute", top:"65%", left:"45%", letterSpacing: '0.2em', paddingRight: '2em', paddingLeft: '2em' }} title={buttonWisata.title} />
      </Link>
      <div>
             <h2 style={{textAlign: "center", marginTop:"100px", marginBottom:"80px"}}>ABOUT</h2>

          <Container>
                <br/>
                <Row>
                    <Col lg={2} md={6}>
                        <Image src="https://images.unsplash.com/photo-1587542513982-535059868fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80" className="jarak" />
                        <Image src="https://images.unsplash.com/photo-1587542513982-535059868fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80" className="jarak" />
                    </Col>
                    <Col lg={5} md={6}>
                        <Image src="https://images.unsplash.com/photo-1587542513982-535059868fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80" className="jarakItem"/>

                    </Col>
                    <Col lg={5} md={6}>
                        <Card className="card" style={{border:"none", fontFamily:"Georgia, 'Times New Roman', Times, serif;"}}>
                            <p>Bali Island is a small beautiful island and a part of Indonesia archipelago, and the most famous of Indonesian tourism in the world. </p>
                            <p>Bali Island has many places of interest such as rice paddies, beautiful panorama, volcanoes, tourism activities as well as attractions. Also, it also has beautiful jungle, long sandy beaches, warm blue water, crashing surf and friendly people.</p>
                            <p>Bali enchants with its dramatic dances and colorful ceremonies, its arts, and crafts, to its luxurious beach resorts and exciting nightlife. And everywhere, you will find intricately carved temples.</p>
                        </Card>
                    </Col>
                </Row>  
                <br/><br/><br/>
          </Container>
      </div>

      <div className="foto-slider">
      <Slide src={dataSlider} />
      </div>
      <div>
      <Gallery/>
      </div>
      <ScrollToTop/>
    </div>
  </>
);

// -------------------------------------------------------------------------------------------

export default LandingPage;
