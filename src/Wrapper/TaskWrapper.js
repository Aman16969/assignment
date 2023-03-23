import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./task.css";
const TaskWrapper = () => {
  return (
    <div>
      
      <header>

      <h3 >Tasks</h3>
          <div className="nav-task">
          
          <NavLink className="nav-title" to="addTask">Add Task</NavLink>
          <NavLink className="nav-title" to="allTask">All Task</NavLink>
          </div>
       
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default TaskWrapper;