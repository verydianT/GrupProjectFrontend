import React from "react";
import { Card } from "react-bootstrap";
import "../styles/css/card.css";

export default function CardCustom({ src, title }) {
  return (
    <Card className="highlight" style={{ border: "none", borderRadius: "10px", width: "18rem", margin: "8px", boxShadow: "1px 3px 10px rgb(123, 123, 123)" }}>
      <Card.Img variant="top" src={src} style={{ height: "16rem" }} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

