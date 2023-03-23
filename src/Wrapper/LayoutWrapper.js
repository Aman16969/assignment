import React ,{useContext}from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../NavComponent/nav.css"
import logo from "../satic/logo.svg"
import avatar from "../satic/avatar.avif";
import AuthContext from "../pages/Auth";
const LayoutWrapper = (props) => {
  const contextType=useContext(AuthContext);
  const{
    isAuthenticated,
    handleLogout
  }=contextType;

  return (
    <div>
      <header>
        <nav>
        <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        
      </div>
          <nav-link>
          <NavLink className="nav-title" to="/">Home</NavLink>
          <NavLink className="nav-title" to="contact">Contact</NavLink>
          
          {isAuthenticated?(<>
            <NavLink className="nav-title" to="task">Task</NavLink><NavLink className="nav-title" to="login" onClick={handleLogout}>Logout</NavLink>
          <NavLink className="nav-title" to="profile">
          <img className="profile-img" src={avatar} alt="Logo" />
          </NavLink></>):  (<NavLink className="nav-title" to="login">Login</NavLink>)}
        
          
          </nav-link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutWrapper;