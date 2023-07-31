import React, {useState, useEffect} from 'react';
import Lottie from "lottie-react";
import Message from '../images/email.json';
import Well from '../images/bell-notification.json';
import { NavLink } from 'react-router-dom';

export default function WaitingResult() {

  return (
    <div className=''>
      <div className='container-fluid p-0' style={{ overflowX:"hidden" }} >
        <div className='row'>
          <div className='col-8 m-auto'>
            <p className='rev-dec-text' style={{ color:"#2E2E2E", fontSize:22, fontWeight:600, paddingTop:"40%" }} >Answers Submitted Succesfully</p>
            <div className='row pt-2'>
             <Lottie animationData={Message} style={{ width:"100%",}}/>
            </div>
            <p className='px-5 pt-3 rev-dec-text' style={{ color:"#7E7E7E", fontSize:20, fontWeight:600 }} >Results will be Declared in</p>
            <div className='card border-0 py-3' style={{ backgroundColor:"#EFF5FF" }} >
              <div className='row g-0 d-flex align-items-center justify-content-center'>
                <div className='col-5 text-end'>
                    <div style={{ fontSize:22, fontWeight:600, color:"#367CFF" }} >06</div>
                    <div style={{ fontSize:16, fontWeight:600, color:"#367CFF" }}>Mins</div>
                </div>
                <div className='col-2' style={{ fontSize:50, fontWeight:"bolder", color:"#367CFF" }}>:</div>
                <div className='col-5 text-start'>
                 <div style={{ fontSize:22, fontWeight:600, color:"#367CFF" }}>25</div>
                 <div style={{ fontSize:16, fontWeight:600, color:"#367CFF" }}>Sec</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-5 mb-5'>
        <div className='col-10 mx-auto'>
            <NavLink to="/Result">
            <div className='card border-1 bg-transparent'>
              <div className='row p-0 d-flex align-items-center'>
                <div className='col-3 p-0'>
                  <Lottie animationData={Well} style={{ width:"100%",}}/>
                </div> 
               <div className='col-9 p-0 text-start'>
                 <p className='m-0 rev-dec-text' style={{ color:"#7E7E7E", fontSize:16, fontWeight:400 }}>We will notify you once results are declared </p>
                </div> 
              </div>
            </div>
            </NavLink>
        </div>
      </div>
    </div>
  )
}
