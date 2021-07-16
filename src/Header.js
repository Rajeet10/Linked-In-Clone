import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return (
        <div className="Header">
            <h1>header</h1>
            <div className="header_left">
                <img src="" alt="" />
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
