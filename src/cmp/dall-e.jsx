import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { CircularIndeterminate } from "./loader";
import Jepeta from "../assets/imgs/jepeta.png";



export const DalleImg = ({ gptMsg, userMsg, clearChat }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    setPrompt(userMsg);
    handleChange();
    inputRef.current.focus();
  }, [userMsg]);

  const fetchImage = async () => {
    const response = await axios.get(
      `https://chatgpt-react-backend.onrender.com/image?prompt=${prompt}`
    );
    clearChat();
    setImageUrl(response.data.data[0].url);
  };

  const handleChange = (event) => {
    setPrompt(userMsg);
  };
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      fetchImage();
    }
  }

  return (
    <div className="delle-img main-layout">
      <form>
        <label>
          <input
            type="text"
            value={prompt }
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            ref={inputRef}
            />
        </label>

      </form>
  
      <div className="the-story-img">
        {prompt && imageUrl === "" ? (
          <div className="loader-container">
            <CircularIndeterminate />
          </div>
        ) : (
          <img src={imageUrl} /> 
        )}
      </div>
    </div>
  );
  }


