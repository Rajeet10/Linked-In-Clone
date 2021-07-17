import React,{useState} from 'react';
import { auth } from './firebase';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const [profilePic, setProfilePic] = useState("");

    const loginToApp=(e)=>{
        e.preventDefault();
        
    };
    const register=()=>{
     
    };
    return (
        <div className="login">
           <img src="https://www.amocrm.com/static/images/pages/integrations/logo/linkedin.png"  
           alt=""/>

           <form>
               <input 
               type="text" 
               placeholder="Full Name (required if registering"
               name={name}
               onChange={e=>setName(e.target.value)}
               />
               <input 
               placeholder="profile picture URL (optional)" type="text"
               value={profilePic}
               onChange={e=>setProfilePic(e.target.value)}
               />
               <input 
               placeholder="Email"
                type="email" 
                value={email}
                onChange={e=>setEmail(e.target.value)}
                />
               <input
                placeholder="Password"
                 type="password"
                 value={password}
                 onChange={e=>setPassword(e.target.value)}
                 />
               <button type="submit" onClick={loginToApp}>Sign In</button>
           </form>
           <p>Not a member?{" "}
               <span className="login_register" onClick={register}>Register Now</span>
           </p>
        </div>
    )
}

export default Login
