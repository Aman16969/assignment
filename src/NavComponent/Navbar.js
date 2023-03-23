import "./nav.css";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import LayoutWrapper from "../Wrapper/LayoutWrapper";
import TaskWrapper from "../Wrapper/TaskWrapper";
import AddTask from "../pages/Task/AddTask";
import AllTask from "../pages/Task/AllTask";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";





const App=(props)=>{


  const router = createBrowserRouter(
  
    createRoutesFromElements(
      <Route path="/" element={<LayoutWrapper/>}>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="task" element={<TaskWrapper />}>
          <Route path="addTask" element={<AddTask />} />
          <Route path="allTask" element={<AllTask />} />
        </Route>
        
       
          <Route path="profile" element={<Profile />} />
      
          <Route path="login" element={<Login />} />
       
        <Route path="profile" element={<Profile />} />
        <Route path="home" element={<Home />} />
      </Route>
    )
  );
  return (
    <div className="Navbar">
    
      <RouterProvider router={router} />
    </div>
  );
}


  export default  App ;
   
  