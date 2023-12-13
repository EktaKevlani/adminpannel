import React from "react";
import "./header.css"
const Header = () => {
  return (
    <>
      <div className="">
        <div className="row bottom pb-3 pt-2 ">
          <div className="col-lg-9 pt-2 ">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="search here..."
              className="mx-3 px-4 style"
            />
          </div>
          <div className="col-lg-3  pt-2 ">
            <i class="fa-regular fa-bell mx-2"></i>
            <i class="fa-regular fa-envelope ms-4 "></i>
            <img
              src="client_img.png"
              className="shift mx-5"
              alt=""
              width="50px"
            />
          </div>
        </div>

        <div className="row bottom pb-3">
          <div className="col-lg-1 pt-4 ">
            <img src="client_img.png" alt="" />
        </div>


        <div className="col-lg-7 pt-4">
        
        <h2 className="px-2">Good morning, Emillia Birch</h2>

        <div className="row ">
            <div className="col-lg-4 color px-4">
            <i class="fa-solid fa-building"></i> Duke Street Studio 
            </div>
            <div className="col-lg-6 color px-4">
            <i class="fa-solid fa-circle-check text-success"></i> Verified Account 
            </div>
        </div>

        </div>
          
          <div className="col-lg-4  pt-5 ">
                <div className="row">
                    <div className="col-lg-6">
                        <button className=" px-3 mx-2" style={{border:"1px solid black",height:"40px"}}>Add Money</button>
                    </div>
                    <div className="col-lg-6">
                    <button className=" px-3" style={{backgroundColor:"green", border:"1px solid black",height:"40px"}}>Send Money</button>
                    </div>

                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
