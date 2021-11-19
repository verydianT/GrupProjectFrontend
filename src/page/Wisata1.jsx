import "bootstrap/dist/css/bootstrap.min.css";
import { ImageSmall, ImageLarge, Div, H4, H5, FlexContainer, P, Margin } from "../styles/styledComponents";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Testimonial from "../components/Testimonial";
import ScrollToTop from "../components/ScrollToTop";
import Carousell from "../components/Carousel";
import ButtonItem from "../components/Button";
import CardCustom from "../components/Card";
import NaviBar from "../components/Navbar";
import Coment from "../components/Coment";
import Slide from "../components/Slider";
import "../styles/wisata1.css";

const dataWisata = [
  {
    content: (
      <>
        <video style={{ height: "800px", width: "100%", objectFit: "cover" }} autoPlay loop muted>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-happy-woman-runs-on-bali-beach-at-sunset-13003-large.mp4" type="video/mp4"></source>
          Sorry, your browser doesn't support videos.
        </video>
      </>
    ),
    title: "Nusa Penida",
  },
  {
    content: (
      <>
        <img
          style={{ height: "800px", objectFit: "cover" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1555433258-d095529cd481?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
          alt="Nusapenida"
        />
      </>
    ),
    title: "",
  },
  {
    content: (
      <>
        <img
          style={{ height: "800px", objectFit: "cover" }}
          className="d-block w-100"
          src="https://raw.githubusercontent.com/jesslynauryn/group-project-24/master/images/images-nusa-4.jpg"
          alt="Nusapenida"
        />
      </>
    ),
    title: "Pantai Kuta",
  },
];

const highlights = [
  {
    src: "https://images.unsplash.com/photo-1486655643111-5a1741acd481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80",
    title: "Snorkeling",
  },
  {
    src: "https://i.postimg.cc/PrbkTMv8/gambar.png",
    title: "Surfing",
  },
  {
    src: "https://makeuptutorials.com/wp-content/uploads/2020/05/woman-on-beach-sunbathing-tanning-oil-canva-featured-1200x720.jpg",
    title: "Sunbathing",
  },
];

const buttonWisata = {
  href: "https://www.traveloka.com/id-id/kereta-api/search?st=PSE.ML&dt=22-10-2021.null&ps=2.0&pd=KAI",
  title: "Pesan Sekarang",
};

const dataSlider = [
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-52537875/original/197e7acb-3023-408f-82d9-3963d54541c3.jpeg?im_w=1200",
    alt: "Image 1",
    text: "Umalas-area Oasis New 1BR Villa with Private Pool",
    href: "https://www.airbnb.co.id/rooms/52537875?federated_search_id=525d36dc-ae2b-4838-9816-653fb51d4012&source_impression_id=p3_1637214141_uoId0Oxr4StqRfUu",
    link: "/wisata1",
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-50985387/original/716003ae-cb90-49a4-b109-7cd552977dee.jpeg?im_w=960",
    alt: "Image 2",
    text: "Brand New Villa - 1BR - Seminyak",
    href: "https://www.airbnb.co.id/rooms/50985387?federated_search_id=525d36dc-ae2b-4838-9816-653fb51d4012&source_impression_id=p3_1637214148_X47k2uQL%2FeBMlOrI",
    link: "/wisata1",
  },
  {
    image: "https://a0.muscache.com/im/pictures/a260144b-3d63-4035-a153-e627a52ba399.jpg?im_w=960",
    alt: "Image 3",
    text: "Villa Island Seminyak",
    href: "https://www.airbnb.co.id/rooms/47037328?federated_search_id=525d36dc-ae2b-4838-9816-653fb51d4012&source_impression_id=p3_1637214164_zXtFZcQfYJTfzLjH",
    link: "/wisata1",
  },
  {
    image: "https://a0.muscache.com/im/pictures/b7407b97-82e0-4caa-992a-f28a31333e2f.jpg?im_w=960",
    alt: "Image 4",
    text: "Villa LaDonna",
    href: "https://www.airbnb.co.id/rooms/48022603?federated_search_id=525d36dc-ae2b-4838-9816-653fb51d4012&source_impression_id=p3_1637213907_WmGyAGlKNyM2mYwM",
    link: "/wisata1",
  },
  {
    image: "https://a0.muscache.com/im/pictures/4dd98184-a61b-4f78-903c-f7aebae3361b.jpg?im_w=960",
    alt: "Image 5",
    text: "Amazing Luxury Villa - 2BR - Seminyak",
    href: "https://www.airbnb.co.id/rooms/28712924?federated_search_id=525d36dc-ae2b-4838-9816-653fb51d4012&source_impression_id=p3_1637214118_onnS3MCLfLGPx59U",
    link: "/wisata1",
  },
];

const Wisata1 = () => (
  <>
    <NaviBar/>
    <div>
      <Carousell carouselData={dataWisata} />
    </div>
    <div>
      <h3 className="card__title" style={{ padding: "80px 60px 30px" }}>
        REGULASI KEDATANGAN
      </h3>

      <Container>
        <Tabs defaultActiveKey="wni" id="uncontrolled-tab-example" className="mb-3" style={{ padding: "0 60px" }}>
          <Tab eventKey="wni" title="WNI" style={{ padding: "20px 60px 30px" }}>
            <Card className="text-white" style={{ margin: "0" }}>
              <Card.Img src="https://images.unsplash.com/photo-1615561916422-7014e1078997?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title className="card-title">Syarat Masuk Bali untuk WNI</Card.Title>
              </Card.ImgOverlay>
            </Card>

            <p>
              <br />
              <h5>Syarat Perjalanan Dari Pulau Jawa ke Pulau Bali (dan sebaliknya)</h5>
              <br />
              Wajib menunjukkan kartu vaksin minimal dosis pertama
              <br />
              Tes PCR negatif berlaku 2 x 24 jam.
              <br />
              Tes Antigen negatif berlaku 1 x 24 jam (hanya berlaku jika memiliki sertifikat vaksin dosis kedua)
              <br />
              Surat keterangan hasil negatif tes RT-PCR/Rapid Antigen harus dilengkapi dengan barcode/ QRCode
              <br />
              Catatan: Hasil tes Rapid Antigen hanya berlaku jika penumpang memiliki sertifikat vaksin dosis kedua, jika hanya memiliki sertifikat vaksin dosis pertama maka hasil tes COVID-19 yang berlaku adalah hasil tes RT-PCR.
              <br />
              <br />
              <br />
              <h5>Syarat Perjalanan Dari/Ke Pulau Bali (selain Pulau Jawa)</h5>
              <br />
              Wajib menunjukkan kartu vaksin minimal dosis pertama
              <br />
              Tes PCR negatif berlaku 2 x 24 jam.
              <br />
              Tes Antigen tidak berlaku, kecuali jika diizinkan oleh KKP bandara keberangkatan dan dilengkapi sertifikat vaksin COVID-19 dosis lengkap (dosis kedua). Jika KKP bandara keberangkatan mengizinkan, maka tes antigen berlaku 1 x
              24 jam.
              <br />
              Surat keterangan hasil negatif tes RT-PCR harus dilengkapi dengan barcode/ QRCode
              <br />
              Peserta vaksin di Bandar Udara Internasional I Gusti Ngurah Rai (DPS) Bali tidak dapat terbang di hari yang sama dengan vaksinasi
              <br />
              Penumpang yang pernah terpapar COVID-19 tiga bulan terakhir dapat membawa Surat Keterangan Penyintas COVID-19 sebagai referensi tidak dapat vaksinasi
              <br />
              Khusus keberangkatan dari Bali ke daerah asal penumpang: WNA yang berangkat dari Bali dengan tujuan internasional melalui penerbangan domestik dan transit tidak lebih dari 24 jam di bandara transit, tidak wajib menunjukkan
              kartu vaksinasi
            </p>
          </Tab>
          <Tab eventKey="wna" title="WNA" style={{ padding: "20px 60px 30px" }}>
            <Card className="text-white" style={{ margin: "0" }}>
              <Card.Img src="https://images.unsplash.com/photo-1532968899863-5b52ef155913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title className="card-title">Syarat Masuk Bali untuk WNA</Card.Title>
              </Card.ImgOverlay>
            </Card>
            <br />
            <p>
              <h5>Selama masa PPKM, Bali ditutup untuk kunjungan wisatawan asing.</h5>
              <br />
              Namun pada 14 Oktober 2021 pemerintah telah membuka perjalanan bagi WNA untuk masuk bali dengan ketentuan yang berlaku. Menurut situs CovidControl, semua wisatawa internasional hanya dpat masuk ke Indoneisa melalui Bali (
              Bandara International Ngurah Rai) dan Kepulauan Riau ( Bandra Internasional Raja Haji Fisabillah).
              <br />
              <br />
              Pembukaan bali pada 14 Oktober 2021 lalu, Indonesia hanya mengizinkan 19 negara yang dipilih sesuai standar Badan Kesehatan Dunia (WHO) karena angka kasus terkonfirmasi Covid-19nya berada pada level 1 dan 2 dengan angka
              positivity rate yang rendah. Negara yang diizinkan tersebut yaitu Saudi Arabia, United Arab Emirates, Selandia Baru, Kuwait, Bahrain, Qatar, China, India, Jepang, Korea Selatan, Liechtenstein, Italia, Prancis, Portugal,
              Spanyol, Swedia, Polandia, Hungaria, dan Norwegia.
              <br />
              <br />
              <br />
              <h5>Persyaratan Dokumen dan Protokol Kesehatan</h5>
              <br />
              Menunjukkan hasil negatif melalui tes RT-PCR di negara asal yang diambil dalam kurun waktu maksimal 3 x 24 jam sebelum keberangkatan dan dilampirkan saat pemeriksaan kesehatan atau e-HAC Internasional Indonesia melalui
              aplikasi PeduliLindungi (download di Android / iOS)
              <br />
              Menunjukkan kartu sertifikat vaksinasi COVID-19 lengkap (seluruh dosis) sebagai bukti telah menerima vaksin Covid-19 dosis lengkap minimal 14 hari sebelum keberangkatan. Kartu atau sertifikat vaksin harus berbahasa Inggris,
              selain bahasa asal
              <br />
              Pelaku perjalanan wajib menggunakan penerbangan langsung (direct flight) dari negara asalnya
              <br />
              Jika WNA dengan kondisi komorbid wajib menunjukkan surat keterangan dari Rumah Sakit Pemerintah negara keberangkatan, dalam Bahasa Inggris selain bahasa asal negaranya.
              <br />
              Bagi WNA wajib menunjukkan bukti kepemilikan asuransi kesehatan/asuransi perjalanan yang mencakup pembiayaan kesehatan dengan nilai pertanggungan minimal 100.000 dolar Amerika Serikat (AS) atau sekitar Rp 1,4 miliar dalam
              melakukan karantina dan pengobatan jika terpapar COVID-19
              <br />
              Pada saat kedatangan, dilakukan tes molekular isotermal (NAAT/jenis lainnya) atau tes RT-PCR bagi pelaku perjalanan internasional dan diwajibkan menjalani karantina terpusat selama 5 x 24 jam
              <br />
              Pada hari ke-7 karantina, bagi WNI dan WNA dilakukan pemeriksaan ulang RT-PCR
              <br />
              Jika WNA belum mendapat vaksin di negara asal akan divaksinasi di tempat karantina setibanya di Indonesia setelah dilakukan pemeriksaan RT-PCR kedua dengan hasil negatif
            </p>
          </Tab>

          <Tab
            eventKey="selengkapnya"
            style={{ padding: "20px 60px 30px" }}
            // href="https://travel.kompas.com/read/2021/04/01/101000127/aturan-perjalanan-dari-dan-ke-bali-terbaru-berlaku-mulai-1-april-2021?page=all"
            // target="blank_"
            title="Selengkapnya"
          >
            <a href="https://travel.kompas.com/read/2021/04/01/101000127/aturan-perjalanan-dari-dan-ke-bali-terbaru-berlaku-mulai-1-april-2021?page=all" taget="_blank">
              <h3>Klik disini</h3>
            </a>
          </Tab>
        </Tabs>
      </Container>

      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col md={3}>
            <div>
              <ImageSmall src="https://raw.githubusercontent.com/jesslynauryn/group-project-24/master/images/images-nusa-5.jpg" />
              <ImageSmall src="https://raw.githubusercontent.com/jesslynauryn/group-project-24/master/images/images-nusa-4.jpg" />
              <ImageSmall src="https://raw.githubusercontent.com/jesslynauryn/group-project-24/master/images/images-nusa-6.jpg" />
            </div>
          </Col>
          <Col md={4}>
            <Div>
              <ImageLarge src="https://raw.githubusercontent.com/jesslynauryn/group-project-24/master/images/images-nusa-3.jpg" />
            </Div>
          </Col>
          <Col md={5}>
            <Div>
              <H4>KUTA</H4>
              <H5 className="">“The best places Bali’s famous sunsets”</H5>
              <P>
                Itulah julukan dari Kuta. Kuta menjadi salah satu destinasi wisata favorit menjadi jantungnya pariwisata di Pulau Bali. Pantai Kuta menjadi lokasi yang pas untuk menikmati panorama matahari terbenam yang begitu indah di
                Pulau Bali. <br />
                <br />
                Selain itu, kebersihan Pantai Kuta juga sangat terjaga, sehingga banyak wisatawan yang merasa betah dan selalu ingin berlama-lama saat berada di pantai ini. kalian juga bisa berjemur dan berselancar.
              </P>
              <P style={{ fontWeight: "600" }}>
                Kunjungi Nusa Penida dengan{" "}
                <span style={{ color: "blue" }}>
                  <i>Traveloka!</i>
                </span>
              </P>
              <Margin>
                <ButtonItem buttonLink={buttonWisata.href} title={buttonWisata.title}/>
              </Margin>
            </Div>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginBottom: "100px", marginTop: "-60px" }}>
        <h3 style={{ textAlign: "center", marginBottom: "50px", fontWeight: "600" }}>HIGHLIGHTS</h3>
        <FlexContainer>
          {highlights.map((data) => {
            return <CardCustom src={data.src} title={data.title} />;
          })}
        </FlexContainer>
      </Container>

      <h3 style={{ textAlign: "center", fontWeight: "600" }}>Rekomendasi Penginapan</h3>
      <div className="foto-slider" style={{ marginTop: "-10px" }}>
        <Slide src={dataSlider} />
      </div>

      <Testimonial />

      <Container>
        <Row>
          <Coment />
        </Row>
      </Container>
      <ScrollToTop/>
    </div>
  </>
);
export default Wisata1;
