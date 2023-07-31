import React, { useState } from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import { MdOutlineAddBox } from 'react-icons/md';
import { Send } from './SvgIcon';
import MyImg from '../images/myimage.jpg';
import { NavLink, useNavigate } from 'react-router-dom';

export default function ChatHistory () {

    const [msg, setMsg] = useState();

    console.log(msg);

    const navigate = useNavigate();

  return (
    <div>
       <div className='container-fluid'>
        <div classNameName='p-0' style={{ width:"100%", marginTop:"110px", marginBottom:"90px" }} >
         <div className='row fixed-top'>
           <div className='col-md-12'>
             <div className='card py-2 rounded-0 border-0'>
              <div className='row py-3'>
                 <div style={{ display:"flex", justifyContent:"flex-start", alignItems:"center" }}>
                   <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:20 }} /></button>
                     <div className='ms-2' style={{ borderRadius:50, width:50, height:50 }} >
                       <img src={MyImg} className='' style={{ width:"100%", height:"100%", borderRadius:50 }} />
                     </div>
                   <span className='assi-nav-txt' style={{ fontWeight:500, fontSize:22, paddingLeft:15  }}>Smriti Arora</span>
                 </div>
               </div>
             </div> 
           </div>
         </div>
         <div class="message-wrap">
          <div class="message-list me mt-2">
            <div class="msg">
                <div className='p-2 sub-name-txt'>
                  Hii.. ma'am
                </div>
            </div>
            <div class="time sub-name-txt">Today | 12:30</div>
          </div>
          <div class="message-list">
             <div class="msg m-0">
               <div className='p-1 sub-name-txt'>
               Yes Beta please tell
             </div>
             </div>
             <div class="time sub-name-txt">Today | 12:31</div>
           </div>
           <div class="message-list me mt-3">
            <div class="msg">
                <div className='p-1 sub-name-txt'>
                Actually I was having doubts, regarding the last chpter
                </div>
            </div>
            <div class="time sub-name-txt">Today | 12:30</div>
          </div>
         </div>
        </div> 
         <div className='row fixed-bottom px-4 py-4' style={{ backgroundColor:"#F0F5FE", alignItems:"center" }} >
          <div class="mb-3" style={{ backgroundColor:"#EDFFFA", borderRadius:40, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div className='py-3 homelive-txt' style={{ color:'#0CBC8B' }} >Doubt Solved on 12:34 | 3 April 2023 </div>
          </div>
         </div>
       </div> 
    </div>
  )
}
