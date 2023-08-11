
import React,{useState,useContext} from 'react';
import {useNavigate} from"react-router-dom"
import { Routes,Route,Link } from 'react-router-dom'
import Login from '../Login/Login';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';

export default function Signup() {
  const navigate =useNavigate();
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic
    const errors = {};
    if (!username.trim()) {
      errors.username = "Username is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!phone.trim()) {
      errors.phone = "Phone is required";
    } else if (isNaN(phone) || phone.length !== 10) {
      errors.phone = "Invalid phone number";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
  
    if (Object.keys(errors).length === 0) {
      // If there are no errors, proceed with form submission
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          result.user
            .updateProfile({ displayName: username })
            .then(() => {
              firebase
                .firestore()
                .collection("users")
                .add({
                  id: result.user.uid,
                  username: username,
                  phone: phone,
                })
                .then(() => {
                  navigate("/login");
                });
            });
        });
    } else {
      // If there are errors, set the state with the error messages
      setErrors(errors);
    }
  };
  
  const {firebase}=useContext(FirebaseContext)
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
            {errors.username && <p className="error">{errors.username}</p>}
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
           {errors.email && <p className="error">{errors.email}</p>}
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          {errors.phone && <p className="error">{errors.phone}</p>}
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
           {errors.password && <p className="error">{errors.password}</p>}
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link>
        <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </div>
  );
}
