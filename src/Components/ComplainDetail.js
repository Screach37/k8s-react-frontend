import React, { useEffect, useState } from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import MyImg from '../images/myimage.jpg';
import { CiClock2 } from 'react-icons/ci';
import { NavLink, useNavigate } from 'react-router-dom';

export default function ExamDetail() {

    const [state, setState] = useState(0);

    const navigate = useNavigate();

  return (
    <div>
      <div className='container-fluid p-0' style={{overflowX:"hidden"}}>
      <div classNameName='p-0' style={{ width:"100%", marginTop:"40px", marginBottom:"90px" }} >
        <div className='row fixed-top'>
          <div className='col-md-12'>
            <div className='card py-2 rounded-0 border-0'>
             <div className='row py-3'>
                <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                  <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:20 }} /></button>
                  <span className='assi-nav-txt' style={{ fontWeight:600, fontSize:20, paddingLeft:10  }}>Complaint Details</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
        </div>
       <div className='bar-option pb-5'>
        <div className='row p-4'>
         <div className='col-12'>
          <div className='text-start' style={{ fontSize:18, color:"#545454", fontWeight:400 }} >Headline</div>
          <div className='text-start pt-2 assi-nav-txt' style={{ fontSize:22, fontWeight:600, color:'#1E1E1E' }} >Unable to access my smartphone application.</div>
           <div className='pt-4' style={{ width:'100%', display:'flex', justifyContent:"start", alignItems:'center' }} >
             <div className='d-flex align-items-center' >
                <MdOutlineCalendarMonth className='sub-assi-txt' style={{ fontSize:28, color:"#545454" }} />
                <div className='sub-assi-txt' style={{ fontSize:18, fontWeight:600, color:"#545454" }} >12 December 2023</div>
             </div>
          </div>
         </div> 
        </div>
        <div className='row px-4 mb-5' >
         <div className='text-start' style={{ fontSize:18, color:"#545454", fontWeight:400 }} >Status</div>
         <div className='row'>
          {
              state === 1 ? (<div className='sub-assi-txt text-center col-4 p-1' style={{ fontSize:14, fontWeight:400, color:"#FF0E0E", backgroundColor:"#FFE1E1", borderRadius:40 }} >Unassigned</div>) 
              : (<div className='sub-assi-txt text-center col-4 p-1' style={{ fontSize:14, fontWeight:400, color:"#ED7A2B", backgroundColor:"#FA8A3E40", borderRadius:40 }} >Assigned</div>)
          }
          <div className='col-12 text-start pt-4' style={{ fontSize:16, fontWeight:400, color:'#9098A8' }} >Instructor</div>
          <div className='row'>
            <div className='col-8' style={{ border:'1px solid #9098A8', borderRadius:40 }} >
               <div className='row p-2 d-flex align-items-center'>
                 <div className='col-2 p-0' style={{ borderRadius:50 }} >
                  <img src={MyImg} className='' style={{ width:"100%", height:"100%", borderRadius:50 }}/>
                 </div>
                 <div className='col-10 ms-auto homelive-txt' style={{ display:"flex", alignItems:"center", color:"#545454", fontSize:16 }}>
                    Swati Khandelwal
                 </div>
               </div>
            </div>
          </div>
         </div>
       </div>
         <div className='row mt-4 px-4'>
         <div className='text-start' style={{ fontSize:18, color:"#7A7A7A", fontWeight:400 }} >Description</div>
           <div className='col-12'>
             <p className='text-start' style={{ color:"#5A5A5A" }} >Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.</p>
           </div>
         </div>
      </div>
      <div className='row fixed-bottom px-4 py-4' style={{ backgroundColor:"#F0F5FE", alignItems:"center"  }} >
       <NavLink to="/CloseComplain" className="text-decoration-none col-12" >
        <div className=' ms-auto py-3' style={{ backgroundColor:'#ED7A2B', borderRadius:5, color:"#fff", fontSize:16, fontWeight:600, alignItems:'center', justifyContent:"center", display:"flex", cursor:"pointer" }}>Close Complaint</div>
       </NavLink>
     </div>
     </div> 
    </div>
  )
}


