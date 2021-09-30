
import React, { useEffect, useState } from 'react'

const Covid = ()=>{
    const[data ,setData] = useState([]);
   const getCovidData = async ()=>{
       try{
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);   
        console.log(res);
        setData(actualData.statewise[0]);


       }
       catch(err){
           console.log(err);

       }
      
   }
    useEffect(()=>{
        getCovidData(); 

    },[]);
    return(
    <>
    
    <h1>Covid-19 Live Tracker</h1>

<div className="row">
   <div class="column ">
    <div class="card first">
      <h3>COUNTRY</h3>
      <p>INDIA</p>
      
    </div>
  </div>
   <div class="column">
    <div class="card third">
      <h3>RECOVERED</h3>
      <p>{data.recovered}</p>
      
    </div>
  </div>
   <div class="column">
    <div class="card second">
      <h3>CONFIRMED</h3>
      <p>{data.confirmed}</p>
     
    </div>
  </div>
   <div class="column">
    <div class="card third">
      <h3>DEATHS</h3>
      <p>{data.deaths}</p>
     
    </div>
  </div>
   <div class="column">
    <div class="card first">
      <h3>ACTIVE</h3>
      <p>{data.active}</p>
      
    </div>
  </div>
   <div class="column">
    <div class="card second">
      <h3>LAST UPDATED</h3>
      <p>{data.lastupdatedtime}</p>
   
    </div>
   
  </div>
  </div>
  <footer className="footer">Made in ❤️ by Adi.</footer>
  

</>
    )
};

export default Covid;