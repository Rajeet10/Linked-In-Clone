import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {
    const newsArticle=(heading,subtitle)=>(
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
    return (
        <div className="widgets">
            <div className='widgets_header'>
            <h2>Linked In News</h2>
            <InfoIcon/>
            </div>
            {newsArticle("Google releases new ML App","Top News-9892 readers")}
            {newsArticle("Coronavirus Updtes","Top News-20092 readers")}
            {newsArticle("Startup Stock rises rapidly","Top News-9392 readers")}
            {newsArticle("Space X launches rocket","Top News-9892 readers")}
            {newsArticle("Amazon Ceo stepdown","Top News-9892 readers")}
        </div>
        
    )
}

export default Widgets
