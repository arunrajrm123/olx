import logo from './logo.svg';
import React,{useContext,useEffect,useState} from 'react';
import './App.css';
import Home from "./Pages/Home"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import View from"./Pages/ViewPost"
import Create from "./Pages/Create"
import Post from "./store/PostContext"
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user=>{setUser(user)}))
    
  })
  return (
    <div className="App">
<Router>
  <Post>
  <Routes>
  <Route exact path="/" element={<Home/>}/> 
  <Route path="/signup" element={<Signup />}/> 
  <Route path="/login" element={<Login />}/> 
  <Route path="/create" element={<Create />}/> 
  <Route path="/viewpost" element={<View />}/> 
  </Routes>
  </Post>
</Router>
    
    </div>
  );
}

export default App;
