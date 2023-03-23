import React,{useContext} from "react";
import avatar from "../satic/avatar.avif"
import { useNavigate} from 'react-router-dom';
import "./login.css";import AuthContext from "./Auth";
const Login=(props)=>{
  const navigate = useNavigate();
  
  const contextType=useContext(AuthContext);
  const{
          
          username,
          userpwd,
          usermail,
          userphno,
          handleLogin,
          updateUserpwd,
          updateUsername,
          updateUsermail,
          updateUserphno,
    
      
  }=contextType;

  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    
    navigate('/');
  };
    
  
  
return(
    <>
    <h2>Login</h2>

<form  onSubmit={handleSubmit} style={{display: "inline-block"}}>
  <div className="imgcontainer">
    <img src={avatar} alt="Avatar" className="avatar"/>
  </div>

  <div className="container">
    <input type="text" placeholder="Enter Username" name="uname" value={username} onChange={(event)=>updateUsername(event.target.value)} required/>

    <input type="Email" placeholder="Enter Email" name="email" value={usermail} onChange={(event)=>updateUsermail(event.target.value)} required/>

    <input type="text" placeholder="Enter Your Phone Number" name="" value={userphno} onChange={(event)=>updateUserphno(event.target.value)} required/>
    
    <input type="password" placeholder="Enter Password" name="psw" value={userpwd} onChange={(event)=>updateUserpwd(event.target.value)} required/>
        
    <button type="submit" onClick={handleLogin}>Login</button>
    
  </div>

  
</form>

</>
)
}
export default Login;