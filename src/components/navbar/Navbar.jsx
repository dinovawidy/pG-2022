import React from 'react'
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import GambarProfile from '../../assets/GambarProfile.jpg'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search.." />
            <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlinedIcon className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListAltOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src={GambarProfile} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar