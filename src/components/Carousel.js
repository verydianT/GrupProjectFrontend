import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carousell = ({ carouselData, style }) => {
  return (
    <Carousel style={style}>
      {carouselData.map((data) => (
        <Carousel.Item style={{objectFit:'cover', height: '100vh'}}>
          {data.content}
          <Carousel.Caption>
            <h3>{data.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carousell;
