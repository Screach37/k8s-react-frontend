import React, { useState, useEffect} from 'react';
import { ImArrowLeft2 } from "react-icons/im";
import { NavLink, useNavigate } from 'react-router-dom';
import Rank2 from '../images/rank2img.png';
import Rank1 from "../images/rank1img.png";
import Rank3 from "../images/rank3img.png";
import MyImg from '../images/myimage.jpg';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TiUser } from 'react-icons/ti';

export default function Result() {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [winner, setWinner] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Leaderboard = [
      {
        name : "Yogesh Jangid",
        mark : 9,
        total : 10,
        time : "05:35",
        status : 1,
      },
      {
        name : "Chetan Jangid",
        mark : 9,
        total : 10,
        time : "05:35",
        status : 0,
      },
    ]

    useEffect(()=>{
      setWinner(Leaderboard);
    })

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="bottom" style={{ height:"70%", borderTopLeftRadius:20, borderTopRightRadius:20 }} >
        {/* <Offcanvas.Header >
          <Offcanvas.Title className='text-center'>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header> */}
        <div className='row'>
          <div className='col-2 m-auto my-4' style={{ height:8, backgroundColor:'#D9D9D9', borderRadius:10 }} ></div>
        </div>
        <div className='text-center py-2' style={{ fontFamily:"inter", fontSize:20, fontWeight:600 }} >Winner's Leaderboard</div>
        <Offcanvas.Body style={{  }}>
            {
              winner.map((item,index)=>{
                return(
                  <>
                   <div className='row mb-3' key={index} >
                     <div className='col-12'>
                       <div className='card p-3' style={{ border:'1px solid #F2F2F2', borderRadius:10 }} >
                         <div className='row d-flex align-items-center'>
                           <div className='d-flex col-1 sub-name-txt' style={{ fontFamily:"inter", fontSize:18, fontWeight:600 }} >{(index+1)}</div>
                            <div className='col-2'>
                              <div className='p-0' style={{ width:55, height:55, backgroundColor:'#F2F2F2', borderRadius:100, display:"flex", justifyContent:"center", alignItems:"center" }} >
                                {
                                  item.status == 1 ? (<img src={MyImg} className='' style={{ width:'100%', borderRadius:100 }} />) : 
                                  (<TiUser style={{ fontSize:40, color:"#EA24FB" }} />)
                                }
                              </div>
                            </div>
                           <div className='col-8 leadBoard'>
                            <div className='assi-declr-txt' style={{ fontFamily:"inter", fontSize:18, fontWeight:600 }}>{item.name}</div>
                             <div className='row'>
                               <div className='col-7 me-auto d-flex justify-content-between align-items-center'>
                                 <div className='sub-name-txt' style={{ fontFamily:"inter", fontSize:14, fontWeight:500, color:"#129C73" }}>{item.mark}/{item.total}</div>
                                 <div className="sub-name-txt" style={{ fontFamily:"inter", fontSize:14, fontWeight:500, color:"#367CFF" }}>{item.time}</div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                  </>
                )
              })
            }
        </Offcanvas.Body>
       </Offcanvas>
        <div className='container-fluid'>
         <div classNameName='p-0' style={{ width:"100%", marginTop:"80px" }} >
             <div className='row'>
               <div className='col-md-12 P-0'>
                 <div className='row fixed-top' style={{ backgroundColor:"#F0F5FE" }}>
                    <div className='row py-2 mx-2 d-flex align-items-center'>
                        <button type='button' onClick={() => navigate(-1)} className='btn border-0 col-2' style={{ width:55, height:55, background: "rgba(46, 46, 46, 0.1)", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:50 }} ><ImArrowLeft2 style={{ fontSize:22 }} /></button>
                        <span className='text-center col-8' style={{ fontWeight:600, fontSize:20, paddingLeft:15, fontFamily:'inter'  }}>My Result</span>
                     </div>
                  </div> 
               </div>
            </div> 
            <div className='row'>
               <div className='col-12'>
                 <div className='card p-0 bg-transparent' style={{ border:"1px solid #fff" }} >
                    <div className='row p-4'>
                        <div className='col-7 text-start'>
                            <div className='assi-declr-txt' style={{ fontSize:16, fontWeight:500, color:"#2E2E2E", fontFamily:"inter" }} >Rank</div>
                            <div className='' style={{ fontSize:20, fontWeight:600, color:"#2E2E2E", fontFamily:"inter" }}><span style={{ color:"#ED7A2B", fontSize:22, fontWeight:600 }} >165</span> / 2056</div>
                        </div>
                        <div className='col-5 text-start'>
                            <div className='assi-declr-txt' style={{ fontSize:16, fontWeight:500, color:"#2E2E2E", fontFamily:'inter' }} >Score</div>
                            <div className='' style={{ fontSize:20, fontWeight:600, color:"#2E2E2E", fontFamily:'inter' }}><span style={{ color:"#ED7A2B", fontSize:22, fontWeight:600 }} >06</span> / 10</div>
                        </div>
                    </div>
                    <div className='text-start px-4' style={{ fontSize:18, fontWeight:600, color:"#2E2E2E", fontFamily:'inter' }}>Time <span style={{ color:"#ED7A2B", fontSize:18, fontWeight:600, fontFamily:'inter' }}>06 min : 12 Sec</span></div>
                    <NavLink to="/ScoreCard" className="text-decoration-none" >
                      <div className='mt-3 py-3' style={{ width:"100%", backgroundColor:"#fff", borderBottomLeftRadius:5, borderBottomRightRadius:5, display:"flex", justifyContent:"center", alignItems:"center", fontSize:16, fontWeight:500, color:"#2E2E2E", fontFamily:'inter' }} >View Scorecard </div>
                    </NavLink>
                 </div>  
               </div> 
            </div>
          <div className='mt-5'>
           <div className='row mt-5 animate__animated animate__fadeInUp animate__delay-2s'>
              <div className='col-4 pt-4'>
                <div className=''>
                 <img src={MyImg} className='' style={{ width:"70%", height:"70%", borderRadius:100, border:"3px solid #fff" }}/>
                 <div className='sub-name-txt' style={{ fontSize:12, fontWeight:500, fontFamily:'inter' }} >Yogesh jangid</div>
                 <div className='py-1' style={{ backgroundColor:"#95A1B615", borderRadius:8, display:'flex', alignItems:'center', justifyContent :'center' }} >
                   <div style={{ fontSize:12, fontWeight:500, fontFamily:'inter' }} >08/10</div>
                 </div>
                 <img src={Rank2} className='' style={{ width:"100%", }} />
                </div>
              </div>
              <div className='col-4'>
               <div>
                <img src={MyImg} className='' style={{ width:"70%", height:"70%", borderRadius:100, border:"3px solid #fff" }}/>
                 <div className='sub-name-txt' style={{ fontSize:12, fontWeight:500, fontFamily:'inter' }} >Yogesh jangid</div>
                 <div className='py-1' style={{ backgroundColor:"#95A1B615", borderRadius:8, display:'flex', alignItems:'center', justifyContent :'center' }} >
                   <div style={{ fontSize:12, fontWeight:500, fontFamily:'inter' }} >08/10</div>
                 </div>
                 <img src={Rank1} className='' style={{ width:"100%", }} />
                </div>
              </div>
              <div className='col-4 pt-5'>
               <div>
                <img src={MyImg} className='' style={{ width:"70%", height:"70%", borderRadius:100, border:"3px solid #fff" }}/>
                 <div className='sub-name-txt' style={{ fontSize:12, fontWeight:500, fontFamily:'inter' }} >Yogesh jangid</div>
                 <div className='py-1' style={{ backgroundColor:"#95A1B615", borderRadius:8, display:'flex', alignItems:'center', justifyContent :'center' }} >
                   <div style={{ fontSize:12, fontWeight:500, fontFamily:'inter' }} >08/10</div>
                 </div>
                 <img src={Rank3} className='' style={{ width:"100%", }} />
                </div>
              </div>
            </div>
           </div>
          </div>  
        </div>
        <div className='mt-3 py-5 fixed-bottom'  onClick={handleShow} style={{ width:"100%", backgroundColor:"#fff",  display:"flex", justifyContent:"center", alignItems:"center", fontSize:18, fontWeight:500, color:"#2E2E2E", fontFamily:'inter' }} >View Leaderboard </div>
    </div>
  )
}
