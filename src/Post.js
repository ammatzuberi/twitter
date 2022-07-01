import { Avatar } from '@mui/material';
import { forwardRef } from 'react';
import React from 'react'
import "./Post.css";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
 
const  Post= forwardRef (
    ({displayName, username, verified, text, image, avatar}, ref )=> {
  return (
    <div className="post" ref={ref}>
        <div className="post__avatar">
            <Avatar src={avatar} />

             </div>
             <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3> {displayName}{" "} 
                            <span className="post__headerSpecial">
                     {verified &&<VerifiedIcon className="post__badge" /> }
                     @{username}
                            </span>

                        </h3>
                        <div className=" post__headerDescription"></div>
                        <p className="p"> {text} </p>

                    </div>
                </div>
                <div className='image'>
                <img src={image}
                 alt=""/></div>

                 <div className="post__footer">
                    < ChatBubbleIcon  fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small'/>
                    <PublishIcon  fontSize='small'/>
                    

                
                 </div>
             </div>
      
    </div>
  );
}
);
export default Post
