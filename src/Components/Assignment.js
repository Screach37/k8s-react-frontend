import React, { useState, useEffect } from 'react';
import UpcomingAssignment from './UpcomingAssignment';
import AssignmentHistory from './AssignmentHistory';
import { useNavigate, useParams } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';

export default function Assignment() {

  const { name } = useParams();
  console.log("name",name);
  const [names, setname] = useState("");
    const[state, setState] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
      setname(localStorage.getItem("CourseName"))
    }, [])

  return (
    <div>
      <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
         <div className='' style={{ marginBottom:"60px" }} >
           <div classNameName='p-0' style={{ width:"100%", marginTop:"180px" }} >
             <div className='row'>
                <div className='col-md-12 P-0'>
                  <div className='row fixed-top' style={{ backgroundColor:"#fff" }}>
                    <div className='row'>
                       <div className='col-12'>
                         <div className='row py-3'>
                           <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                             <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:24 }} /></button>
                             <span className='text-start assi-declr-txt' style={{ fontWeight:600, fontSize:22, paddingLeft:15, fontFamily:'inter'  }}>{names}</span>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("UpcomingAssignment")} style={{ borderBottom:state=="UpcomingAssignment"?"2px solid #ED7A2B":"", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center", }} >
                            <span className='assi-declr-txt' style={{ color:state=="UpcomingAssignment"?"#ED7A2B":"#545454", fontSize:20, fontWeight:600, fontFamily:'inter' }} >Upcoming</span>
                        </div>
                     </div>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("AssignmentHistory")} style={{ borderBottom:state=="AssignmentHistory"?"2px solid #ED7A2B":"", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                          <span className='assi-declr-txt' style={{ color:state=="AssignmentHistory"?"#ED7A2B":"#545454", fontSize:20, fontWeight:600, fontFamily:'inter' }} >History</span>
                        </div>
                     </div>
                   </div> 
                   { state === "UpcomingAssignment" || state == "" ? <> <UpcomingAssignment /> </> : <></> }
                   { state === "AssignmentHistory" ? <> <AssignmentHistory /> </> : <></> }
                </div>
            </div> 
          </div>
         </div>
      </div>
    </div>
  )
}
