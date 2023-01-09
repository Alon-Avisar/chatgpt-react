import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { CircularIndeterminate } from './loader';

export const DalleImg = ({gptMsg, userMsg}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [prompt, setPrompt] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    handleChange()
    setPrompt(userMsg);
    inputRef.current.focus();
  }, [userMsg]);

  const fetchImage = async () => {
    const response = await axios.get(`http://localhost:3080/image?prompt=${prompt}`);
    console.log(response.data);
    setImageUrl(response.data.data[0].url);        
  }

  const handleChange = (event) => {
    setPrompt(userMsg);
    fetchImage();
  }

  console.log("upnutfor paraent:", userMsg);
  console.log("prompt", prompt);

  return (
    <div className='delle-img main-layout'>
      <form onKeyUp={handleChange}>
        <label>
        <input type="text" value={prompt + "Sigma 24 mm f/8, 1/10 sec" } onChange={handleChange} ref={inputRef} />

        </label>
       </form>
       <div className='the-story-img'>
        <img   src={imageUrl}  />

       </div>
    </div>
  );
};