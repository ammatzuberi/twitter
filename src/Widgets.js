import React from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed ,  TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';


function Widgets(){

  return (
    <div className="widgets">
      <div className="widgets__input">
      <SearchIcon className="widgets__searchIcon"/>
      <input placeholder="Search Twitter" type="text" />
    </div>
<div className="widgets__widgetsContainer">
  <h2>What's happenning</h2>
  <TwitterTweetEmbed tweetId={"1261567390980046848"} />
  <TwitterTimelineEmbed
  sourceType="profile"
  screenName="enggenv"
  options={{height :400}}
  
  />
</div>
    </div>
  );
}

export default Widgets
