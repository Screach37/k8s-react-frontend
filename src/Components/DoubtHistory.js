import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { CgArrowRight } from 'react-icons/cg';
import MyImg from '../images/myimage.jpg';
import { NavLink } from 'react-router-dom';

export default function DoubtHistory() {

    const [doubt, setDoubt] = useState([]);

    const data = [
    
    ]

    useEffect(()=>{
        setDoubt(data);
    })

  return (
    <div>
        <div className='container px-3'>
           <div className='row p-0 fixed-top mx-1 py-2' style={{ marginTop:"115px", backgroundColor:"#F0F5FE"}} >
             <div className='col-12 py-2'>
              <div class="input-group p-2" style={{ borderRadius:5, backgroundColor:"#fff" }}>
                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">
                  <span style={{ cursor:"pointer" }} className="border-0"  >
                     <BiSearch style={{ fontSize:25, color:"#858585" }} />
                  </span>
                </span>
                 <input type="text" name="search" className="form-control border-0 py-2 shadow-none bg-transparent" placeholder="Search for Teacher to ask doubt" aria-label="Username"aria-describedby="basic-addon1" />
              </div> 
             </div>
           </div>  
           <div className='row mt-5'>
             <div className='col-12 mt-4'>
                {
                  doubt.length>0?
                  doubt.map((item,index)=>{
                      return (
                          <>
                            <NavLink to="/ChatHistory" className="text-decoration-none" >
                              <div key={index} className='card p-3 border-0 mb-3' style={{ borderRadius:10 }} >
                                <div className='row d-flex align-items-center'>
                                  <div className='col-2'>
                                    <div style={{  borderRadius:50 }} >
                                      <img src={item.image} className='' style={{ width:"100%", height:"100%", borderRadius:50 }} />
                                     </div>
                                  </div>
                                  <div className='col-6 me-auto text-start assi-declr-txt' style={{ color:"#2E2E2E", fontSize:20, fontWeight:500 }} >{item.name}</div>
                                  <div className='col-2 ms-auto '><CgArrowRight className='assi-nav-txt' style={{ fontSize:25, color:"#000" }} /></div>
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
  )
}
