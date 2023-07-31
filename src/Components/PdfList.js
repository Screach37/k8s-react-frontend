import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';

export default function MaterialList() {

    const[state, setState] = useState("");
    const[study, setStudy] = useState([]);

    const data = [
        {
            name : "REET Grade 3  2017-18 Question Paper",
            date : "19 April 2023",
        },
        {
            name : "REET Grade 3  2017-18 Question Paper",
            date : "19 April 2023",
        },
        {
            name : "REET Grade 3  2017-18 Question Paper",
            date : "19 April 2023",
        },
        {
            name : "REET Grade 3  2017-18 Question Paper",
            date : "19 April 2023",
        },
        {
            name : "REET Grade 3  2017-18 Question Paper",
            date : "19 April 2023",
        },
        {
            name : "REET Grade 3  2017-18 Question Paper",
            date : "19 April 2023",
        },
        {
            name : "REET Grade 3  2017-18 Question Paper",
            date : "19 April 2023",
        },
        {
            name : "REET Grade 3  2017-18 Question Paper",
            date : "19 April 2023",
        },
        {
            name : "REET Grade 3  2017-18 Question Paper",
            date : "19 April 2023",
        },
        {
            name : "REET Grade 3  2017-18 Question Paper",
            date : "19 April 2023",
        },
        {
            name : "REET Grade 3  2017-18 Question Paper",
            date : "19 April 2023",
        },
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
                     <span className='text-start' style={{ fontWeight:600, fontSize:25, paddingLeft:15  }}>Question Paper</span>
                   </div>
                 </div>
               </div>
             </div>
             <div className='row px-3 mt-5' style={{paddingTop:"10px"}}>
               <div className='col-12 mt-4'>
                 {
                   study.map((item, index)=>{
                       return(
                          <>
                           <NavLink to="/PdfList" className="text-decoration-none" >
                            <div key={index} className='card mt-3 p-3 border-0'>
                             <div className='homelive-txt text-start' style={{ color:"#2E2E2E", fontSize:22, fontWeight:500 }} >{item.name}</div>
                              <div className='sub-assi-txt text-start py-3' style={{ fontSize:18, fontWeight:400, color:"#858585" }} >{item.date}</div>
                                <div className='row mt-2'>
                                   <NavLink to="/" className="text-decoration-none col-6">
                                     <button type='button' className='btn btn-outline py-2 assi-nav-txt' style={{ width:"100%", border:'1px solid #D8D8D8', color:"#2E2E2E", borderRadius:10 }} >View</button>
                                   </NavLink>
                                   <NavLink to="/" className="text-decoration-none col-6">
                                     <button type='button' className='btn py-2' style={{ width:"100%", color:"#fff", backgroundColor:"#2E2E2E", borderRadius:10 }} >Download</button>
                                   </NavLink>
                                </div>
                              </div>
                            </NavLink>  
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
  )
}
