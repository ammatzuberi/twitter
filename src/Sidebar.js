import React from 'react';
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SidebarOption from './SidebarOption';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import active from './SidebarOption';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
              <TwitterIcon className="twitter" />
             
               <div className={`home ${active
                &&'sidebar--active'}`}> <HomeIcon/>
               <SidebarOption text="Home" />
               </div>
         <div className="hash">  < TagIcon />  <SidebarOption text="Explore" /> </div>

         <div className="notification"> <NotificationsActiveIcon/><SidebarOption text="Notifications" /></div>
         <div className="message">   < MailOutlineIcon /><SidebarOption text="Message" /></div>
         <div className='bookmarks'>  < BookmarkIcon/><SidebarOption text="Bookmarks" /></div>
         <div className='list'>  <FeaturedPlayListIcon/><SidebarOption text="Lists" /></div>
         <div className='profile'>   < PersonIcon/><SidebarOption text="Profile" /></div>
         <div className='more'>  <MoreHorizIcon/> <SidebarOption text="More" /> </div>

      {/*buttom  */}
      <Button variant='outlined' className='button' fullWidth >Tweet</Button>
    </div>
  )
}

export default Sidebar;
