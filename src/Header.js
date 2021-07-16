import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="Header">
            <div className="header_left">
                <img 
                src="https://image.flaticon.com/icons/png/512/174/174857.png" 
                alt="" />
                <div className="header_search">
                    <SearchIcon/>
                    <input type="text" />
                </div>
            </div>
            <div className="header_right">

            </div>
        </div>
    )
}

export default Header
