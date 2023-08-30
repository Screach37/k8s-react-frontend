import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import slider1 from '../images/image1.png';
import slider2 from '../images/image2.png';
import slider3 from '../images/image3.png';
import { MdChevronRight, MdOutlineMenuBook } from 'react-icons/md';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { FaPlay } from 'react-icons/fa';
import { GiTrophyCup } from 'react-icons/gi';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { backendURL } from '../env';


export default function Home() {

  const [total_courses, settotal_courses] = useState(); 
  const [enrolled_courses, setenrolled_courses] = useState(); 
  const [class_detail, setclass_detail] = useState(); 
  const [Livestart_time, setLivestart_time] = useState(); 
  const [Livesend_time, setLivesend_time] = useState(); 
  const [Data0, setData0] = useState([]);  
  const [Data, setData] = useState([]);  
  const [Data1, setData1] = useState([]);  
  const [Data2, setData2] = useState([]);  

  const Navigate = useNavigate();
// this is home page
  const getHomeData = ()=>{
    var myHeaders = new Headers();
     myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${backendURL}/home`, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if(result.status === 1){
            settotal_courses(result.sending.total_courses);
            setenrolled_courses(result.sending.enrolled_courses);
            setclass_detail(result.sending.class_detail.class_topic);
            setLivestart_time(result.sending.class_detail.start_time);
            setLivesend_time(result.sending.class_detail.end_time);
            setData0([result.sending.prereccourse]);
            setData([result.sending.quiz_detail]);
            setData1([result.sending.exams]);
            setData2([result.sending.assignment_detail]);    
          }
        })
        .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    getHomeData();
      if(!localStorage.getItem("token")){

      }else{

      }
  },[])

  return (
    <>
      <div classNameName='container-fluid' style={{overflowX:"hidden"}}>
        <Header />
        {/* <div className='bar-option'> */}
          <div className='' style={{}}>
           <div classNameName='p-0' style={{ width:"100%", marginTop:"82px", marginBottom:"90px" }} >
             <div classNameName='' style={{  }}>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                    style={{ width:"100%" }}
                  />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                    style={{ width:"100%" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                    style={{ width:"100%" }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className='row p-2'>
             <div className='col-6'>
              <NavLink to='/Course' className="text-decoration-none text-dark">
                 <div className='card p-3 border-0 rounded-3 bg-white'>
                  <div className='' style={{ display:'flex', justifyContent:"space-between", alignItems:"center" }} >
                    <h2 className='m-0' style={{ color:"#ED7A2B" }} >{total_courses}</h2>
                    <MdChevronRight className='text-end' style={{ fontSize:20 }} />
                  </div>
                  <div className='text-start p-0' style={{ fontSize:10, fontFamily:"inter", fontWeight:600 }} >Total Courses</div>
                </div> 
              </NavLink> 
              </div>
              <div className='col-6'>
              <NavLink to='/EnrollCourse' className="text-decoration-none text-dark" >
               <div className='card p-3 border-0 rounded-3 bg-white'>
                  <div className='' style={{ display:'flex', justifyContent:"space-between", alignItems:"center" }} >
                    <h2 className='m-0' style={{ color:"#5895CD" }} >{enrolled_courses}</h2>
                    <MdChevronRight className='text-end' style={{ fontSize:20 }} />
                  </div>
                  <div className='text-start p-0' style={{ fontSize:10, fontFamily:"inter", fontWeight:600 }} >Enrolled Courses</div>
                </div> 
              </NavLink> 
              </div>
            </div>
            <div className='row px-2'>
             <div className='text-start' style={{ fontSize:16, color:"#1E1E1E", fontWeight:400, fontFamily:'inter' }} >Live Classes</div>
              <div className='col-12'>
                <div className='card p-3 border-0 rounded-3 bg-white'>
                 <div className='row d-flex justify-content-between align-items-center'>
                  <div className='col-10'>
                   <h5 className='text-start homelive-txt' style={{ fontSize:18, fontFamily:"inter", fontWeight:600 }} >{class_detail}</h5>
                    <div className='' style={{ width:'100%', display:'flex', justifyContent:"space-between", alignItems:'center' }} >
                     <div className='d-flex align-items-center' >
                        <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                        <div className='sub-assi-txt' style={{ fontSize:14, fontWeight:600, color:"#545454", fontFamily:'inter' }} >{Livestart_time?.split('T')[0]}</div>
                     </div>
                     <div className='d-flex align-items-center' >
                        <CiClock2 className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                        <div className='sub-assi-txt' style={{ fontSize:14, fontFamily:"inter", fontWeight:600, color:"#545454" }} >{Livestart_time?.split('T')[1].split('.')[0]} - {Livesend_time?.split('T')[1].split('.')[0]}</div>
                     </div>
                  </div>
                  </div>
                   <div className='col-2'>
                    <MdChevronRight className='text-end' style={{ fontSize:30 }} />
                   </div>
                  </div>
                </div>
              </div>  
            </div>
            <div className='row p-2'>
            <div className='text-start' style={{ fontSize:16, color:"#1E1E1E", fontWeight:400, fontFamily:'inter' }} >Pre Recorded Courses</div>
              <div className='col-12'>
              {
                Data0?.length>0?
                Data0?.map((res,key)=>{
                  return(
                    <>
                    <NavLink to="/DownloadedCourse" className="text-decoration-none text-dark" >
                    <div className='card p-1 border-0'>
                      <div className='row d-flex align-items-center'>
                         <div className='col-4'>
                           <img src={res?.banner} className='' style={{ width:"100%", borderRadius:10 }} /> 
                         </div>  
                         <div className='col-8 my-2'>
                           <div className='d-flex justify-content-evently align-items-center' >
                              <FaPlay />
                              <div className='ps-2 homelive-txt text-start' style={{ fontSize:18, color:"#1E1E1E", fontWeight:600, fontFamily:'inter' }}  >{res?.name}</div>
                           </div>
                           <div className='my-1' style={{ width:"100%", height:5, backgroundColor:"#F1F1F1" }} >
                            <div className='' style={{ width:"80%", height:5, backgroundColor:"#26D88D" }} ></div>
                           </div>
                           <div className='d-flex justify-content-evently align-items-center'>
                              <MdOutlineMenuBook className='homelive-txt' style={{ fontSize:22, color:"#858585" }} />
                              <div className='ps-2 homelive-txt' style={{ fontSize:16, fontWeight:400, color:"#858585", fontFamily:'inter' }}>Programming in C++</div>
                           </div>
                         </div>
                      </div>
                    </div>
                   </NavLink>
                    </>
                  )
                }):<><p style={{color:"red"}}>Data Not Found</p></>
              }
              
              </div>  
            </div>
            <div className='row px-2'>
             <div className='text-start' style={{ fontSize:16, color:"#1E1E1E", fontWeight:400, fontFamily:'inter' }} >Upcoming Quizzes</div> 
              <div className='col-12'>
                <div className='card p-3 border-0'>
                  {
                    Data?.length>0?
                    <>
                         {
                    Data?.map((res, key)=>{
                      return(
                        <>
                        <div className='text-start py-2 homelive-txt' style={{ fontSize:18, fontFamily:"inter", fontWeight:600 }}>{res?.title}</div>
                        <div className='' style={{ width:'100%', display:'flex', justifyContent:"start", alignItems:'center' }} >
                           <div className='d-flex align-items-center' >
                              <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:20, color:"#858585" }} />
                              <div className='sub-assi-txt ps-2' style={{ fontSize:14, fontWeight:600, color:"#858585", fontFamily:'inter' }} >{res?.start_time.split('T')[0]}</div>
                           </div>
                           <div className='d-flex align-items-center ps-4' >
                              <CiClock2 className='sub-assi-txt' style={{ fontSize:20, color:"#858585" }} />
                              <div className='sub-assi-txt ps-2' style={{ fontSize:14, fontWeight:600, color:"#858585", fontFamily:'inter' }} >{res?.start_time.split('T')[1].split('.')[0]} - {res?.end_time.split('T')[1].split('.')[0]}</div>
                           </div>
                        </div>
                        <div className='d-flex justify-content-evently align-items-center py-1' >
                           <MdOutlineMenuBook className='homelive-txt' style={{ fontSize:22, color:"#858585" }} />
                           <div className='ps-2 homelive-txt' style={{ fontSize:16, fontWeight:400, color:"#858585", fontFamily:'inter' }}>{res?.coursename}</div>
                        </div>
                        <div className='d-flex justify-content-evently align-items-center py-1' >
                           <GiTrophyCup className='homelive-txt' style={{ fontSize:22, color:"#ED7A2B" }} />
                           <div className='ps-2 homelive-txt' style={{ fontSize:18, fontWeight:400, color:"#ED7A2B" }}>{res?.passingpersentage}%</div>
                        </div>
                        <div className='mb-3 mt-2' style={{ width:"100%", height:8, backgroundColor:"#F1F1F1" }} >
                          <div className='' style={{ width:res?.passingpersentage + "%", height:8, backgroundColor:"#ED7A2B" }} ></div>
                        </div>
                        <NavLink to={`/Agree/${res?.id}`} className="text-decoration-none">
                          <button type='button' className='btn btn-outline' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5, fontFamily:'inter' }} >Participate Now</button>
                        </NavLink>
                      </> 
                      )
                    })
                  } </>:<><p style={{color:"red"}}>Data Not Found</p></>
                }
                 
                </div>
                
              </div> 
             </div>
            <div className='row p-2'>
             <div className='text-start' style={{ fontSize:16, color:"#1E1E1E", fontWeight:400, fontFamily:'inter' }} >Upcoming Exams</div> 
              <div className='col-12'>
                <div className='card p-3 border-0'>
                {

                 Data1?.length>0?<>
                 {
                  Data1?.map((res,key)=>{
                    return(
                      <>
                      <div className='text-start py-2 homelive-txt' style={{ fontSize:18, fontFamily:"inter", fontWeight:600 }}>{res?.exam_name}</div>
                  <div className='' style={{ width:'100%', display:'flex', justifyContent:"start", alignItems:'center' }} >
                     <div className='d-flex align-items-center'>
                        <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:22, color:"#858585" }} />
                        <div className='sub-assi-txt ps-2' style={{ fontSize:14, fontWeight:600, color:"#858585", fontFamily:"inter" }} >{res?.start_time.split('T')[0]}</div>
                     </div>
                     <div className='d-flex align-items-center ps-4'>
                        <CiClock2 className='sub-assi-txt' style={{ fontSize:22, color:"#858585" }} />
                        <div className='sub-assi-txt ps-2' style={{ fontSize:14, fontWeight:600, color:"#858585", fontFamily:"inter" }} >{res?.start_time.split('T')[1].split('.')[0]} - {res?.end_time.split('T')[1].split('.')[0]}</div>
                     </div>
                  </div>
                  <div className='d-flex justify-content-evently align-items-center py-1 mb-2' >
                     <MdOutlineMenuBook className='homelive-txt' style={{ fontSize:25, color:"#858585" }} />
                     <div className='ps-2 homelive-txt' style={{ fontSize:16, fontWeight:400, color:"#858585", fontFamily:'inter' }}>{res?.cou_name}</div>
                  </div>
                  <NavLink to={`/ExamDetail/${res?.id}`} className="text-decoration-none">
                    <button type='button' className='btn btn-outline' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5, fontFamily:"inter" }} >Know More</button>
                  </NavLink>
                      </>
                    )
                  })
                 }
                 </>:<><p style={{color:"red"}}>Data Not Found</p></>

                  
                }
                 
                </div>
              </div> 
             </div>
            <div className='row px-2'>
             <div className='text-start' style={{ fontSize:16, color:"#1E1E1E", fontWeight:400, fontFamily:'inter' }} >Assignments</div> 
              <div className='col-12'>
                <div className='card p-3 border-0'>
                

                  {
                    Data2?.length>0?<>
                    {
                      Data2?.map((res,key)=>{
                        return(
                          <>
                          <div className='text-start py-2 homelive-txt' style={{ fontSize:18, fontFamily:"inter", fontWeight:600 }}>{res?.assignment_name}</div>
                          <div className='' style={{ width:'100%', display:'flex', justifyContent:"start", alignItems:'center' }} >
                             <div className='d-flex align-items-center' >
                                <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:22, color:"#858585" }} />
                                <div className='sub-assi-txt ps-2' style={{ fontSize:14, fontWeight:600, color:"#858585", fontFamily:'inter' }} >{res?.sch_time?.split('T')[0]}</div>
                             </div>
                             <div className='d-flex align-items-center ps-4' >
                                <CiClock2 className='sub-assi-txt' style={{ fontSize:22, color:"#858585" }} />
                                <div className='sub-assi-txt ps-2' style={{ fontSize:14, fontWeight:600, color:"#858585", fontFamily:"inter" }} >{res?.sch_time?.split('T')[1].split('.')[0]} - {res?.due_time?.split('T')[1].split('.')[0]}</div>
                             </div>
                          </div>
                          <div className='d-flex justify-content-evently align-items-center py-1 mb-2' >
                             <MdOutlineMenuBook className='homelive-txt' style={{ fontSize:22, color:"#858585" }} />
                             <div className='ps-2 homelive-txt' style={{ fontSize:16, fontWeight:400, color:"#858585", fontFamily:"inter" }}>{res?.cou_name}</div>
                          </div>
                          <NavLink to={`/SubmitAssignments/${res?.id}`} className="text-decoration-none" >
                            <button type='button' className='btn btn-outline' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5, fontFamily:'inter' }} >Submit Assignments</button>
                          </NavLink>
                       
                          </>
                        )
                      })
                    }
                    </>:<><p style={{color:"red"}}>Data Not Found</p></>
                  }

                 
                
                </div>
              </div> 
             </div>
           </div>
          </div>
         {/* </div>  */}
        <Footer />
      </div>
    </>
  )
}