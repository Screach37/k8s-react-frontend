import React, { useState, useEffect } from 'react';
import { FiHome } from 'react-icons/fi';
import { MdOutlineMenuBook } from 'react-icons/md';
import { IoMdCard } from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';
import { API_URL } from '../env';

export default function Footer() {
  
  const Location = useLocation();
  
  const [name, setName] = useState();

  const studentData = async() => {
   
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`${API_URL}/get/studentdetail`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.status == "001")
        console.log(result);
        setName(result.stu_data.name);
      })
      .catch(error => console.log('error', error));
  }

   useEffect(()=>{
    studentData();
     if(!localStorage.getItem("token")){
     }
     else{
       
     }
   },[]);

  return (
    <div>
      <div className='container-fluid fixed-bottom'>
        <div className='row'>
          <div className='p-0' style={{ width:"100%", height:70, backgroundColor:"#fff", display:"flex", justifyContent:"space-between",  }}>
            <div className='mx-2' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex", borderTop:Location.pathname=="/Home"?"2px solid #ED7A2B":"", color:'#ED7A2B' }}>
              <NavLink to='/Home' className="text-decoration-none text-dark" >
               <div style={{  }}>
                 <FiHome style={{ fontSize:25, color:Location.pathname=="/Home"?"#ED7A2B":"#B4B4B4" }} />
                 <div className='assi-declr-txt' style={{color:Location.pathname=="/Home"?"#ED7A2B":"#B4B4B4", fontFamily:"inter", fontWeight:500, fontSize:14}} >Home</div>
               </div>
              </NavLink>
            </div>
            <div className='mx-2' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex", cursor:"pointer",borderTop:Location.pathname=="/Course"?"2px solid #ED7A2B":"", }}>
             <NavLink to='/Course' className="text-decoration-none text-dark">
              <div>
                <MdOutlineMenuBook style={{ fontSize:25, color:Location.pathname=="/Course"?"#ED7A2B":"#B4B4B4" }} />
                <div className='assi-declr-txt' style={{ color:Location.pathname=="/Course"?"#ED7A2B":"#B4B4B4", fontFamily:"inter", fontWeight:500, fontSize:14 }} >Courses</div>
              </div>
             </NavLink>
            </div>
            <div className='mx-2' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex",borderTop:Location.pathname=="/Payment"?"2px solid #ED7A2B":"",}}>
              <NavLink to="/Payment" className="text-decoration-none text-dark" >
               <div>
                <IoMdCard style={{ fontSize:25, color:Location.pathname=="/Payment"?"#ED7A2B":"#B4B4B4" }}/>
                <div className='assi-declr-txt' style={{ color:Location.pathname=="/Payment"?"#ED7A2B":"#B4B4B4", fontFamily:"inter", fontWeight:500, fontSize:14 }} >Paymetns</div>
               </div>
              </NavLink>
            </div>
            <div className='mx-2' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex",borderTop:Location.pathname=="/Profile"?"2px solid #ED7A2B":"", }}>
            <NavLink to="/Profile" className="text-decoration-none" >
              <div className='text-center'>
                <div className='p-0 col-3 m-auto' style={{ width:30, height:30, borderRadius:100, display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:'#F2F2F2' }} >
                <div
                     style={{
                       color: "#0CBC8B",
                       display: "flex",
                       justifyContent: "center",
                       alignItems:'center',
                       fontSize: "18px",
                       fontWeight: "600",
                       fontFamily:"inter",
                       textTransform: "capitalize",
                     }}
                   >
                     {name?.split("", 1)}
                   </div>
                 </div>
                <div className='text-center assi-declr-txt' style={{ color:Location.pathname=="/Profile"?"#ED7A2B":"#B4B4B4", fontFamily:"inter", fontWeight:500, fontSize:14 }} >Profile</div>
              </div>
            </NavLink>
           </div>
          </div>
        </div>
      </div>    
    </div>
  )
}
