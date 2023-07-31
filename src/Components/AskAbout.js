import React, { useState, useEffect } from 'react';
import NewDoubt from './NewDoubt';
import DoubtOngoing from './DoubtOngoing';
import DoubtHistory from './DoubtHistory';
import { useNavigate } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';

export default function AskAbout() {

    const[state, setState] = useState("");

    const navigate = useNavigate();

  return (
    <div>
      <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
         <div className='' style={{marginBottom:"60px"}} >
           <div classNameName='p-0' style={{ width:"100%", marginTop:"150px" }} >
             <div className='row'>
                <div className='col-lg-12 P-0'>
                  <div className='row fixed-top' style={{ backgroundColor:"#fff" }}>
                    <div className='row'>
                       <div className='col-12'>
                         <div className='row py-3'>
                           <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                             <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:24 }} /></button>
                             <span className='text-start assi-nav-txt' style={{ fontWeight:600, fontSize:25, paddingLeft:15, fontFamily:"inter"  }}>Doubt Section</span>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className='col-4'>
                        <div className='py-3' onClick={()=> setState("NewDoubt")} style={{ borderBottom:state=="NewDoubt"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                            <span className='assi-declr-txt' style={{ color:state=="NewDoubt" || state === '' ?"#ED7A2B":"#545454", fontSize:16, fontWeight:600 }} >New Doubt</span>
                        </div>
                     </div>
                     <div className='col-4'>
                        <div className='py-3' onClick={()=> setState("DoubtOngoing")} style={{ borderBottom:state=="DoubtOngoing"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                          <span className='assi-declr-txt' style={{ color:state=="DoubtOngoing"?"#ED7A2B":"#545454", fontSize:16, fontWeight:600 }} >Ongoing</span>
                        </div>
                     </div>
                     <div className='col-4'>
                        <div className='py-3' onClick={()=> setState("DoubtHistory")} style={{ borderBottom:state=="DoubtHistory"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                          <span className='assi-declr-txt' style={{ color:state=="DoubtHistory"?"#ED7A2B":"#545454", fontSize:16, fontWeight:600 }} >History</span>
                        </div>
                     </div>
                   </div> 
                   { state === "NewDoubt" || state === ''  ? <> <NewDoubt /> </> : <></> }
                   { state === "DoubtOngoing" ? <> <DoubtOngoing /> </> : <></> }
                   { state === "DoubtHistory" ? <> <DoubtHistory /> </> : <></> }
                </div>
            </div> 
          </div>
         </div>
      </div>
    </div>
  )
}
