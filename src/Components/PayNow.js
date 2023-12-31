import React from 'react';
import { FiHome } from 'react-icons/fi';
import { FiDownload } from 'react-icons/fi';
import Cardimg from '../images/cardimg.png';
import PayTm from '../images/PayTm.json';
import Lottie from "lottie-react";
import { NavLink, useNavigate } from 'react-router-dom';

export default function PayNow() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 pt-5'>
            <div className='text-center pt-5' >
             <div className='' style={{ fontSize:20, fontWeight:400, color:"#858585" }} >Amount</div>
             <div className='text-center m-0' style={{ color:"#545454", fontSize:30, fontWeight:500 }} >₹ 19,867</div>
             <div className='' style={{ fontSize:18, fontWeight:600, color:"#545454" }} >Paid Succesfully</div>
            </div>
            <div className='card border-0 mt-3' style={{ width:'100%', borderRadis:10 }} >
             <div className='row'>
               <div className='col-12 m-auto mt-2'>
                 <div className="rounded-4 border-0" style={{padding:"8px", backgroundColor:"transparent"}} >
                  {/* <img src={Cardimg} className="card-img-top" alt="..." style={{ borderRadius:10 }} /> */}
                  <Lottie animationData={PayTm} style={{ width:"100%", backgroundColor:"transparent"}}/>
                   <div className="">
                     <NavLink to='/' className="text-decoration-none" >
                     <div className='p-3 mt-2' style={{ width:"100%", backgroundColor:"#fff", border:"1px solid #ED7A2B", borderRadius:5, color:"#ED7A2B", fontSize:18, fontWeight:500, alignItems:"center", display:"flex", justifyContent:"center" }} ><FiDownload style={{ fontSize:22 }} />&nbsp;Download Receipt</div>
                     </NavLink>
                     <NavLink to='/Home' className="text-decoration-none" >
                     <div className='p-3 mt-2' style={{ width:"100%", backgroundColor:"#F7F7F7", borderRadius:5, color:"#9CA3B0", fontSize:18, fontWeight:500, alignItems:"center", display:"flex", justifyContent:"center" }} ><FiHome style={{ fontSize:20 }} />&nbsp;&nbsp;Home</div>
                     </NavLink>
                   </div>
                 </div>
                </div>
              </div>
            </div>
          </div> 
        </div>    
      </div>  
    </div>
  )
}
