import React, { useEffect, useState } from 'react';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';

export default function OngoingComplain() {

    const [exam, setExam] = useState([]);

    const examData = [
    
    ]

    useEffect(()=>{
        setExam(examData);
    })

  return (
    <div>
       <div className='container'>
         <div className='row'>
            <div className='col-12 mt-3'>
              {
                exam.length>0?
                exam.map((item,index)=>{
                    return(
                       <>
                        <div key={index} className='card p-3 border-0 mb-3 '>
                         <div className='row d-flex justify-content-between align-items-center'>
                           <div className='col-10'>
                             <h5 className='text-start homelive-txt' >{item.name}</h5>
                              <div className='' style={{ width:'100%', display:'flex', justifyContent:"space-between", alignItems:'center' }} >
                               <div className='d-flex align-items-center py-2' >
                                  <MdOutlineCalendarMonth className='sub-assi-txt' style={{ fontSize:25, color:"#777C94" }} />
                                  <div className='sub-assi-txt' style={{ fontSize:18, fontWeight:600, color:"#777C94" }} >{item.date}</div>
                               </div>
                            </div>
                            </div>
                           </div> 
                          <div className='row mt-2 px-2'>
                           {
                            item.result === "unassigned" ? (<div className='sub-assi-txt text-center col-4 p-1' style={{ fontSize:14, fontWeight:400, color:"#FF0E0E", backgroundColor:"#FFE1E1", borderRadius:40 }} >{item.result}</div>)
                            : item.result === "assigned" ? (<div className='sub-assi-txt text-center col-4 p-1' style={{ fontSize:14, fontWeight:400, color:"#ED7A2B", backgroundColor:"#FA8A3E40", borderRadius:40 }} >{item.result}</div>):
                            <div className='sub-assi-txt text-center col-5' style={{ fontSize:13, fontWeight:400, color:"#686868", backgroundColor:"#E4E4E4", borderRadius:5 }} >Result : {item.result}</div>
                           }
                          </div>
                          <div className='row'>
                            <div className='col-10'>
                             <div className='row mt-3'>
                                 <NavLink to="/ComplainDetail" className="text-decoration-none col-6">
                                   <button type='button' className='btn btn-outline py-2 sub-assi-txt' style={{ width:"100%", backgroundColor:'#367CFF', color:"#FFF", borderRadius:10 }} >View Details</button>
                                 </NavLink>
                              {
                                item.result === "unassigned" ? (   <div className="text-decoration-none col-6">
                                <button type='button' className='btn py-2 sub-assi-txt' style={{ width:"100%", color:"#8D8D8D", backgroundColor:"#E8E8E8", borderRadius:10 }} >Open Chat</button>
                              </div>) : item.result === "assigned" ? (<NavLink to="/Chat" className="text-decoration-none col-6">
                                <button type='button' className='btn py-2 sub-assi-txt' style={{ width:"100%", color:"#367CFF", backgroundColor:"#fff", borderRadius:10, border:"1px solid #367CFF" }} >Open Chat</button>
                              </NavLink>) : (<></>)
                              }
                              </div>
                            </div>
                          </div>
                        </div>
                       </>
                    )
                }):<><div className="mt-5" style={{color:"red"}}><h6>No Data Founds</h6></div></>
              }
            </div>
         </div>
          <div className='row fixed-bottom px-4 py-4' style={{ backgroundColor:"transparent", alignItems:"center"  }} >
            <NavLink to="/AddComplaints" className="text-decoration-none col-3 ms-auto" >
             <div className=' ms-auto' style={{ width:80, height:80, backgroundColor:'#ED7A2B', borderRadius:20, color:"#fff", fontSize:35, fontWeight:600, alignItems:'center', justifyContent:"center", display:"flex", cursor:"pointer" }}>+</div>
            </NavLink>
          </div>
       </div>
    </div>
  )
}
