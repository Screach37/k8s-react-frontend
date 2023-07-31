import React, { useEffect, useState } from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdOutlineQuiz } from 'react-icons/md';
import { MdOutlineAssignment } from 'react-icons/md';
import { MdOutlineMenuBook } from 'react-icons/md';
import { GiTrophyCup } from 'react-icons/gi';
import { NavLink, useLocation } from 'react-router-dom';
import { API_URL } from '../env';

export default function QuizUpcoming() {

    const [quizdata, setQuizdata] = useState([]);

    const Location = useLocation();

    const getQuizz =()=>{
      var myHeaders = new Headers();
       myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch(`${API_URL}/get/upcoming/quiz`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log(result);
              setQuizdata(result.quiz);
            }
          })
          .catch(error => console.log('error', error));
    }

    useEffect(()=>{
      getQuizz();
        if(!localStorage.getItem("token")){

        }else{

        }
    },[])

 return (
    <div>
      <div className='row px-3'>
        <div className='col-12' style={{marginBottom:"70px"}}>
          {
            quizdata == ""?(<><div className='sub-assi-txt pt-3' style={{ fontSize:22, fontWeight:600, color:"#545454" }}>No data Found...</div></>):(
              <>
               {
            quizdata?.map((item,index)=>{
                return (
                    <>
                      <div key={index} className='row px-1'> 
                       <div className='col-12'>
                         <div className='card p-3 border-0 mb-3'>
                          <div className='text-start py-2 assi-declr-txt' style={{ fontSize:20, fontWeight:600, fontFamily:"inter" }}>{item.title}</div>
                           <div className='' style={{ width:'100%', display:'flex', justifyContent:"start", alignItems:'center' }} >
                              <div className='d-flex align-items-center' >
                                 <AiTwotoneCalendar style={{ fontSize:20, color:"#858585" }} />
                                 <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:500, color:"#858585", fontFamily:'inter' }} >{item.start_time?.split('T')[0]}</div>
                              </div>
                              <div className='d-flex align-items-center ps-4' >
                                 <CiClock2 style={{ fontSize:20, color:"#858585" }} />
                                 <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:500, color:"#858585", fontFamily:'inter' }} >{item.start_time?.split('T')[1].split('.')[0]} - {item.end_time?.split('T')[1].split('.')[0]}</div>
                              </div>
                           </div>
                           <div className='d-flex justify-content-evently align-items-center py-1' >
                              <MdOutlineMenuBook style={{ fontSize:20, color:"#858585" }} />
                              <div className='ps-2 assi-declr-txt' style={{ fontSize:16, fontWeight:500, color:"#858585", fontFamily:"inter" }}>{item.subjectname}</div>
                           </div>
                           <div className='d-flex justify-content-evently align-items-center py-1' >
                              <GiTrophyCup style={{ fontSize:22, color:"#ED7A2B" }} />
                              <div className='ps-2' style={{ fontSize:18, fontWeight:400, color:"#ED7A2B" }}>{item.passingpersentage} %</div>
                           </div>
                           <div className='mb-3 mt-2' style={{ width:"100%", height:8, backgroundColor:"#F1F1F1" }} >
                             <div className='' style={{ width: item.passingpersentage +"%", height:8, backgroundColor:"#ED7A2B" }} ></div>
                           </div>
                           <NavLink to={`/Agree/${item.id}`} className="text-decoration-none"  >
                            <button type='button' className='btn btn-outline py-2' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5, fontFamily:"inter" }} >Participate Now</button>
                           </NavLink>
                         </div>
                       </div> 
                      </div>
                    </>
                )
            })
          }
              </>
            )
          }
         
        </div>  
      </div>
      <div className='row px-5 py-3 fixed-bottom bottom-tab' style={{ backgroundColor:'#ffffff80' }} >
       <div className='p-0' style={{  width:'100%', height:70, display:"flex", justifyContent:"space-between", backgroundColor:"#fff", borderRadius:10 }} >
        <div className='mx-4' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex", color:'#ED7A2B', borderTop:Location.pathname=="/CourseHistory"?"2px solid #ED7A2B":"", }}>
          <NavLink to='/CourseHistory' className="text-decoration-none text-dark" >
           <div style={{  }}>
             <SiGoogleclassroom style={{ fontSize:25, color:Location.pathname=="/CourseHistory"?"#ED7A2B":"#B4B4B4" }} />
             <div style={{ color:Location.pathname=="/CourseHistory"?"#ED7A2B":"#B4B4B4", fontSize:14 }} >Classes</div>
           </div>
         </NavLink>
         </div>
        <div className='mx-4' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex", borderTop:Location.pathname=="/Quizzes"?"2px solid #ED7A2B":"", color:'#ED7A2B' }}>
          <NavLink to='/Quizzes' className="text-decoration-none text-dark" >
           <div style={{  }}>
             <MdOutlineQuiz style={{ fontSize:25, color:Location.pathname=="/Quizzes"?"#ED7A2B":"#B4B4B4" }} />
             <div style={{ color:Location.pathname=="/Quizzes"?"#ED7A2B":"#B4B4B4", fontSize:14  }} >Quizzes</div>
           </div>
         </NavLink>
         </div>
        <div className='mx-4' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex", color:'#ED7A2B', borderTop:Location.pathname=="/Assignment"?"2px solid #ED7A2B":"", }}>
          <NavLink to='/Assignment' className="text-decoration-none text-dark" >
           <div style={{  }}>
             <MdOutlineAssignment style={{ fontSize:25, color:Location.pathname=="/Assignment"?"#ED7A2B":"#B4B4B4" }} />
             <div style={{ color:Location.pathname=="/Assignment"?"#ED7A2B":"#B4B4B4", fontSize:14  }} >Assignments</div>
           </div>
         </NavLink>
         </div>
        </div>
      </div>
    </div>
  )
}
