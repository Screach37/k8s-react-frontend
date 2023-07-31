
import React, { useState, useEffect } from 'react';
import UpcomingExam from './UpcomingExam';
import ExamHistory from './ExamHistory';
import { ImArrowLeft2 } from 'react-icons/im';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { MdChevronRight } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';

export default function AttendanceDetails() {

    const navigate = useNavigate();
   
    const [exam, setExam] = useState([]);

    const examdata = [
      {
        topic : "aaaa",
        sub :'ka;sfk;as',
        time : "12:20",
        date : "12-02-2023",
        status : "fail"
      },
      {
        topic : "aaaa",
        sub :'ka;sfk;as',
        time : "12:20",
        date : "12-02-2023",
        status : "pass"
      }
    ]
    
    useEffect(()=>{
      setExam(examdata);
  },[])

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
                   <span className='assi-nav-txt' style={{ fontWeight:600, fontSize:20, paddingLeft:10  }}>Attendance Details</span>
                 </div>
               </div>
             </div> 
           </div>
         </div>
          <div className='' style={{ marginBottom:"30px" }}>
          <div className='container'>
           <div className='row'>
              <div className='col-12 mt-3'>
                {
                  exam.map((item,index)=>{
                      return(
                         <>
                          <div key={index} className='card p-3 border-0 mb-3 '>
                           <div className='row d-flex justify-content-between align-items-center'>
                             <div className='col-10'>
                               <h5 className='text-start homelive-txt' >{item.topic}</h5>
                                <div className='' style={{ width:'100%', display:'flex', justifyContent:"space-between", alignItems:'center' }} >
                                 <div className='d-flex align-items-center' >
                                    <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                                    <div className='sub-assi-txt px-1' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >{item.date}</div>
                                 </div>
                                 <div className='d-flex align-items-center' >
                                    <CiClock2 className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                                    <div className='sub-assi-txt px-1' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >{item.time} - {item.time}</div>
                                 </div>
                              </div>
                              </div>
                              <div className='col-2'>
                               <MdChevronRight className='text-end' style={{ fontSize:30 }} />
                              </div>
                             </div> 
                            <div className='sub-assi-txt pt-3 text-start' style={{ fontSize:14, fontWeight:400, color:"#545454" }} >Course : {item.sub}</div>
                            <div className='row mt-2 px-2'>
                             {
                              item.status === "fail" ? (<div className='sub-assi-txt text-center col-4' style={{ fontSize:14, fontWeight:400, color:"#FF0E0E", backgroundColor:"#FFE1E1", borderRadius:5 }} >Result : {item.status}</div>)
                              : item.status === "pass" ? (<div className='sub-assi-txt text-center col-4' style={{ fontSize:14, fontWeight:400, color:"#0CBC8B", backgroundColor:"#E1FFEF", borderRadius:5 }} >Result : {item.status}</div>):
                              <div className='sub-assi-txt text-center col-5' style={{ fontSize:13, fontWeight:400, color:"#686868", backgroundColor:"#E4E4E4", borderRadius:5 }} >Result : {item.status}</div>
                             }
                            </div>
                          </div>
                         </>
                      )
                  })
                }
              </div>
           </div>
         </div>
         </div>
       </div>
      </div>
    </div>
  )
}
