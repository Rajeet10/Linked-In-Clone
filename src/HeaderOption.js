import React from 'react';
import './HeaderOption.css';
import {Avatar} from '@material-ui/core'

const HeaderOption = ({avatar,Icon,title,onClick}) => {
    return (
        <div className="headerOption" onClick={onClick}>
            {Icon && <Icon className="headerOption_icon"/> }
            {avatar && (
                <Avatar className="headerOption_icon" src={avatar} />
            )}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOption
