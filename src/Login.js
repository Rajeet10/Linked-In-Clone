import React from 'react';
import './Login.css';

const Login = () => {
    const register=()=>{

    };
    return (
        <div className="login">
           <img src="https://www.amocrm.com/static/images/pages/integrations/logo/linkedin.png"  alt=""/>

           <form>
               <input type="text" placeholder="Full Name (required if registering"/>
               <input placeholder="profile picture URL (optional)" type="text"/>
               <input placeholder="Email" type="email"/>
               <input placeholder="Password" type="password"/>
               <button>Sign In</button>
           </form>
           <p>Not a member?
               <span className="login_register" onClick={register}>Register Now</span>
           </p>
        </div>
    )
}

export default Login
