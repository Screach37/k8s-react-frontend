import React from 'react';
import Logo from '../images/logo.png';
import Password from '../images/passwords.json';
import Lottie from "lottie-react";
import { NavLink } from 'react-router-dom';

export default function PasswordUpdate() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 pt-5'>
            <div className='row text-center pt-5' >
             <div className='col-6 m-auto assi-nav-txt' style={{ fontSize:28, fontWeight:600, color:"#545454", fontFamily:"inter" }} >Password Reset Successfully</div>
            </div>
            <div className='border-0 mt-3' style={{ width:'100%', borderRadis:10 }} >
             <div className='row'>
               <div className='col-10 m-auto mt-2'>
                 <div className="rounded-4 border-0" style={{padding:"8px", backgroundColor:"transparent"}} >
                  <Lottie animationData={Password} style={{ width:"100%", backgroundColor:"transparent"}}/>
                 </div>
                 <div className="">
                   <NavLink to='/Login' className="text-decoration-none" >
                     <div className='p-3 mt-2' style={{ width:"100%", backgroundColor:"#ED7A2B", borderRadius:5, color:"#fff", fontSize:18, fontWeight:500, alignItems:"center", display:"flex", justifyContent:"center" }} >Login</div>
                   </NavLink>
                 </div>
                </div>
                <div className='mt-5 m-auto'>
                 <img src={Logo} className='' style={{ width:"100%" }} />
                </div>
              </div>
            </div>
          </div> 
        </div>    
      </div>  
     </div>
  )
}
