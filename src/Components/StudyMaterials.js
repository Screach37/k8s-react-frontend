import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';
import { CgArrowRight } from 'react-icons/cg';

export default function StudyMaterials() {

    const[state, setState] = useState("");
    const[study, setStudy] = useState([]);

    const data = [
  
    ]

    useEffect(()=>{
        setStudy(data);
    })

    const navigate = useNavigate();

  return (
    <div>
     <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
       <div className='' style={{marginBottom:"60px"}} >
         <div classNameName='p-0' style={{}} >
           <div className='row fixed-top' style={{backgroundColor:"#fff" }}>
              <div className='col-12'>
                 <div className='row py-3'>
                   <div style={{ display:"flex", justifyContent:"", alignItems:"center", }}>
                     <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:24 }} /></button>
                     <span className='text-start' style={{ fontWeight:600, fontSize:25, paddingLeft:15  }}>Study Materials</span>
                   </div>
                 </div>
               </div>
               <div className='row p-0 mx-1 pt-3 px-3' style={{ backgroundColor:"#F0F5FE"}} >
                <div className='col-12 py-2'> 
                <p className='text-start' style={{ fontSize:22, color:"#2E2E2E", fontWeight:500 }} >Select Course</p>
               </div>
             </div> 
             </div>
 
             <div className='row px-3 mt-5' style={{paddingTop:"100px"}}>
               <div className='col-12 mt-4'>
                 {
                  study.length>0?
                   study.map((item, index)=>{
                       return(
                          <>
                            <NavLink to="/MaterialList" className="text-decoration-none" >
                             <div key={index} className='card p-3 py-4 border-0 mb-3' style={{ borderRadius:10 }} >
                               <div className='row d-flex align-items-center'>
                                 <div className='col-8 me-auto text-start assi-declr-txt' style={{ color:"#2E2E2E", fontSize:20, fontWeight:500 }} >{item.name}</div>
                                 <div className='col-2 ms-auto'><CgArrowRight className='assi-nav-txt' style={{ fontSize:25, color:"#000" }} /></div>
                               </div>
                             </div>
                            </NavLink>  
                          </>
                       )
                   }):<><div className="mt-5" style={{color:"red"}}><h6>No Data Founds</h6></div></>
                 }
               </div>
             </div>
           </div> 
         </div>
       </div> 
    </div>
  )
}
