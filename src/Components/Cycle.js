import React, { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import Bicycle from '../images/cycle.json';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Cycle() {

  const Navigate = useNavigate();

  const { id } = useParams();
  console.log("cycle",id);

  const [duration, setDuration] = useState(5);

  useEffect(() => {
    if (duration <= 0) {
      Navigate(`/Question/${id}`);
      // console.log("Timer has ended");
      return;
    }

    const timer = setInterval(() => {
      setDuration(prevDuration => prevDuration - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [duration]);

  const formatDuration = () => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-8 m-auto'>
            {/* <p className='pt-5' style={{ color:"#7E7E7E", fontSize:22, fontWeight:600, fontFamily:"inter" }} >Welcome to</p>
            <p className='' style={{ color:"#2E2E2E", fontSize:20, fontWeight:600, fontFamily:"inter" }} >SBI-PO Current Affairs</p>
            <div className='card p-3 border-0'>
              <div style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:'inter' }}>Participants Joined</div>
              <div style={{ color:"#2E2E2E", fontSize:18, fontWeight:600, fontFamily:'inter' }}><span style={{ color:"#ED7A2B", fontSize:20, fontWeight:600 }}>2545</span> / 5698</div>
            </div> */}
            <p className='px-4 pt-5 mt-5 agre-txt-fold' style={{ color:"#DC1111", fontSize:16, fontWeight:500, fontFamily:'inter' }} >Do not Close or Refresh this window</p>
            <Lottie className='mt-5' animationData={Bicycle} style={{ width:"100%",}}/>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-10 m-auto'>
          {/* <NavLink to="/" className="text-decoration-none" > */}
            <div className='mt-5 mb-5' style={{ width:'100%', height:50, backgroundColor:'#ED7A2B', borderRadius:10, display:"flex", justifyContent:"center", alignItems:"center", cursor:"pointer", color:'#fff', fontSize:20, fontWeight:500, fontFamily:"inter" }} >Exam Starts in <span className='ps-2' style={{color:'#FAFF10', fontSize:18, fontWeight:500, fontFamily:"inter" }} >{formatDuration()}</span></div>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  )
}
