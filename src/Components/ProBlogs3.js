import React from "react";

import { useStateValue } from "./StateProvider";
import { Card, Button } from "react-bootstrap";
import { DeleteData } from "./Action";
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
  const [{ data }, dispatch] = useStateValue();

  const Delete = (id) => {
    dispatch(DeleteData(id));
  };

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} />
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
          <Button onClick={() => Delete(key)}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
