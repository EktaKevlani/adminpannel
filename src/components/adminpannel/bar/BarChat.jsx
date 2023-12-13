import React from 'react';
import Chart from "react-apexcharts"

const BarChat = () => {
  return (
    <>
    <React.Fragment>
     <h1>chart.......</h1>

     <Chart 
     type="bar" 
     width="100%" 
     height={700}

     series={[
      {
        name:"social media subs",
        data:[4573,5684,5678,4567] ,    
       }
     ]}
       
     options={{

     }}
     >

     </Chart>
     
     </React.Fragment>
    </>
  )
}

export default BarChat
