import React, { useState } from "react";

import { useStateValue } from "./StateProvider";
import ProBlog from "./ProBlog";
import ProBlogs2 from "./ProBlogs2";

function Home({ searchdata, Vali }) {
  const [{ MainData}] = useStateValue();
  const [loading, setloading] = useState(true);
  setTimeout(function () {
    setloading(false);
  }, 1500);

  const filteredProducts = MainData[0]?.filter((product) => {
    if (product.title.toLowerCase().includes(searchdata)) {
      return product;
    }
  });

  return (
    <div className="home">
      
      <div className="home_container">
        <div className="home_row">
          {loading ? (
            <h1>loading</h1>
          ) : Vali ? (
            filteredProducts?.map((data, index) => (
              <ProBlog
                key={index}
                content={data.content}
                description={data.description}
                publish={data.publishedAt}
                title={data.title}
                url={data.url}
                image={data.urlToImage}
                source={data.source.name}
              />
            ))
          ) : (
            filteredProducts?.map((data, index) => (
              <ProBlogs2
                key={index}
                content={data.content}
                description={data.description}
                publish={data.publishedAt}
                title={data.title}
                url={data.url}
                image={data.urlToImage}
                source={data.source.name}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
