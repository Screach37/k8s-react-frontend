import React, { useEffect, useState } from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import Cardimg from '../images/cardimg.png';
import { GiDuration } from 'react-icons/gi';
import { BsFillPlayFill } from 'react-icons/bs';
import { MdOutlineQuiz } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import ReactPlayer from 'react-player/youtube';
import { NavLink, useNavigate } from 'react-router-dom';

export default function CourseDetail() {

    const navigate = useNavigate();

    const[course, setCourse] = useState([]);

    const courseData = [
        {
            name : "How to Speak proper English",
            time : "12:10 Mins",
            type : 0
        },
        {
            name : "Fundamentals of English",
            time : "11:11 Mins",
            type : 1
        },
        {
            name : "Fundamentals of English",
            time : "11:11 Mins",
            type : 0
        },
        {
            name : "Fundamentals of English",
            time : "11:11 Mins",
            type : 1
        },
        {
            name : "Fundamentals of English",
            time : "11:11 Mins",
            type : 1
        },
        {
            name : "Fundamentals of English1",
            time : "11:11 Mins",
            type : 0
        },
        {
            name : "Fundamentals of English2",
            time : "11:11 Mins",
            type : 0
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
                  <span className='text-start assi-declr-txt' style={{ fontWeight:600, fontSize:20, paddingLeft:10, fontFamily:"inter"  }}>Complete NDA Crash Course</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
       <div className='bar-option pb-5'>
        <div className='row'>
         <div className='col-12'>
           <div className='card rounded-0 border-0'> 
            {/* <img src={Cardimg} className="card-img-top" alt="..." /> */}
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='100%' height='100%' /> */}
            {/* <div style={{position: 'relative',}}>
              <img src={Cardimg} className="card-img-top" alt="..." />
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
               }}><div className='p-3 d-flex align-items-center' style={{  }} ><IoMdLock style={{ fontSize:30, color:"#fff" }} /></div>
               </span>
               <div><div>Purchase the course to View this Content </div></div>
             </div> */}
             <div style={{ backgroundImage: `url(${Cardimg})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:"no-repeat", height:'auto' }}>
               <div className='row py-4'>
                 <div className='col-4 m-auto d-flex align-items-center justify-content-center'>
                   <div className='d-flex align-items-center justify-content-center' style={{ width:50, height:50, backgroundColor:'#00000040', borderRadius:50, border:'2px solid #fff' }} >
                    <IoMdLock style={{ fontSize:20, color:"#fff" }} />
                   </div>
                 </div>
                 <div className='row pt-3 d-flex align-items-center justify-content-center'>
                   <div className='text-white col-6 m-auto' style={{ fontFamily:"inter", fontSize:12, fontWeight:300 }} >Purchase the course to View this Content</div>
                 </div>
                 <div className='row pt-3 d-flex align-items-center justify-content-center'>
                   <div className='col-4 m-auto d-flex align-items-center justify-content-center' style={{ height:30, backgroundColor:"#fff", fontFamily:"inter", fontSize:12, fontWeight:400, color:'#000', borderRadius:5 }} >Buy Now</div>
                 </div>
               </div>
             </div>
             <div className="card-body">
               <div className='text-start assi-declr-txt' style={{ fontSize:20, fontWeight:600, color:'#1E1E1E', fontFamily:'inter' }} >Getting the Fundamentals of NDA</div>
                <div className='py-1' style={{ display:"flex", alignItems:"center" }} >
                  <GiDuration className='agre-txt-fold' style={{ fontSize:20, color:"#858585" }} />
                  <div className='ps-2 assi-declr-txt' style={{ fontSize:18, fontWeight:400, color:"#858585", fontFamily:"inter" }} >2:30 Mins</div>
               </div>
             </div>
           </div>
         </div> 
        </div>
        <div className='row p-4 mb-5'>
        <div className='text-start agre-txt-fold' style={{ fontSize:22, color:"#1E1E1E", fontWeight:500, fontFamily:"inter" }} >Course Content</div>
          {
            course.map((item,index)=>{
                return (
                  <>
                    <div key={index} className='col-12 mb-3'>
                     <div className='card py-2 border-0 rounded-3 bg-white'>
                      <div className='row g-0 d-flex justify-content-between align-items-center'>
                         <div className='col-2' style={{  }} >
                           {
                             item.type == 0 ? (<BsFillPlayFill className='' style={{ fontSize:30 }} />) : 
                             (<MdOutlineQuiz className='' style={{ fontSize:30 }} />)
                           }
                         </div>
                         <div className='col-10'>
                           <h5 className='text-start assi-declr-txt' style={{ fontFamily:"inter", fontWeight:500, fontSize:18 }} >{ item.name }</h5>
                           <div className='text-start assi-declr-txt' style={{ fontSize:14, fontWeight:400, color:"#858585", fontFamily:'inter' }} >{item.time}</div>
                         </div>
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
      <div className='fixed-bottom' style={{ width:"100%", backgroundColor:"#fff" }} >
       <div className='row px-2 py-4 d-flex align-items-center'>
         <div className='col-6'>
           <div className='assi-declr-txt' style={{ fontSize:20, fontWeight:500, color:"#1E1E1E", fontFamily:'inter' }} >Price : <span className='text-decoration-line-through assi-declr-txt' style={{ fontSize:20, fontWeight:500, color:"#1E1E1E" }}> ₹ 19,999</span></div>
           <div className='assi-declr-txt' style={{ fontSize:25, fontWeight:500, color:"#ED7A2B", fontFamily:'inter' }} >&nbsp; ₹ 19,999</div>
         </div>
         <div className='col-6'>
           <NavLink to='/BuyNow' className="text-decoration-none" >
             <div className='log-btn p-3 text-white assi-declr-txt' >Buy Course</div>
           </NavLink>
         </div>
       </div> 
      </div>
    </div>
  )
}
