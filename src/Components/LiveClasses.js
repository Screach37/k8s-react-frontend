import React, { useEffect, useState } from 'react';
import Cardimg from '../images/cardimg.png';
import { GiDuration } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../env';

export default function LiveClasses() {

    const[Live, setLive] = useState([]);

    const getLiveClasses = () =>{
      var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch(`${API_URL}/get/cou`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log(result);
              setLive(result.course);
            }
          })
          .catch(error => console.log('error', error));
    }

    useEffect(() => {
      getLiveClasses();
       if(!localStorage.getItem("token")){
       }
       else{
     
       }
     }, [])

  return (
    <div>
      <div classNameName='container-fluid'>
        <div classNameName='row'>
          <div className='col-12 mb-5 px-3'>
            {
              Live.map((item,index)=>{
                  return(
                    <div key={index} className='row'>
                      <div className='col-12 m-auto mt-2'>
                       <div className="card bg-white rounded-4 border-0" style={{padding:"8px"}} >
                        <img src={item.banner} className="card-img-top" alt="..." style={{ borderRadius:10 }} />
                        <div className="card-body px-0">
                          <div className='text-start assi-declr-txt' style={{ fontSize:20, fontWeight:600, color:'#1E1E1E', fontFamily:"inter" }} >{item.name}</div>
                          <div className='py-1' style={{ display:"flex", alignItems:"center" }} >
                            <GiDuration style={{ fontSize:20, color:"#858585" }} />
                            <div className='ps-2 assi-declr-txt' style={{ fontSize:16, fontWeight:400, color:"#858585", fontFamily:'inter' }} >{item.duration}</div>
                          </div>
                          <div style={{ display:'flex', alignItems:'center' }} >
                           <div className='assi-declr-txt' style={{ fontSize:15, fontWeight:500, color:"#1E1E1E", fontFamily:"inter" }} >Price :</div>
                           <div className='text-decoration-line-through assi-declr-txt' style={{ fontSize:15, fontWeight:500, color:"#1E1E1E", fontFamily:"inter" }} > ₹ {item.discount_price}</div>
                           <div className='assi-declr-txt' style={{ fontSize:15, fontWeight:500, color:"#ED7A2B", fontFamily:"inter" }} >&nbsp; ₹ {item.course_price}</div>
                          </div>
                          <NavLink to="/LiveCourseDetail" className="text-decoration-none" >
                           <div className='Course-btn p-2 mt-2 text-white' style={{  }} >View Detail</div>
                          </NavLink>
                        </div>
                       </div>
                      </div>
                    </div>
                  )
              })
            }
          </div>
        </div>
      </div> 
    </div>
  )
}
