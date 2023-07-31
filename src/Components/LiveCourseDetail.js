import React, { useEffect, useState } from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import Cardimg from '../images/cardimg.png';
import { GiDuration } from 'react-icons/gi';
import { BsFillPlayFill } from 'react-icons/bs';
import { MdOutlineQuiz } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import ReactPlayer from 'react-player/youtube';
import { NavLink, useNavigate } from 'react-router-dom';

export default function LiveCourseDetail() {

    const navigate = useNavigate();

    const [subject, setSubject] = useState([]);

    const subData = [
        {
          name : "Botany",
        },
        {
          name : "Zoology",
        },
        {
          name : "Physical Fitness",
        },
        {
          name : "Information Practices",
        },
      ]

    useEffect(()=>{
        setSubject(subData); 
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
                  <span className='text-start assi-nav-txt' style={{ fontWeight:600, fontSize:20, paddingLeft:10, fontFamily:"inter"  }}>Complete NDA Crash Course</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
       <div className='bar-option pb-5'>
        <div className='row'>
         <div className='col-12'>
           <div className='card rounded-0 border-0 bg-transparent'> 
            <img src={Cardimg} className="card-img-top" alt="..." />
             <div className="card-body">
               <div className='text-start assi-nav-txt' style={{ fontSize:22, fontWeight:600, color:'#1E1E1E', fontFamily:"inter" }} >Course Details</div>
                <div className='py-1' style={{ display:"flex", alignItems:"center" }} >
                  <div className='pe-2 assi-declr-txt' style={{ fontSize:18, fontWeight:400, color:"#858585", fontFamily:"inter" }} >Duration</div>
                  <GiDuration className='assi-declr-txt' style={{ fontSize:20, color:"#858585" }} />
                  <div className='ps-2 assi-declr-txt' style={{ fontSize:18, fontWeight:400, color:"#858585", fontFamily:"inter" }} >2:30 Mins</div>
               </div>
             </div>
           </div>
         </div> 
        </div>
        <div className='row p-4 mb-5' >
        <div className='text-start assi-declr-txt' style={{ fontSize:22, color:"#1E1E1E", fontWeight:600, fontFamily:"inter" }} >Details :</div>
        <div className='text-start assi-declr-txt' style={{ fontSize:22, color:"#1E1E1E", fontWeight:400 }} >Subjects Covered</div>
         <ul class="list-group text-start bg-transparent">
           {
             subject.map((item,index)=>{
               return(
                 <li key={index} class="list-group-item border-0 bg-transparent d-flex align-items-center" style={{ fontFamily:"inter" }}>{(index+1)}. {item.name}</li>
               )
             })
           }
         </ul>
         <div className='text-start' style={{ fontSize:14, color:"#1E1E1E", fontWeight:400, fontFamily:"inter" }} >Join our live crash course for National Defence Academy (NDA) entrance exam preparation and embark on your journey towards a successful military career! Our comprehensive program is designed to equip you with the knowledge, skills, and confidence to excel in the highly competitive NDA entrance exam. Led by experienced instructors with deep expertise in NDA exam preparation, our live crash course offers you an immersive learning experience. You'll receive engaging and interactive lessons that cover all the essential topics, including mathematics, English, general knowledge, and reasoning. Our instructors will provide you with expert guidance on exam strategies, time management, and problem-solving techniques to maximize your chances of success. Our course is tailored to meet the specific requirements of the NDA entrance exam, ensuring that you are well-prepared for the challenges you will face. You'll have access to a wealth of practice materials, including sample papers and mock tests, to hone your skills and boost your confidence. Our instructors will also provide personalized feedback and guidance, helping you identify your strengths and weaknesses and focus on areas that need improvement. In addition to the rigorous academic training, our live crash course will also foster your physical fitness and personality development. You'll receive guidance on physical fitness routines, drill exercises, and grooming techniques that are essential for NDA aspirants. Our course will also focus on enhancing your leadership skills, communication abilities, and overall personality development, which are crucial for a successful military career. Join our live crash course for NDA entrance exam preparation and gain the competitive edge you need to ace the exam and realize your dream of joining the prestigious National Defence Academy. Enroll now and unlock your full potential to excel in this highly esteemed examination.</div>
       </div>
      </div>
      </div> 
      <div className='fixed-bottom' style={{ width:"100%", backgroundColor:"#fff" }} >
       <div className='row px-2 py-4 d-flex align-items-center'>
         <div className='col-6'>
           <div className='assi-declr-txt' style={{ fontSize:18, fontWeight:500, color:"#1E1E1E", fontFamily:"inter" }} >Price : <span className='text-decoration-line-through' style={{ fontSize:18, fontWeight:500, color:"#1E1E1E", fontFamily:"inter" }}> ₹ 19,999</span></div>
           <div className='assi-declr-txt' style={{ fontSize:18, fontWeight:500, color:"#ED7A2B", fontFamily:"inter" }} >&nbsp; ₹ 19,999</div>
         </div>
         <div className='col-6'>
           <NavLink to='/BuyLiveCourse' className="text-decoration-none" >
             <div className='log-btn p-3 text-white' style={{ fontFamily:"inter" }} >Buy Course</div>
           </NavLink>
         </div>
       </div> 
      </div>
    </div>
  )
}


