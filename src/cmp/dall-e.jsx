import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { CircularIndeterminate } from "./loader";


export const DalleImg = ({ gptMsg, userMsg ,clearChat}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const inputRef = useRef(null);

  useEffect(() => {
    handleChange();
    setPrompt(userMsg);
    inputRef.current.focus();
  }, [userMsg]);
  

  const fetchImage = async () => {
    const response = await axios.get(
      `https://chatgpt-react-backend.onrender.com/image?prompt=${prompt}`
    );
    console.log(response.data);
    setImageUrl(response.data.data[0].url);
    clearChat()
  };

  const handleChange = (event) => {
    setPrompt(userMsg);
    fetchImage();
  };


  
  return (
    <div className="delle-img main-layout" >
      <form onKeyUp={handleChange}>
        <label>
          <input
            type="text"
            value={prompt + "Sigma 24 mm f/8, 1/10 sec"}
            onChange={handleChange}
            ref={inputRef}
          />
        </label>
      </form>
      <div className="the-story-img" >
      {/* <CircularIndeterminate/>  */}
      {imageUrl === "" && prompt !== "" ? <CircularIndeterminate/> : <img src={imageUrl} />} 
      
      </div>
    </div>
  );
};
