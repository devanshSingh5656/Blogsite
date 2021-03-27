import React from "react";

import { Card } from "react-bootstrap";

function Product({ content, description, publish, title, url, image, source }) {
  return (
    <div className="container-fluid">
      <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src={image} height="400px" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <p>{publish}</p>
          <p>{source}</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
