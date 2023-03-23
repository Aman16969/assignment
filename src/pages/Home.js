import React from "react";
import AllTask from "./Task/AllTask";
import { useContext } from "react";
import AuthContext from "./Auth";

import c from "../satic/3.jpg";
const Home = (props) => {
 const contextType=useContext(AuthContext);
 const {isAuthenticated}=contextType;
  return(
    <>
    {!isAuthenticated?(<>

      <div >
  <h2>To-Do App <span style={{fontSize:"10px"}}>Please Login</span> </h2>
   
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
    

        <img src={c} alt="Los Angeles" style={{width:"100%",height: "350px"}}/>
     
    </div>

   

</div>

    
    </>):(<AllTask/>)}
    </>
  )
  };
  
export default Home;