import React,{useContext,useState} from 'react';
import {useNavigate} from"react-router-dom"
import { FirebaseContext } from '../../store/FirebaseContext';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Routes,Route,Link } from 'react-router-dom'
import Signup from '../Signup/Signup';

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const {firebase}=useContext(FirebaseContext)
  const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
     navigate("/")
    })
    .catch((error) => {
      alert(error.message);
    });
  
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button >Login
          </button>
        </form>
        <Link to="/signup">signup</Link>
        <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    </div>
  );
}

export default Login;
