import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className="sidebar ">
        <img src="logo.png" alt="" width="150px" />
        <ul className="pt-3">
           <NavLink to="/admin" className="remove"> <li><i class="fa-solid fa-house"></i> Home</li><br/></NavLink>
          
           <NavLink to="/history" className="remove"> <li><i class="fa-regular fa-clock"></i> History</li><br/></NavLink>
            
            <NavLink to="/balance" className="remove"> <li><i class="fa-solid fa-scale-balanced"></i> Balance</li><br/></NavLink>
            
            <NavLink to="/card" className="remove"> <li><i class="fa-regular fa-credit-card"></i> Cards</li><br/></NavLink>
            
            <NavLink to="/reports" className="remove"> <li><i class="fa-regular fa-file-lines"></i> Reports</li><br/></NavLink>
        
        </ul>
        <div className="line"></div>
        <ul className="pt-5">
            <li><i class="fa-solid fa-gear"></i> Setting</li><br/>
            <li><i class="fa-regular fa-circle-question"></i> Help</li><br/>
            <li><i class="fa-solid fa-shield-halved"></i> Privacy</li><br/>
        </ul>

      </div>
    </>
  );
};

export default SideBar;

