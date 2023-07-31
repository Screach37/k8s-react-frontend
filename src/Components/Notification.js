import React, { useEffect, useState } from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdOutlineCreditCard, MdOutlineAssignment } from 'react-icons/md';
import { FiAlertOctagon } from 'react-icons/fi';
import Pdf from "../images/pdf.png";
import { NavLink, useNavigate } from 'react-router-dom';

export default function ExamDetail() {

    const navigate = useNavigate();

    const [notification, setNotification] = useState();

    const data = [
      {
        title1 : "",
        title2 : "",
        date : "",
        status: 0,
      }
    ]

    useEffect(()=>{
      setNotification(data);
    },[])

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
                  <span className='assi-nav-txt' style={{ fontWeight:600, fontSize:20, paddingLeft:10, fontFamily:'inter'  }}>Notification</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
       </div>
       {/*
       <div className='bar-option pb-5'>
        <div className='row px-2'>
          <div className='col-12'>
            <div className='card border-0 p-2 mb-3'>
              <div className='row d-flex align-items-start justify-content-between'>
                <div className='col-2'><SiGoogleclassroom style={{ fontSize:25, color:"#545454" }} /></div>
                 <div className='col-8'>
                  <div className='text-start sub-assi-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:400  }} >Live class started for <span className='assi-nav-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:500  }}>B.C.A in Cybersecurity </span></div>
                   <div className='text-start sub-assi-txt py-2' style={{ fontFamily:'inter', fontSize:13, fontWeight:400, color:"#858585"  }}>12:48 | 23 Apr 2023</div>
                    <div className='row'>
                     <NavLink to="/JoinLiveClass" className="text-decoration-none col-6">
                       <button type='button' className='btn py-2 sub-assi-txt' style={{ width:"100%", backgroundColor:"#367CFF", color:"#fff", borderRadius:5 }} >Join Now</button>
                     </NavLink>
                     <NavLink to="/" className="text-decoration-none col-6">
                       <button type='button' className='btn py-2 sub-assi-txt' style={{ width:"100%", color:"#858585", border:"1px solid #EFEFEF", borderRadius:5 }} >Cancel</button>
                     </NavLink>
                  </div>
                </div>
                <div className='col-2'><div style={{ width:14, height:14, backgroundColor:"#367CFF", borderRadius:10 }} ></div></div>
              </div>
            </div>
          </div>
        </div>  
        <div className='row px-2'>
          <div className='col-12'>
            <div className='card border-0 p-2 mb-3'>
              <div className='row d-flex align-items-start justify-content-between'>
                <div className='col-2'><SiGoogleclassroom style={{ fontSize:25, color:"#545454" }} /></div>
                <div className='col-8'>
                  <div className='text-start sub-assi-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:400  }} >Live class started for <span className='assi-nav-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:500  }}>B.C.A in Cybersecurity </span></div>
                   <div className='text-start sub-assi-txt py-2' style={{ fontFamily:'inter', fontSize:13, fontWeight:400, color:"#858585"  }}>12:48 | 23 Apr 2023</div>
                    <div className='row'>
                     <NavLink to="/WatchRecorded" className="text-decoration-none col-10">
                       <button type='button' className='btn py-2 sub-assi-txt' style={{ width:"100%", backgroundColor:"#367CFF", color:"#fff", borderRadius:5 }} >View Recording</button>
                     </NavLink>
                  </div>
                </div>
                <div className='col-2'><div style={{ width:14, height:14, backgroundColor:"#367CFF", borderRadius:10 }} ></div></div>
              </div>
            </div>
          </div>
        </div>  
        <div className='row px-2'>
          <div className='col-12'>
            <div className='card border-0 p-2 mb-3'>
              <div className='row d-flex align-items-start justify-content-between'>
                <div className='col-2'><MdOutlineCreditCard style={{ fontSize:25, color:"#545454" }} /></div>
                <div className='col-8'>
                  <div className='text-start sub-assi-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:400  }} >Payment Upcoming for <span className='assi-nav-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:500  }}>B.C.A Specialization in Cyber Security Fees for ₹ 19,750 </span></div>
                   <div className='text-start sub-assi-txt py-2' style={{ fontFamily:'inter', fontSize:13, fontWeight:400, color:"#858585"  }}>12:48 | 23 Apr 2023</div>
                    <div className='row'>
                     <NavLink to="/PaymentDetail" className="text-decoration-none col-6">
                       <button type='button' className='btn py-2 sub-assi-txt' style={{ width:"100%",  backgroundColor:"#367CFF", color:"#fff", borderRadius:5 }} >Pay Now</button>
                     </NavLink>
                  </div>
                </div>
                <div className='col-2'><div style={{ width:14, height:14, backgroundColor:"#367CFF", borderRadius:10 }} ></div></div>
              </div>
            </div>
          </div>
        </div>  
        <div className='row px-2'>
          <div className='col-12'>
            <div className='card border-0 p-2 mb-3'>
              <div className='row d-flex align-items-start justify-content-between'>
                <div className='col-2'><MdOutlineCreditCard style={{ fontSize:25, color:"#0CBC8B" }} /></div>
                <div className='col-8'>
                  <div className='text-start sub-assi-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:400  }} >Payment Upcoming for <span className='assi-nav-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:500  }}>B.C.A Specialization in Cyber Security Fees for ₹ 19,750 </span></div>
                   <div className='text-start sub-assi-txt py-2' style={{ fontFamily:'inter', fontSize:13, fontWeight:400, color:"#858585"  }}>12:48 | 23 Apr 2023</div>
                    <div className='row'>
                     <NavLink to="/Payment" className="text-decoration-none col-10">
                       <button type='button' className='btn py-2 sub-assi-txt' style={{ width:"100%", backgroundColor:"#367CFF", color:"#fff", borderRadius:5 }} >Download Receipt</button>
                     </NavLink>
                  </div>
                </div>
                <div className='col-2'><div style={{ width:14, height:14, backgroundColor:"#367CFF", borderRadius:10 }} ></div></div>
              </div>
            </div>
          </div>
        </div>  
        <div className='row px-2'>
          <div className='col-12'>
            <div className='card border-0 p-2 mb-3'>
              <div className='row d-flex align-items-start justify-content-between'>
                <div className='col-2'><MdOutlineCreditCard style={{ fontSize:25, color:"#D92828" }} /></div>
                <div className='col-8'>
                  <div className='text-start sub-assi-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:400  }} >Payment Upcoming for <span className='assi-nav-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:500  }}>B.C.A Specialization in Cyber Security Fees for ₹ 19,750 </span></div>
                   <div className='text-start sub-assi-txt py-2' style={{ fontFamily:'inter', fontSize:13, fontWeight:400, color:"#858585"  }}>12:48 | 23 Apr 2023</div>
                    <div className='row'>
                     <NavLink to="/PaymentDetail" className="text-decoration-none col-6">
                       <button type='button' className='btn py-2 sub-assi-txt' style={{ width:"100%", backgroundColor:"#367CFF", color:"#fff", borderRadius:5 }} >Try Again</button>
                     </NavLink>
                  </div>
                </div>
                <div className='col-2'><div style={{ width:14, height:14, backgroundColor:"#367CFF", borderRadius:10 }} ></div></div>
              </div>
            </div>
          </div>
        </div>  
        <div className='row px-2'>
          <div className='col-12'>
            <div className='card border-0 p-2 mb-3'>
              <div className='row d-flex align-items-start justify-content-between'>
                <div className='col-2'><p style={{ fontSize:25 }} >🎊</p></div>
                <div className='col-8'>
                   <div className='text-start sub-assi-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:500  }} >B.C.A Specialization in Cyber Security Course Completed Successfully</div>
                   <div className='text-start sub-assi-txt py-2' style={{ fontFamily:'inter', fontSize:13, fontWeight:400, color:"#858585"  }}>12:48 | 23 Apr 2023</div>
                </div>
                <div className='col-2'><div style={{ width:14, height:14, backgroundColor:"#367CFF", borderRadius:10 }} ></div></div>
              </div>
            </div>
          </div>
        </div>  
        <div className='row px-2'>
          <div className='col-12'>
            <div className='card border-0 p-2 mb-3'>
              <div className='row d-flex align-items-start justify-content-between'>
                <div className='col-2'><FiAlertOctagon style={{ fontSize:25, color:"#D92828" }} /></div>
                <div className='col-8'>
                  <div className='text-start sub-assi-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:400  }} >Access for <span className='assi-nav-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:500  }}>B.C.A Specialization in Cyber Security Blocked</span></div>
                   <div className='text-start sub-assi-txt py-2' style={{ fontFamily:'inter', fontSize:13, fontWeight:400, color:"#858585"  }}>12:48 | 23 Apr 2023</div>
                </div>
                <div className='col-2'><div style={{ width:14, height:14, backgroundColor:"#367CFF", borderRadius:10 }} ></div></div>
              </div>
            </div>
          </div>
        </div>  
        <div className='row px-2'>
          <div className='col-12'>
            <div className='card border-0 p-2 mb-3'>
              <div className='row d-flex align-items-start justify-content-between'>
                <div className='col-2'><MdOutlineAssignment style={{ fontSize:25, color:"#545454" }} /></div>
                <div className='col-8'>
                  <div className='text-start sub-assi-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:400  }} >Result Declared for Exam <span className='assi-nav-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:500  }}>Pertaining and Substantial Economic Crisis </span></div>
                   <div className='text-start sub-assi-txt py-2' style={{ fontFamily:'inter', fontSize:13, fontWeight:400, color:"#858585"  }}>12:48 | 23 Apr 2023</div>
                    <div className='row'>
                     <NavLink to="/DetailExam" className="text-decoration-none col-6">
                       <button type='button' className='btn py-2 sub-assi-txt' style={{ width:"100%", backgroundColor:"#367CFF", color:"#fff", borderRadius:5, fontSize:13, fontFamily:"inter" }} >View Result</button>
                     </NavLink>
                  </div>
                </div>
                <div className='col-2'><div style={{ width:14, height:14, backgroundColor:"#367CFF", borderRadius:10 }} ></div></div>
              </div>
            </div>
          </div>
        </div>
        <div className='row px-2'>
          <div className='col-12'>
            <div className='card border-0 p-2 mb-3'>
              <div className='row d-flex align-items-start justify-content-between'>
                <div className='col-2'><img src={Pdf} className='' style={{ width:"80%", height:"80%" }}/></div>
                <div className='col-8'>
                  <div className='text-start sub-assi-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:400  }} >Result Declared for Exam <span className='assi-nav-txt' style={{ fontFamily:'inter', fontSize:14, fontWeight:500  }}>Pertaining and Substantial Economic Crisis </span></div>
                   <div className='text-start sub-assi-txt py-2' style={{ fontFamily:'inter', fontSize:13, fontWeight:400, color:"#858585"  }}>12:48 | 23 Apr 2023</div>
                    <div className='row'>
                     <NavLink to="/PdfList" className="text-decoration-none col-6">
                       <button type='button' className='btn py-2 sub-assi-txt' style={{ width:"100%", backgroundColor:"#367CFF", color:"#fff", borderRadius:5 }} >View PDF</button>
                     </NavLink>
                  </div>
                </div>
                <div className='col-2'><div style={{ width:14, height:14, backgroundColor:"#367CFF", borderRadius:10 }} ></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
      <div className="mt-5" style={{color:"red"}}><h6>Notifications Not Founds</h6></div>
     </div> 
    </div>
  )
}


