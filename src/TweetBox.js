import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@mui/material';
import db from './firebase';

function TweetBox() {
  const [tweetMessage,setTweetMessage]=useState('');
  const [tweetImage,setTweetImage]=useState('');
  const sendTweet =e=> {

    e.preventDefault();
    db.collection('posts').add({
      displayName :'Ammat Zuberi', 
      username:'ammat',
      verified: true,
      text :tweetMessage,
      image:tweetImage,
      avatar:'https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg'
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
        <form>
       <div className="tweetBox__input">
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"/>
        <input 
        onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="what is happenning?" type="text"/>
        </div>
        <input 
         value={tweetImage}
         onChange= {e=> setTweetImage(e.target.value)} className="tweetBox__imageInput"
         placeholder="Optional:Entre the Image Url 
         "type="text"/>
              
       <Button onClick={sendTweet} type="submit"  className="tweetBox__tweetButton"> Tweet</Button>
        </form>
      
    </div>
  )
}

export default TweetBox;
