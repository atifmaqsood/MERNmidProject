import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const [url, setUrl] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [Uuid, setUuid] = useState("");

  const handleOnChange = (event) => {

    setUrl(event.target.value);
    setErrorMessage("");
  };

  const handleUrlStoring = ()=>{
    setStoreUrl(url);
    setUuid(uuidv4(url));
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if (url.length <= 0) {
      setErrorMessage("Input Field can't be empty");
    }
    else{
      

    }

  }

  return (
    <>
      <div className="Main px-5 py-5 ">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={url}
              onChange={handleOnChange}
              placeholder="Enter a valid URL"
            />
            <button
              className="btn btn-primary"
              onClick={handleUrlStoring}
              id="button-addon2"
              type="submit"
            >
              Generate
            </button>
            
          </div>
          <div>{errorMessage && <em>{errorMessage}</em>}</div>

          <em>
            Set a expiry date :
            <span>
              <input type="date" name="" id="" />
            </span>
          </em>
          <div>
          <em>Original URL :  {storeUrl}</em><br />
          <em> Short URL : {Uuid} </em>
          </div>
          </form>
      </div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </>
  );
}

export default Home;
