import React,{useEffect, createContext, useReducer, useContext} from 'react';
import NavBar from './components/NavBar';
import './App.css';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost from './components/screens/CreatePost';
import UserProfile from './components/screens/UserProfile';
import SubscribedUserPost from './components/screens/SubscribedUserPost'
import {initialState, reducer} from './reducers/userReducers';

export const UserContext = createContext()

const Routing = () =>{
  const navigate = useNavigate()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    
    if(user){
      dispatch({type:"USER", payload:user})
    }
    else{
      navigate('/Login')
    }
  }, [])

  return(
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/profile/:userid" element={<UserProfile />} />
          <Route path="/myfollowingpost" element={<SubscribedUserPost />} />
      </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
  <UserContext.Provider value={{state, dispatch}}>
   <BrowserRouter>
      <NavBar />
      <Routing />
        
   </BrowserRouter>
  </UserContext.Provider>
  );
}

export default App;