import React,{useState} from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input type="text" placeholder="Start a post"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>

            {/* post */}
            <Post 
            name="Rajeet Chaudhary" 
            description="Hey i am exited" 
            message="This worked" 
            photoUrl=""/>
            
        </div>
    )
}

export default Feed
