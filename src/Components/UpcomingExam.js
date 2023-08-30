import React, { useEffect, useState } from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { MdChevronRight } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { backendURL } from '../env';

export default function UpcomingExam() {

    const [examdata, setExamdata] = useState([]);

    const getUpcomingExamdata =()=>{
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch(`${backendURL}/get/upcom/exam`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status =="1"){
              console.log(result.exam);
              setExamdata(result.exam);
            }
          })
          .catch(error => console.log('error', error));
    }

    useEffect(()=>{
      getUpcomingExamdata();
      if(!localStorage.getItem("token")){

      }else{

      }
    },[])

  return (
    <div>
       <div className='container'>
         <div className='row'>
            <div className='col-12 mt-3'>
              {
                examdata == ""?(<><div className='sub-assi-txt pt-3' style={{ fontSize:22, fontWeight:600, color:"#545454" }}>No data Found...</div></>):
                (
                  <>
                  {
                    examdata?.map((item,index)=>{
                        return(
                           <>
                            <div key={index} className='card p-3 border-0 mb-3 '>
                             <div className='row d-flex justify-content-between align-items-center'>
                               <div className='col-10'>
                                 <h5 className='text-start homelive-txt' >{item.exam_name}</h5>
                                  <div className='' style={{ width:'100%', display:'flex', justifyContent:"space-between", alignItems:'center' }} >
                                   <div className='d-flex align-items-center' >
                                      <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                                      <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >{item.start_time?.split('T')[0]}</div>
                                   </div>
                                   <div className='d-flex align-items-center' >
                                      <CiClock2 className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                                      <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >{item.start_time?.split('T')[1].split('.')[0]} - {item.end_time?.split('T')[1].split('.')[0]}</div>
                                   </div>
                                </div>
                                </div>
                                <div className='col-2'>
                                  <MdChevronRight className='text-end' style={{ fontSize:30 }} />
                                </div>
                               </div> 
                              <div className='sub-assi-txt pt-3 text-start' style={{ fontSize:14, fontWeight:400, color:"#545454" }} >Course : {item.cou_name}</div>
                              <NavLink to={`/ExamDetail/${item.id}`} className="text-decoration-none mt-3">
                                <button type='button' className='btn btn-outline' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5 }} >View Detail</button>
                              </NavLink>
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
       </div>
    </div>
  )
}
