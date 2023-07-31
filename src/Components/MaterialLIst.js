import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';
import { CgArrowRight } from 'react-icons/cg';
import Question from '../images/question.png';
import Notes from '../images/notes.png';
import StudyGuide from '../images/studyguide.png';
import Exam from '../images/exam.png';
import Journals from '../images/Journals.png';
import Pgrowth from '../images/growth.png';
import Motivation from '../images/motivation.png';

export default function MaterialList() {

    const[state, setState] = useState("");
    const[study, setStudy] = useState([]);

    const data = [
        {
            name : "Question Paper",
            image : Question,
            pdf : 456,
        },
        {
            name : "Topper’s Notes",
            image : Notes,
            pdf : 56,
        },
        {
            name : "Study Guide",
            image : StudyGuide,
            pdf : 456,
        },
        {
            name : "Exam Preparation",
            image : Exam,
            pdf : 456,
        },
        {
            name : "Journals",
            image : Journals,
            pdf : 456,
        },
        {
            name : "Personal Growth",
            image : Pgrowth,
            pdf : 456,
        },
        {
            name : "Motivation",
            image : Motivation,
            pdf : 456,
        },
    ]

    useEffect(()=>{
        setStudy(data);
    })

    const navigate = useNavigate();

  return (
    <div>
     <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
       <div className='' style={{marginBottom:"60px"}} >
         <div classNameName='p-0' style={{}} >
           <div className='row fixed-top' style={{backgroundColor:"#fff" }}>
              <div className='col-12'>
                 <div className='row py-3'>
                   <div style={{ display:"flex", justifyContent:"", alignItems:"center", }}>
                     <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:24 }} /></button>
                     <span className='text-start' style={{ fontWeight:600, fontSize:25, paddingLeft:15  }}>Study Materials</span>
                   </div>
                 </div>
               </div>
               <div className='row p-0 mx-1 pt-3 px-3' style={{ backgroundColor:"#F0F5FE"}} >
                <div className='col-12 py-2'> 
                <p className='text-start' style={{ fontSize:22, color:"#2E2E2E", fontWeight:500 }} >JET Live Batch -4</p>
               </div>
             </div> 
             </div>
 
             <div className='row px-3 mt-5' style={{paddingTop:"100px"}}>
               <div className='col-12 mt-4'>
                 {
                   study.map((item, index)=>{
                       return(
                          <>
                           <NavLink to="/PdfList" className="text-decoration-none" >
                             <div key={index} className='card p-3 border-0 mb-3' style={{ borderRadius:10 }} >
                               <div className='row d-flex align-items-center justify-content-between'>
                                 <div className='col-3'>
                                   <div style={{  borderRadius:50 }} >
                                     <div style={{ width:70, height:70, backgroundColor:"#EFEFEF", borderRadius:100, display:'flex', alignItems:'center', justifyContent:'center' }} >
                                      <img src={item.image} className='' style={{ width:30, height:30 }} />
                                     </div>
                                    </div>
                                 </div>
                                 <div className='col-7 me-auto' >
                                  <div className='text-start assi-declr-txt que-txt' style={{ color:"#2E2E2E", fontSize:22, fontWeight:500 }} >{item.name}</div>
                                  <div className='text-start assi-declr-txt que-txt' style={{ color:"#7E7E7E", fontSize:18, fontWeight:500 }} >Total&nbsp;<span className='assi-declr-txt' style={{ color:"#D92828", fontSize:18, fontWeight:500 }}>{item.pdf}</span>&nbsp;PDFs</div>
                                 </div>
                                 <div className='col-2 ms-auto '><CgArrowRight className='assi-nav-txt' style={{ fontSize:25, color:"#000" }} /></div>
                               </div>
                             </div>
                            </NavLink>  
                          </>
                       )
                   })
                 }
               </div>
             </div>
           </div> 
         </div>
       </div> 
    </div>
  )
}
