import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { logout, selectUser,login } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        // ..login
        dispatch(login({
          email:userAuth.user.email,
          uid:userAuth.user.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL
        }))
      }
      else{
        //logout
        dispatch(logout);
      }
    })
  },[])

  return (
    <div className="app">
      <Header />
      <Login/>
      {!user ? (<Login/>) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
