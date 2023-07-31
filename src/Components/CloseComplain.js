import React from 'react';
import { FiHome } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';

export default function CloseComplain() {
  
  return (
    <div>
       <div className='container-fluid'>
         <div className='row mt-5'>
            <div className='col-8 mt-5 m-auto'>
              <p className='mt-5' style={{ fontSize:32, fontWeight:600 }} >Complaint Closed Successfully</p>
                 <NavLink to='/Home' className="text-decoration-none" >
                     <div className='p-3 mt-3' style={{ width:"100%", backgroundColor:"#ED7A2B", borderRadius:5, color:"#fff", fontSize:18, fontWeight:600, alignItems:"center", display:"flex", justifyContent:"center" }} ><FiHome style={{ fontSize:20 }} />&nbsp;&nbsp;Home</div>
                 </NavLink>
            </div>
         </div>
        </div> 
    </div>
  )
}
