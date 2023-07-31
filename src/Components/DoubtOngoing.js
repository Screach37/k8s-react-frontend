import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { CgArrowRight } from 'react-icons/cg';
import MyImg from '../images/myimage.jpg';
import { NavLink } from 'react-router-dom';

export default function DoubtOngoing() {

    const [doubt, setDoubt] = useState([]);

    const data = [
    
    ]

    useEffect(()=>{
        setDoubt(data);
    })

  return (
    <div>
        <div className='container px-3'>
           <div className='row mt-2'>
             <div className='col-12'>
                {
                    doubt.length>0?
                  doubt.map((item,index)=>{
                      return(
                          <>
                            <NavLink to="/Chat" className="text-decoration-none" >
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
