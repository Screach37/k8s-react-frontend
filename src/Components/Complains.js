import React, { useState, useEffect } from 'react';
import OngoingComplain from './OngoingComplain';
import ComplainHistory from './ComplainHistory';
import { ImArrowLeft2 } from 'react-icons/im';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Complain() {

    const navigate = useNavigate();

    const[state, setState] = useState("");

  return (
    <div>
       <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
         <div className='' style={{marginBottom:"100px"}} >
           <div classNameName='p-0' style={{ width:"100%", marginTop:"150px" }} >
             <div className='row'>
                <div className='col-lg-12 P-0'>
                  <div className='row fixed-top' style={{ backgroundColor:"#fff" }}>
                    <div className='row'>
                       <div className='col-12'>
                         <div className='row py-3'>
                           <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                             <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:24 }} /></button>
                             <span className='text-start' style={{ fontWeight:600, fontSize:25, paddingLeft:15  }}>Complaints</span>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("OngoingComplain")} style={{ borderBottom:state=="OngoingComplain" || state === '' ?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                            <span className='assi-declr-txt' style={{ color:state=="OngoingComplain" || state === '' ?"#ED7A2B":"#545454", fontSize:18, fontWeight:600 }} >Ongoing</span>
                        </div>
                     </div>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("ComplainHistory")} style={{ borderBottom:state=="ComplainHistory"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                          <span className='assi-declr-txt' style={{ color:state=="ComplainHistory"?"#ED7A2B":"#545454", fontSize:18, fontWeight:600 }} >History</span>
                        </div>
                     </div>
                   </div> 
                   { state === "OngoingComplain" || state === '' ? <> <OngoingComplain /> </> : <></> }
                   { state === "ComplainHistory" ? <> <ComplainHistory /> </> : <></> }
                </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}
