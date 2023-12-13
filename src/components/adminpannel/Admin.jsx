import React from "react";
import SideBar from "./SideBar";
import Header from "../layout/Header";
import OverView from "./overview/OverView";
import Table from "./table/Table";
import BarChat from "./bar/BarChat";


const Admin = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-3 p-0 ">
            <SideBar/>
          </div>
          <div className="col-lg-9 " style={{backgroundColor:"whitesmoke"}}>
            <Header/>
            <OverView/>
            <Table/>
            
            <BarChat/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
