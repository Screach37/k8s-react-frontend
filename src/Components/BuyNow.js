import React from 'react';
import { FiHome } from 'react-icons/fi';
import Cardimg from '../images/cardimg.png';
import { NavLink, useNavigate } from 'react-router-dom';

export default function BuyNow() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 pt-5'>
            <div className='text-center pt-5 animate__animated animate__backInUp animate__delay-1s' >
             <div className='' style={{ fontSize:32, fontWeight:600 }} >Congratulation!!</div>
             <div className='' style={{ fontSize:18, fontWeight:600, color:"#545454" }} >You have successfully purchased </div>
            </div>
            <div className='card border-0 mt-3' style={{ width:'100%', borderRadis:10 }} >
             <div className='row'>
               <div className='col-12 m-auto mt-2'>
                 <div className="card bg-white rounded-4 border-0" style={{padding:"8px"}} >
                  <img src={Cardimg} className="card-img-top" alt="..." style={{ borderRadius:10 }} />
                   <div className="card-body">
                     <div className='text-start' style={{ fontSize:20, fontWeight:600, color:'#1E1E1E' }} >Complete NDA Crash Course</div>
                     <NavLink to='/PurchaseCourse' className="text-decoration-none" >
                     <div className='p-2 mt-2' style={{ width:"100%", backgroundColor:"#fff", border:"1px solid #ED7A2B", borderRadius:5, color:"#ED7A2B", fontSize:18, fontWeight:600 }} >Go To Course</div>
                     </NavLink>
                     <NavLink to='/Home' className="text-decoration-none" >
                     <div className='p-2 mt-2' style={{ width:"100%", backgroundColor:"#F7F7F7", borderRadius:5, color:"#9CA3B0", fontSize:18, fontWeight:600, alignItems:"center", display:"flex", justifyContent:"center" }} ><FiHome style={{ fontSize:20 }} />&nbsp;&nbsp;Home</div>
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
