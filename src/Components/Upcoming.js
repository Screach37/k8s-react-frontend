import React, { useEffect, useState } from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdChevronRight } from 'react-icons/md';
import { MdOutlineQuiz } from 'react-icons/md';
import { MdOutlineAssignment } from 'react-icons/md';
import { NavLink, useLocation } from 'react-router-dom';
import { API_URL } from '../env';

export default function Upcoming() {

    const Location = useLocation();

    const [upcoming, setUpcoming] = useState([]);

    const getUpcoming = ()=>{
      var myHeaders = new Headers();
       myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch(`${API_URL}/get/upcoming/classes`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status =="1"){
              console.log(result);
              setUpcoming(result.clases);
            }
          })
          .catch(error => console.log('error', error));
    }

    useEffect(()=>{
      getUpcoming();
        if(!localStorage.getItem("token")){

        }else{

        }
    },[])

  return (
    <div>
      <div className='row px-3'>
       <div className='col-12'>
        {
            upcoming == ""?(<><div className='sub-assi-txt pt-3' style={{ fontSize:22, fontWeight:600, color:"#545454" }}>No data Found...</div></>):
            (<>
          {
            upcoming.map((item,index)=>{
                return(
                  <>
                   <NavLink to={`/JoinLiveClass/${item.id}`} className="text-decoration-none" style={{color:"#545454"}} >
                    <div key={index} className='card p-3 border-0 rounded-3 bg-white mb-3'>
                     <div className='row d-flex justify-content-between align-items-center'>
                      <div className='col-10'>
                       <h5 className='text-start assi-declr-txt' style={{ fontFamily:"inter", fontSize:18 }} >{item.class_topic}</h5>
                        <div className='' style={{ width:'100%', display:'flex', justifyContent:"space-between", alignItems:'center' }} >
                         <div className='d-flex align-items-center' >
                            <AiTwotoneCalendar style={{ fontSize:20, color:"#545454" }} />
                            <div className='sub-assi-txt' style={{ fontSize:14, fontWeight:500, color:"#545454", fontFamily:'inter' }} >{item.start_time.split('T')[0]}</div>
                         </div>
                         <div className='d-flex align-items-center' >
                            <CiClock2 style={{ fontSize:20, color:"#545454" }} />
                            <div className='sub-assi-txt' style={{ fontSize:14, fontWeight:500, color:"#545454", fontFamily:"inter" }} >{item.start_time.split('T')[1].split('.')[0]} - {item.end_time.split('T')[1].split('.')[0]}</div>
                         </div>
                       </div>
                      </div>
                      <div className='col-2 text-end'>
                       <MdChevronRight className='' style={{ fontSize:30 }} />
                      </div>
                     </div>
                    </div>
                   </NavLink>
                  </>
                )
            })
          }
            </>)
          }
        </div>  
      </div>
      <div className='row px-5 py-3 fixed-bottom bottom-tab' style={{ backgroundColor:'#ffffff80' }} >
       <div className='p-0' style={{  width:'100%', height:70, display:"flex", justifyContent:"space-between", backgroundColor:"#fff", borderRadius:10 }} >
        <div className='mx-4' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex", borderTop:Location.pathname=="/CourseHistory"?"2px solid #ED7A2B":"", color:'#ED7A2B' }}>
          <NavLink to="/CourseHistory" className="text-decoration-none text-dark">
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
             <div style={{ color:"#B4B4B4", fontSize:14  }} >Quizzes</div>
           </div>
         </NavLink>
         </div>
        <div className='mx-4' style={{ width:"100%", backgroundColor:'#fff', justifyContent:"center", alignItems:'center', display:"flex", borderTop:Location.pathname=="/Assignment"?"2px solid #ED7A2B":"", color:'#ED7A2B' }}>
          <NavLink to='/Assignment' className="text-decoration-none text-dark" >
           <div style={{  }}>
             <MdOutlineAssignment style={{ fontSize:25, color:Location.pathname=="/Assignment"?"#ED7A2B":"#B4B4B4" }} />
             <div style={{ color:Location.pathname=="/Assignment"?"#ED7A2B":"#B4B4B4" , fontSize:14  }} >Assignments</div>
           </div>
         </NavLink>
         </div>
        </div>
      </div>
    </div>
  )
}
