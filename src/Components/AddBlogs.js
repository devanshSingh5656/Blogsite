import React, { useState } from "react";
import "./Signup.css";

import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { Update } from "./Action";

function AddBlogs({ Vali }) {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [description, setdescription] = useState("");
  const [source, setsource] = useState("");

  const [startdate, setstartdate] = useState(new Date());

  const history = useHistory();

  const [{data  }, dispatch] = useStateValue();

  const validateForm = () => {
    // dispatch({
    //   type: "UPDATE",
    //   item: {
    //     title: title,
    //     content: content,
    //     description: description,
    //     author: "sham",
    //     publishedAt: startdate,
    //     source: { id: "null", name: source },
    //     url:
    //       "https://www.wsaz.com/2021/03/19/louisville-based-texas-roadhouse-confirms-founder-ceo-kent-taylor-has-died/",
    //     urlToImage:
    //       "https://gray-wsaz-prod.cdn.arcpublishing.com/resizer/nd7hL1jtbyGFPluh5D4K05leW3M=/980x0/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/WS6A3OABA5GOBHTV5WRKZHMHVI.png",
    //   },
    // });
    dispatch(
      Update({
        title: title,
        content: content,
        description: description,
        author: "sham",
        publishedAt: startdate,
        source: { id: "null", name: source },
        url:
          "https://www.wsaz.com/2021/03/19/louisville-based-texas-roadhouse-confirms-founder-ceo-kent-taylor-has-died/",
        urlToImage:
          "https://gray-wsaz-prod.cdn.arcpublishing.com/resizer/nd7hL1jtbyGFPluh5D4K05leW3M=/980x0/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/WS6A3OABA5GOBHTV5WRKZHMHVI.png",
      })
    );
    history.push("/");
  };

  return (
    <div>
      {Vali ? (
        <div className="Login">
          <button
            onClick={() => {
              history.push('/');
            }}
          >
            go back
          </button>

          <div className="log-container">
            <h1>Add Blog</h1>
            <form>
              <h5>Title</h5>
              <input
                name="title"
                placeholder="Enter title"
                type="text"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
              <h5>Content</h5>
              <input
                name="content"
                placeholder="Enter content"
                type="text"
                value={content}
                onChange={(e) => setcontent(e.target.value)}
              />
              <h5>Description</h5>
              <textarea
                style={{ width: "450px" }}
                name="description"
                placeholder="Enter description"
                type="text"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
              <h5>Publish date</h5>
              <input
                type="Date"
                value={startdate}
                onChange={(e) => setstartdate(e.target.value)}
              />

              <h5>Source</h5>
              <input
                name="source"
                placeholder="Enter source"
                type="text"
                value={source}
                onChange={(e) => setsource(e.target.value)}
              />
            </form>

            <button className="signup" onClick={validateForm}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <h1>please log in first </h1>
      )}
    </div>
  );
}

export default AddBlogs;
