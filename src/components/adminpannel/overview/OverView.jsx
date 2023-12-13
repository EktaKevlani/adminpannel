import React from "react";
import CardComp from "./CardComp";

const OverView = () => {
  return (
    <>
      <div className="pt-4">
        <h2>Overview</h2>
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-4">
              <CardComp  
              icon={<i class="fa-solid fa-scale-balanced"></i>}
              name="Amount balance"
              amt="$30,659.45">

              </CardComp>
            </div>
            <div className="col-lg-4">
            <CardComp  
              icon={<i class="fa-solid fa-arrows-rotate"></i>}
              name="Pending"
              amt="$19,500.00">

              </CardComp>
            </div>
            <div className="col-lg-4">
            <CardComp  
              icon={<i class="fa-regular fa-circle-check"></i>}
              name="Processed (last 30 days)"
              amt="$20,000">

              </CardComp>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverView;
