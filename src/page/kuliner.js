import React from "react";
import NaviBar from "../components/Navbar";
import { Col, Row, Image, Container, Card, Carousel } from "react-bootstrap";
import ScrollToTop from "../components/ScrollToTop";
import { Centered } from "../styles/kulinerStyle";
import "../styles/kulinerStyle.css";

const Kuliner = () => {
  return (
    <div>
      <NaviBar />

      {/* Carousel */}
      <div>
        <Image src="https://tukangreview.com/wp-content/uploads/2019/10/sate-lilit-bali.jpg" width="100%" />
        <Centered>
          <h1>Sate Lilit</h1>
          <p className="Judul">Eksplore kuliner khas Bali</p>
        </Centered>
      </div>
      <br />
      <br />

      {/* Gallery */}
      <Container>
        <h2 className="tengah">Galery</h2>
        <br />
        <Row>
          <Col md={4} sm={12} className="galeri">
            <Image src="https://whattocooktoday.com/wp-content/uploads/2013/09/IMG_1319.jpg" fluid />
          </Col>
          <Col md={4} sm={12} className="galeri">
            <Row>
              <Image src="https://www.masakapahariini.com/wp-content/uploads/2018/12/sate-lilit-MAHI-7.jpg" fluid />
              <Image src="https://img-global.cpcdn.com/recipes/8b95dc849794c115/1200x630cq70/photo.jpg" fluid style={{ marginTop: "1em" }}/>
              <Image src="https://thumb.viva.co.id/media/frontend/thumbs3/2019/02/22/5c6f8b330d058-sate-lilit-tempe_1265_711.jpg" fluid style={{ marginTop: "1em" }}/>
            </Row>
          </Col>
          <Col md={4} sm={12} className="galeri">
            <Image src="https://i.pinimg.com/550x/aa/7b/36/aa7b3606abddbc08b53e8f29773739d4.jpg" fluid />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />

      {/* Informasi */}
      <div className="bg-color">
        <Container>
          <br />
          <h2>Informasi Mengenai Sate Lilit</h2>
          <br />
          <br />
          <Row>
            <Col lg={3} md={6}>
              <Image src="https://whattocooktoday.com/wp-content/uploads/2013/09/IMG_1319.jpg" fluid />
            </Col>
            <Col lg={3} md={6} className="hilang">
              <Image src="https://images.unsplash.com/photo-1603088549155-6ae9395b928f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" fluid />
              <Image src="https://thumb.viva.co.id/media/frontend/thumbs3/2019/02/22/5c6f8b330d058-sate-lilit-tempe_1265_711.jpg" fluid className="jarak" />
            </Col>
            <Col lg={6} sm={12}>
              <Container>
              <h4>Sate Lilit</h4>
              <h5>Kuliner khas Bali</h5>
              <p>
                Makanan khas Bali memang selalu menggoda selera. Salah satu yang paling populer mungkin bebek betutu. Tetapi sebenarnya pulau dewata masih punya sederet kuliner otentik yang tak kalah nikmat di lidah. Plecing kangkung
                misalnya.
                <br />
                <br />
                Sate lilit misalnya. Bicara soal sate lilit, makanan khas Bali yang satu ini pasti digemari pecinta ikan. Pasalnya sate memang dibuat dari fillet ikan yang digiling dan dicetak sebelum dibakar. Karena itulah rasanya pun
                istimewa. Apalagi dengan paduan bumbu khas Bali yang sarat aroma. Dijamin semakin nikmat saat disantap bersama nasi putih.
              </p>
              </Container>
            </Col>
          </Row>
          <br />
          <br />
          <br />
        </Container>
      </div>
      <br />
      <br />

      {/* Pembuatan */}
      <Container>
        <h2 className="tengah">Cara Pembuatan Sate Lilit</h2>
        <h5>Bahan-bahan</h5>
        <ul>
          <li>500 gr Daging Ayam Giling</li>
          <li>1 buah Kelapa parut</li>
          <li>4 Sendok makan Gula Merah</li>
          <li>12 siung Bawang merah</li>
          <li>5 siung bawang putih</li>
          <li>4 ruas jari jahe</li>
          <li>4 ruas jari Laos</li>
          <li>1 ruas jari Kunyit</li>
          <li>1 sendok makan Merica butir</li>
          <li>1 sendok makan Ketumbar</li>
          <li>4 batang sereh</li>
          <li>Cabe rawit secukupnya</li>
          <li>5 Lembar daun jeruk</li>
          <li>Garam dan Kaldu ayam secukupnya</li>
        </ul>
        <br />
        <br />
        <h5>Langkah-Langkah</h5>
        <Card>
          <Row>
            <Col sm={12} md={4} lg={4} style={{ marginLeft: "6em" }}>
              <Image src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_1024/v1519293591/igv7ozf5phwxzueb3pqc.png" fluid />
            </Col>
            <Col md={6} lg={6} className="hilang">
              <Row>
                <h5 class="card-title">Pertama</h5>
                <p class="card-text">Haluskan bawang merah, bawang putih, jahe, laos, kunyit, merica, ketumbar, cabai rawit merah sampai lembut</p>

                <h5 class="card-title">Kedua</h5>
                <p class="card-text">
                  Campurkan daging ayam dengan bumbu yg sudah dihaluskan, tambahkan kelapa parut dan gula merah yang sudah digerus. Masukan irisan daun jeruk, kaldu bubuk dan sedikit minyak kelapa, aduk semua dengan daging ikan hingga rata
                </p>

                <h5 class="card-title">Ketiga</h5>
                <p class="card-text">Lilitkan adonan ikan bumbu ke tangkai bambu atau batang serai jika mau lebih harum dengan cara dililitkan dr atas kebawah</p>

                <h5 class="card-title">Keempat</h5>
                <p class="card-text">Panaskan arang kelapa, bakar sate lilit hingga berubah warna jadi kecoklatan dan harum tercium. Sajikan dengan sambal matah lebih mantaaabbb</p>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
      <br />
      <br />

      {/* Review */}
      <div className="field">
        <div className="control">
          <textarea className="textarea" placeholder="Type something here..."></textarea>
        </div>

        <button className="button-textarea">
          <a href={{}} style={{ textDecoration: "none", color: "white", marginTop: "-500px" }}>
            Send
          </a>
        </button>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Kuliner;
