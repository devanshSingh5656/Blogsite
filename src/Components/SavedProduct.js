import React from "react";
import { useStateValue } from "./StateProvider";

import ProBlogs3 from "./ProBlogs3";

function SavedProduct({ searchdata, Vali }) {
  const [{ Save }] = useStateValue();
  const filteredProducts = Save?.filter((product) => {
    if (product.title.toLowerCase().includes(searchdata)) {
      return product;
    }
  });
  
  return (
    <div>
      {console.log(Save)}
      {Vali ? (
        filteredProducts.map((Main, index) => (
          <ProBlogs3
            key={index}
            content={Main.content}
            description={Main.description}
            publish={Main.publishedAt}
            title={Main.title}
            url={Main.url}
            image={Main.urlToImage}
            source={Main.source.name}
          />
        ))
      ) : (
        <h1>please login first</h1>
      )}
    </div>
  );
}

export default SavedProduct;
