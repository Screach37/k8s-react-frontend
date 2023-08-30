import React, { useEffect, useState } from 'react';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { MdChevronRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { backendURL } from '../env';

export default function ExamHIstory() {

    const [exam, setExam] = useState([]);

    const getExamHistory =()=>{
      var myHeaders = new Headers();
       myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch(`${backendURL}/get/completed/exam`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log(result);
              setExam(result.exam);
            }
          })
          .catch(error => console.log('error', error));
    }

    useEffect(()=>{
      getExamHistory();
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
                exam.map((item,index)=>{
                    return(
                       <>
                        <div key={index} className='card p-3 border-0 mb-3 '>
                         <div className='row d-flex justify-content-between align-items-center'>
                           <div className='col-10'>
                             <h5 className='text-start homelive-txt' >{item.exam_name}</h5>
                              <div className='' style={{ width:'100%', display:'flex', justifyContent:"space-between", alignItems:'center' }} >
                               <div className='d-flex align-items-center' >
                                  <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                                  <div className='sub-assi-txt px-1' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >{item.start_time.split('T')[0]}</div>
                               </div>
                               <div className='d-flex align-items-center' >
                                  <CiClock2 className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                                  <div className='sub-assi-txt px-1' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >{item.start_time.split('T')[1].split('.')[0]} - {item.end_time.split('T')[1].split('.')[0]}</div>
                               </div>
                            </div>
                            </div>
                            <div className='col-2'>
                             <MdChevronRight className='text-end' style={{ fontSize:30 }} />
                            </div>
                           </div> 
                          <div className='sub-assi-txt pt-3 text-start' style={{ fontSize:14, fontWeight:400, color:"#545454" }} >Course : {item.cou_name}</div>
                          <div className='row mt-2 px-2'>
                            {
                              item.is_res_dec == 0?(<>
                                <div className='ps-2' style={{ fontSize:18, fontWeight:400, color:"#858585", fontFamily:'inter' }}>UnDeclared </div>
                              </>) : (<>
                                {
                                  item.status === "fail" ? (<div className='sub-assi-txt text-center col-4' style={{ fontSize:14, fontWeight:400, color:"#FF0E0E", backgroundColor:"#FFE1E1", borderRadius:5 }} >Result : {item.status}</div>)
                                  : item.status === "pass" ? (<div className='sub-assi-txt text-center col-4' style={{ fontSize:14, fontWeight:400, color:"#0CBC8B", backgroundColor:"#E1FFEF", borderRadius:5 }} >Result : {item.status}</div>):
                                  <div className='sub-assi-txt text-center col-5' style={{ fontSize:13, fontWeight:400, color:"#686868", backgroundColor:"#E4E4E4", borderRadius:5 }} >Result : {item.status}</div>
                                 }
                              </>)
                            }
                          
                          </div>
                          {
                            item.is_res_dec == 0?(<NavLink to={`/ExamDetail/${item.id}`} className="text-decoration-none mt-3">
                            <button type='button' className='btn btn-outline' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5 }} >View Detail</button>
                          </NavLink>):(
                              <NavLink to={`/DetailExam/${item.id}`} className="text-decoration-none mt-3">
                                <button type='button' className='btn btn-outline' style={{ width:"100%", backgroundColor:'#ED7A2B', color:"#fff", borderRadius:5 }} >View Detail</button>
                              </NavLink>
                            )
                          }
                        </div>
                       </>
                    )
                })
              }
            </div>
         </div>
       </div>
    </div>
  )
}
