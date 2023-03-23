import React, { useState } from "react"
const AuthContext=React.createContext();
export const Auth=(props)=>{
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [username,setUsername]=useState("");
    const [userpwd,setUserpwd]=useState("");
    const [usermail,setUsermail]=useState("");
    const [userphno,setUserphno]=useState("");
    
    const [usertasks,setUsertasks]=useState([]);
    const updateUsername=(e)=>setUsername(e);
    const updateUserpwd=(e)=>setUserpwd(e);
    const updateUsermail=(e)=>setUsermail(e);
    const updateUserphno=(e)=>setUserphno(e);
    
    const updateUsertasks=(e)=>setUsertasks(e);
    const handleLogin=()=>{
        if(username!=="" && userpwd!=="" && usermail!=="" )
            setIsAuthenticated(true);
        else return;
    }
    const handleLogout=()=>{
        setIsAuthenticated(false);
        setUsermail("");
        setUsername("");
        setUserpwd("");
        setUserphno("");
        setUsertasks([]);
    }
    return (
        <AuthContext.Provider
        value={{
          isAuthenticated,
          username,
          userpwd,
          usermail, 
          userphno,
          usertasks,
         
          handleLogout,
          handleLogin,
          updateUserpwd,
          updateUsername,
          updateUsermail,
          updateUsertasks,
          updateUserphno
        
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
}
export default AuthContext;