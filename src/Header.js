import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <img 
                src="https://image.flaticon.com/icons/png/512/174/174857.png" 
                alt="" />
                <div className="header_search">
                    <SearchIcon/>
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://media-exp3.licdn.com/dms/image/C5603AQFEHJww_15XwQ/profile-displayphoto-shrink_800_800/0/1597345741669?e=1631750400&v=beta&t=KtCy8qPhK7yS_86CH_a4Bm6Gvydv59ucabW36guXxec" title="Me"/>
            </div>
        </div>
    )
}

export default Header
