import React, { useEffect, useState } from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../env';

export default function DetailExam() {

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    const [exam_name, setexam_name] = useState();
    const [cou_name, setcou_name] = useState();
    const [sub_name, setsub_name] = useState();
    const [start_time, setstart_time] = useState();
    const [end_time, setend_time] = useState();
    const [tot_marks, settot_marks] = useState();
    const [marks, setmarks] = useState();
    const [note, setnote] = useState();
    const [status, setstatus] = useState();

      const detailExam =()=> {
        var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

          var raw = JSON.stringify({
            "exam_id": id
          });

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

          fetch(`${API_URL}/view/completed/exam`, requestOptions)
            .then(response => response.json())
            .then(result => {
              if(result.status == "1"){
                console.log(result);
                setexam_name(result.exam.exam_name);
                setcou_name(result.exam.cou_name);
                setsub_name(result.exam.sub_name);
                setstart_time(result.exam.start_time);
                setend_time(result.exam.end_time);
                settot_marks(result.exam.tot_marks);
                setmarks(result.exam.marks);
                setnote(result.exam.note);
                setstatus(result.exam.status);
              }
            })
            .catch(error => console.log('error', error));
      }

    useEffect(()=>{
      detailExam();
        if(!localStorage.getItem("token")){

        }else{

        }
    },[])

  return (
    <div>
      <div className='container-fluid p-0' style={{overflowX:"hidden"}}>
      <div classNameName='p-0' style={{ width:"100%", marginTop:"40px", marginBottom:"90px" }} >
        <div className='row fixed-top'>
          <div className='col-md-12'>
            <div className='card py-2 px-3 rounded-0 border-0'>
             <div className='row py-3'>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:20 }} /></button>
                  <span className='assi-nav-txt text-start' style={{ fontWeight:600, fontSize:20, paddingLeft:10  }}>Exam Details</span>
                  {/* <div className='assi-nav-txt px-3 p-1' style={{ fontSize:14, fontWeight:400, color:"#0CBC8B", backgroundColor:"#E1FFEF", borderRadius:5 }}>Result : Pass</div> */}
                  {
                   status === "fail" ? (<div className='sub-assi-txt text-center col-4' style={{ fontSize:14, fontWeight:400, color:"#FF0E0E", backgroundColor:"#FFE1E1", borderRadius:5 }} >Result : {status}</div>)
                   : status === "pass" ? (<div className='sub-assi-txt text-center col-4' style={{ fontSize:14, fontWeight:400, color:"#0CBC8B", backgroundColor:"#E1FFEF", borderRadius:5 }} >Result : {status}</div>):
                   <div className='sub-assi-txt text-center col-5' style={{ fontSize:13, fontWeight:400, color:"#686868", backgroundColor:"#E4E4E4", borderRadius:5 }} >Result : {status}</div>
                  }
                </div>
              </div>
            </div> 
          </div>
        </div>
        </div>
       <div className='bar-option pb-5'>
        <div className='row p-4'>
         <div className='col-12'>
          <div className='text-start' style={{ fontSize:18, color:"#545454", fontWeight:400 }} >Name of Exam</div>
          <div className='text-start pt-2 assi-nav-txt' style={{ fontSize:22, fontWeight:600, color:'#1E1E1E' }} >{exam_name}</div>
           <div className='pt-4' style={{ width:'100%', display:'flex', justifyContent:"start", alignItems:'center' }} >
             <div className='d-flex align-items-center' >
                <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >{start_time?.split('T')[0]}</div>
             </div>
             <div className='d-flex align-items-center ps-4' >
                <CiClock2 className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                <div className='sub-assi-txt' style={{ fontSize:16, fontWeight:600, color:"#545454" }} >{start_time?.split('T')[1].split('.')[0]} - {end_time?.split('T')[1].split('.')[0]}</div>
             </div>
          </div>
          <div className='sub-assi-txt pt-3 text-start' style={{ fontSize:18, fontWeight:500, color:"#545454" }} >Course : {cou_name}</div>
         </div> 
        </div>
        <div className='row px-4 mb-5' >
        <div className='text-start' style={{ fontSize:18, color:"#545454", fontWeight:400 }} >Subject : {sub_name}</div>
         {/* <ul class="list-group text-start bg-transparent">
           {
             subject.map((item,index)=>{
               return( 
                 <li key={index} class="list-group-item border-0 bg-transparent d-flex align-items-center assi-nav-txt" style={{ fontSize:20, fontWeight:600 }} >{(index+1)}. {item.name}</li>
               )
             })
           }
         </ul> */}
       </div>
       <div className='row px-4'>
        <div className='col-12'>
          <div className='card px-3'>
           <div className='row mt-3'>
             <div className='col-5 text-start'>
               <div className='sub-name-txt' style={{ fontSize:16, fontWeight:400, color:"#7E7E7E" }}>Total Marks</div>
               <div className="text-start" style={{ color:"#1E1E1E", fontSize:20, fontWeight:600 }}>{tot_marks}</div>
             </div>
             <div className='col-4 text-start'>
               <div className='sub-name-txt' style={{ fontSize:16, fontWeight:400, color:"#7E7E7E" }}>My Result</div>
               <div className="" style={{ color:"#26C497", fontSize:20, fontWeight:600 }}>{marks}</div>
             </div>
            </div>
            <div className="text-start" style={{ color:"#1E1E1E", fontSize:20, fontWeight:600 }}>Instructor’s Note</div>
            <div className="text-start" style={{ color:"#7E7E7E", fontSize:14, fontWeight:400 }}>{note}</div>
          </div> 
        </div>
       </div>
      </div>
     </div> 
    </div>
  )
}


