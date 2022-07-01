import React, { useState , useEffect} from "react"
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts , setPosts]= useState([]);

  useEffect(()=> {
    db.collection('posts').onSnapshot(snapshort =>(
      setPosts(snapshort.docs.map(doc => doc.data()))
    ))
  }, []);
  return (
    <div className="feed">
      {/*header */}
  <div className="feed_header" >
    <h2>Home</h2>
      
  </div>

      <TweetBox/>
<FlipMove >
      {posts.map(post =>(
        <Post
        key={post.text}
         displayName={post.displayName}
         username={post.username}
         verified={post.verified}
         text={post.text}
            
            avatar={post.avatar}
            image={post.image}
         />
      ))}
         </FlipMove>

      
    </div>
  )
}

export default Feed
