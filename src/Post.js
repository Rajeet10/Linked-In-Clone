import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h2>Rajeet Chaudhray</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className="post_body">
                <p>Message</p>
            </div>
        </div>
    );
};

export default Post;
