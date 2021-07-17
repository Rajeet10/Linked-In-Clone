import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    const recentItem=(topic)=>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
          <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
            <Avatar className="sidebar_avatar"/>
            <h2>Rajeet Chaudhary</h2>
            <h4>Cse Student</h4>
          </div>
          <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2,543</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on Post</p>
                <p className="sidebar_statNumber">2,043</p>
            </div>
          </div>
          <div className="sidebar_bottom">
              <p>Recent</p>
              {recentItem("App developer")}
              {recentItem("React Js")}
              {recentItem("SoftwareEngineer")}
              {recentItem("Google")}
          </div>
        </div>
    )
}

export default Sidebar;