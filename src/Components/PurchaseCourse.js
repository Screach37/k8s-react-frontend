import React, { useEffect, useState } from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import Cardimg from '../images/cardimg.png';
import { GiDuration } from 'react-icons/gi';
import { BsFillPlayFill } from 'react-icons/bs';
import { MdOutlineQuiz } from 'react-icons/md';
import { BsPlayFill } from 'react-icons/bs';
import ReactPlayer from 'react-player/youtube';
import { NavLink, useNavigate } from 'react-router-dom';

export default function PurchaseCourse() {

    const navigate = useNavigate();

    const[course, setCourse] = useState([]);

    const courseData = [
        {
            name : "How to Speak proper English",
            time : "12:10 Mins",
            type : 0,
            width : 50,
        },
        {
            name : "Fundamentals of English",
            time : "11:11 Mins",
            type : 1,
            width : 80,
        },
        {
            name : "Fundamentals of English",
            time : "11:11 Mins",
            type : 0,
            width : 60,
        },
        {
            name : "Fundamentals of English",
            time : "11:11 Mins",
            type : 1,
            width : 40,
        },
        {
            name : "Fundamentals of English",
            time : "11:11 Mins",
            type : 1,
            width : 90,
        },
        {
            name : "Fundamentals of English1",
            time : "11:11 Mins",
            type : 0,
            width : 50,
        },
        {
            name : "Fundamentals of English2",
            time : "11:11 Mins",
            type : 0,
            width : 20,
        },
    ] 

    useEffect(()=>{
        setCourse(courseData); 
    })

  return (
    <div>
      <div className='container-fluid p-0' style={{overflowX:"hidden"}}>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card py-2 rounded-0 border-0'>
             <div className='row py-3'>
                <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                  <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:20 }} /></button>
                  <span className='text-start' style={{ fontWeight:600, fontSize:20, paddingLeft:10  }}>Complete NDA Crash Course</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div className='row'>
         <div className='col-12'>
           <div className='card rounded-0 border-0'> 
            {/* <img src={Cardimg} className="card-img-top" alt="..." /> */}
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%' /> */}
            <div style={{position: 'relative',}}>
             <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' />
               <span style={{
                 position: 'absolute',
                 top: '50%',
                 left: '50%',
                 transform: 'translate(-50%, -50%)',
                 fontSize: '24px',
                 color: '#fff',
                 backgroundColor:"#00000040",
                 borderRadius:50,
                 border:"2px solid #fff"
               }}><div className='p-3 d-flex align-items-center' style={{  }} ><BsPlayFill style={{ fontSize:35, color:"#fff" }} /></div></span>
             </div>
             <div className="card-body">
               <div className='text-start' style={{ fontSize:20, fontWeight:600, color:'#1E1E1E' }} >Getting the Fundamentals of NDA</div>
                <div className='py-1' style={{ display:"flex", alignItems:"center" }} >
                  <GiDuration style={{ fontSize:20, color:"#858585" }} />
                  <div className='ps-2' style={{ fontSize:18, fontWeight:400, color:"#858585" }} >2:30 Mins</div>
               </div>
             </div>
           </div>
         </div> 
        </div>
        <div className='bar-opt pb-0'>
        <div className='row p-4' >
        <div className='text-start' style={{ fontSize:22, color:"#1E1E1E", fontWeight:400 }} >Course Content</div>
          {
            course.map((item,index)=>{
                return (
                  <>
                    <div key={index} className='col-12 mb-3'>
                     <div className='card py-0 border-0 rounded-3 bg-white' style={{ borderBottom:"2 px solid green" }} >
                      <div className='row g-0 d-flex justify-content-between align-items-center'>
                         <div className='col-2' style={{  }} >
                           {
                             item.type == 0 ? (<BsFillPlayFill className='' style={{ fontSize:30 }} />) : 
                             (<MdOutlineQuiz className='' style={{ fontSize:30 }} />)
                           }
                         </div>
                         <div className='col-10 py-3'>
                           <h5 className='text-start'>{ item.name }</h5>
                           <div className='text-start' style={{ fontSize:14, fontWeight:400, color:"#858585" }} >{item.time}</div>
                         </div>
                       </div>
                       <div className='' style={{ width:"100%", height:8, backgroundColor:"#F1F1F1" }} >
                        <div className='' style={{ width:item.width + "%", height:8, backgroundColor:"#26D88D" }} ></div>
                       </div>
                     </div>
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
