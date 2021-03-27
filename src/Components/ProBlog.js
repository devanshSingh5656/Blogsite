import React from "react";

import { useStateValue } from "./StateProvider";
import { Card, Button } from "react-bootstrap";
import { AddData } from "./Action";

function Product({
  key,
  content,
  description,
  publish,
  title,
  url,
  image,
  source,
}) {
  const [{ MainData }, dispatch] = useStateValue();

  const addtoBasket = () => {
    dispatch(
      AddData({
        key: key,
        title: title,
        image: image,
        content: content,
        description: description,
        publish: publish,
        source: source,
        url: url,
      })
    );
  };

  return (
    <div className="conatiner-fluid">
     
      <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src={image} height="400px" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <p>{publish}</p>
          <p>{source}</p>
          {/* <a href={url}>
            {" "}
            <Button variant="primary">Go somewhere</Button>
          </a> */}
          <Button onClick={addtoBasket}>save</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
