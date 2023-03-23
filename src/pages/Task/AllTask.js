import React,{useContext} from "react";
import "./blog.css";
import AuthContext from "../Auth";
import { NavLink, Outlet } from "react-router-dom";

const AllTask = (props) => {

  const authContext=useContext(AuthContext);
  const{
    usertasks
    
  }=authContext;
  
  // console.log(usertasks)
  return (<div>
    {(usertasks.length===0)?(<div><h2>Please Add Task </h2>
    <NavLink className="nav-title" to="task/addTask">ADD TASK</NavLink></div>):( <div className="container-blog">
  <h1 className="m-5 text-center">To Do List</h1>
  <hr/>
  <div className="row">
   
     
    {usertasks.map((e)=>{return(<>
      <div >
      <div className="blog_card">
      
      <h3><span style={{fontFamily:"ui-monospace",fontWeight:300}}>{e.title}</span></h3> 
      <p>{e.content}</p>
      
      
        </div>
      </div>
      
    </>)})
    }
    
     
    <main>
        <Outlet />
      </main>
      

  </div>
    </div>)}
   

</div>

)};
export default AllTask;