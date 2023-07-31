import React from 'react';
import Lottie from "lottie-react";
import Bicycle from '../images/cycle.json';
import { NavLink, useNavigate } from 'react-router-dom';

export default function ReviewAnswer() {

  const navigate = useNavigate();

  return (
    <div>
      <div className='container' style={{ overflowX:"hidden" }} >
        <div className='row'>
          <div className='col-10 m-auto'>
            <p className='pt-5' style={{ color:"#2E2E2E", fontSize:26, fontWeight:600 }} >Review, before Submission</p>
            <div className='card p-3 border-0'>
              <div className='row mt-3'>
                <div className='col-7 text-start'>
                  <div style={{ fontSize:12, fontWeight:600, color:"#7E7E7E" }}>Total Questions</div>
                  <div className="text-start" style={{ color:"#2E2E2E", fontSize:20, fontWeight:600 }}>10</div>
                </div>
                <div className='col-5 text-start'>
                  <div style={{ fontSize:12, fontWeight:600, color:"#7E7E7E" }}>Correct</div>
                  <div className="" style={{ color:"#0CBC8B", fontSize:20, fontWeight:600 }}>05</div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-7 text-start'>
                  <div style={{ fontSize:12, fontWeight:600, color:"#7E7E7E" }}>Unattempt</div>
                  <div className="text-start" style={{ color:"#7E7E7E", fontSize:20, fontWeight:600 }}>03</div>
                </div>
                <div className='col-5 text-start'>
                  <div style={{ fontSize:12, fontWeight:600, color:"#7E7E7E" }}>Incorrect</div>
                  <div className="" style={{ color:"#DC1111", fontSize:20, fontWeight:600 }}>02</div>
                </div>
              </div>
              <NavLink to="/WaitingResult" className="text-decoration-none col-12 mt-3" >
                <div className='ms-auto py-3' style={{ backgroundColor:'#ED7A2B', borderRadius:5, color:"#fff", fontSize:16, fontWeight:600, alignItems:'center', justifyContent:"center", display:"flex", cursor:"pointer" }}>Submit</div>
              </NavLink>
              <div className='py-3 mt-3' onClick={() => navigate(-1)} style={{  backgroundColor:'#F2F2F2', borderRadius:5, color:"#2E2E2E", fontSize:16, fontWeight:600, alignItems:'center', justifyContent:"center", display:"flex", cursor:"pointer" }} >Back</div>
            </div>
            <div className='card mt-5 border-0 py-3' style={{ backgroundColor:"#F5F5F5" }} >
              <div className='row g-0 d-flex align-items-center justify-content-center'>
                <div className='col-5 text-end'>
                    <div style={{ fontSize:22, fontWeight:600, color:"#8A8C94" }} >06</div>
                    <div style={{ fontSize:16, fontWeight:600, color:"#8A8C94" }}>Mins</div>
                </div>
                <div className='col-2' style={{ fontSize:50, fontWeight:"bolder", color:"#8A8C94" }}>:</div>
                <div className='col-5 text-start'>
                 <div style={{ fontSize:22, fontWeight:600, color:"#8A8C94" }}>25</div>
                 <div style={{ fontSize:16, fontWeight:600, color:"#8A8C94" }}>Sec</div>
                </div>
              </div>
            </div>
            <p className='px-4 pt-3 up-assi-txt' style={{ color:"#7E7E7E", fontSize:16, fontWeight:600 }} >Answers will be automatically submitted in</p>
            <p className='pt-5 up-assi-txt' style={{ color:"#D92828", fontSize:16, fontWeight:600 }} >Note : Answers once submitted can not be changed or filled up</p>
          </div>
        </div>
      </div>
    </div>
  )
}
