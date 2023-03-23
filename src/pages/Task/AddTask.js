import React ,{useContext,useState} from "react";
import "./blog.css"
import { useNavigate} from 'react-router-dom';
import AuthContext from "../Auth";

const AddTask = () => {
  const authContext=useContext(AuthContext);
  const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    

  const{
   
    updateUsertasks,
    usertasks,

  }=authContext;
 
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    
    navigate('/task/allTask');
  };
  const handlePost=()=>{
     const obj={title:title,content:content};
     usertasks.push(obj);
     updateUsertasks(usertasks);
  }
  return <div>
    
    <div className="blog-container">
    <h2>Add Blog</h2>
      <form style={{border:"none"}} onSubmit={handleSubmit}>
        <input type="text" id="title" name="title" value={title} onChange={(event)=>setTitle(event.target.value)} placeholder="Title Of The Blog" required/>
        <textarea type="text" name="content" id="content" value={content} onChange={(event)=>setContent(event.target.value)} placeholder="Enter the Content" required/>
        <button type="submit" onClick={handlePost}>Post</button>
      </form>
      
      
    {/* {console.log(title)} */}
    </div>
    </div>;
};
export default AddTask;