import React, { useContext } from "react";
import AuthContext from "./Auth";
const Profile = (props) => {
  const contextType=useContext(AuthContext);
  const{
    username,
    usermail,
    userphno,
    isAuthenticated,
  }=contextType;
return(
  <>
  <h1>Profile-Detail</h1>
    <div  class="card" style={{padding: "20px",
    width: "20%",
    border: "1px solid #265a68",
    margin: 0,
    display: "inline-table",
    
    marginTop: "5px"

    }}>
  
  <h2>UserName: {username}</h2>
  <p class="title">Email: {usermail}</p>
  <p>Phone Number: <span style={{color:"#265a68"}}>{userphno}</span></p>
  <div style={{margin: "24px 0"}}>
   
  </div>
  <p><button>Logged in: {isAuthenticated ? 'Yes' : 'No'}</button></p>
  </div>
</>
)}

export default Profile;
