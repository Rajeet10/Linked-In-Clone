import React,{useState,useEffect} from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventIcon from '@material-ui/icons/Event';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Feed = () => {
    const user=useSelector(selectUser);
    const [input, setInput] = useState(''); 
    const [posts, setPosts] = useState([]);

    useEffect(() => {
     db.collection("posts").orderBy('timeStamp','desc').onSnapshot(snapshot=>{
         setPosts(snapshot.docs.map(doc=>(
             {
                 id:doc.id,
                 data:doc.data(),
             }
         )))
     })
    }, [])

    const sendPost=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message:input,
            photoUrl:user.photoUrl || "",
            timeStamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
      
    };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon/>
                    <form>
                        <input 
                        value={input} 
                        onChange={e=>setInput(e.target.value)} type="text" 
                        placeholder="Start a post"
                        />
                        <button type="submit" onClick={sendPost}>Send</button>
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
            {posts.map(({id,data:{name,description,message,photoUrl}})=>(
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))}
            
        </div>
    )
}

export default Feed
