import React, { useState, useEffect } from 'react';
import UpcomingExam from './UpcomingExam';
import ExamHistory from './ExamHistory';
import { ImArrowLeft2 } from 'react-icons/im';
import { NavLink, useNavigate } from 'react-router-dom';

export default function MyExam() {

    const navigate = useNavigate();

    const[state, setState] = useState("");

  return (
    <div>
      <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
       <div className=''>
       <div className='row'>
          <div className='col-md-12'>
            <div className='card py-2 rounded-0 border-0'>
             <div className='row py-3'>
                <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                  <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:20 }} /></button>
                  <span className='assi-nav-txt' style={{ fontWeight:600, fontSize:20, paddingLeft:10  }}>My Exams</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
         <div className='' style={{ marginBottom:"30px" }}>
          <div classNameName='p-0' style={{ width:"100%", marginTop:"0px" }} >
            <div className='row'>
                <div className='col-md-12 P-0'>
                   <div className='row' style={{ backgroundColor:"#fff" }}>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("UpcomingExam")} style={{ borderBottom:state=="UpcomingExam" || state === '' ?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                            <span className='assi-nav-txt' style={{ color:state=="UpcomingExam" || state === '' ?"#ED7A2B":"#545454", fontSize:20, fontWeight:600 }} >Upcoming</span>
                        </div>
                     </div>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("ExamHistory")} style={{ borderBottom:state=="ExamHistory"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                          <span className='assi-nav-txt' style={{ color:state=="ExamHistory"?"#ED7A2B":"#545454", fontSize:20, fontWeight:600 }} >History</span>
                        </div>
                     </div>
                   </div> 
                   <div className=''>
                    { state === "UpcomingExam" || state === '' ? <> <UpcomingExam /> </> : <></> }
                    { state === "ExamHistory" ? <> <ExamHistory /> </> : <></> }
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
