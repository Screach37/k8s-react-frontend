import React, { useEffect, useState } from 'react';
import { VideoPlayer } from './SvgIcon';
import Book from '../images/MedicalBook.png';
import { ImArrowLeft2 } from 'react-icons/im';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../env';

export default function JoinLiveClass() {

    const navigate = useNavigate();

    const [class_topic, setclass_topic] = useState();
    const [instructor_name, setinstructor_name] = useState();
    const [attachments, setattachments] = useState();
    const [start_time, setstart_time] = useState();
    const [end_time, setend_time] = useState();
    const [name, setname] = useState("");

    useEffect(() => {
      setname(localStorage.getItem("CourseName"))
    }, [])

    const { id } = useParams();
    console.log(id);

    const courseDetail =()=>{
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
         myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var raw = JSON.stringify({
          "class_id": id
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(`${API_URL}/getclass/byid`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log(result);
              setclass_topic(result.sen.class_topic);
              setinstructor_name(result.sen.instructor_name);
              setattachments(result.sen.attachments);
              setstart_time(result.sen.start_time);
              setend_time(result.sen.end_time);
            }
          })
          .catch(error => console.log('error', error));
    }

    useEffect(()=>{
      courseDetail();
        if(!localStorage.getItem("token")){

        }else{

        }
    },[])

  return (
    <div>
      <div className='container-fluid p-0' style={{overflowX:"hidden"}}>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card py-2 rounded-0 border-0'>
             <div className='row py-3'>
                <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                  <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:20 }} /></button>
                  <span className='text-start assi-nav-txt' style={{ fontWeight:600, fontSize:20, paddingLeft:10  }}>{name}</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div className='row m-3'>
          <div className='col-12 text-start assi-nav-txt' style={{ fontSize:24, fontWeight:600, }} >Live Classes</div>
          <p className='col-12 text-start pt-2 assi-nav-txt' style={{ fontSize:22, fontWeight:600, }} >{class_topic}</p>
           <div className='row'>
             <div className='col-11' style={{ display:'flex', justifyContent:"space-between", alignItems:'center' }}>
              <div className='d-flex align-items-center' >
                 <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                 <div className='sub-assi-txt' style={{ fontSize:14, fontWeight:600, color:"#545454" }} >{start_time?.split('T')[0]}</div>
              </div>
              <div className='d-flex align-items-center' >
                 <CiClock2 className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                 <div className='sub-assi-txt' style={{ fontSize:14, fontWeight:600, color:"#545454" }} >{start_time?.split('T')[1].split('.')[0]} - {end_time?.split('T')[1].split('.')[0]}</div>
              </div>
             </div>
           </div>
          <p className='col-12 text-start py-2' style={{ fontSize:16, fontWeight:400, color:'#9098A8' }} >Instructor</p>
          <div className='row'>
            <div className='col-8' style={{ border:'1px solid #9098A8', borderRadius:40 }} >
               <div className='row p-2 d-flex align-items-center'>
                 {/* <div className='col-2 p-0' style={{ borderRadius:50 }} >
                  <img src={attachments} className='' style={{ width:"100%", height:"100%", borderRadius:50 }}/>
                 </div> */}
                 <div className='col-12 ms-auto sub-assi-txt' style={{ display:"flex", alignItems:"center", color:"#545454", fontSize:16 }}>
                    {instructor_name}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-4 mx-3 p-0'>
       <div className='text-start p-0 assi-nav-txt' style={{ fontSize:24, fontWeight:400, color:"#545454" }} >Study Material</div>
        <div className='card border-0 py-3' style={{}} >
          <div className='row d-flex align-items-center'>
           <div className='col-6'>
            <img src={Book} className='' style={{ width:"100%", height:"100%" }}/>
           </div>
           <div className='col-6 text-start'>
              <div className='assi-nav-txt' style={{ fontSize:22, fontWeight:600, color:'#545454' }} >View Study Material</div> 
              <div className='p-2' style={{ width:"100%", backgroundColor:"#FFE1E1", display:"flex", alignItems:'center', justifyContent:"center", color:"#FF0E0E", borderRadius:5, cursor:"pointer" }} >View Now</div>
           </div>
          </div>
        </div>
      </div>
      <div className='row mx-3 mt-5'>
      <div className='py-4' style={{ width:"100%", backgroundColor:"#ED7A2B", borderRadius:5, display:"flex", alignItems:'center', justifyContent:"center", cursor:"pointer", color:"#fff", fontSize:20 }} ><VideoPlayer />&nbsp; Join Live Class</div>
      </div>
    </div>
  )
}
