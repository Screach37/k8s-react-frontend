import React, {useEffect, useState} from 'react';
import { IoIosClose } from 'react-icons/io';
import { MdOutlineTranslate } from 'react-icons/md';
import { TbArrowNarrowLeft } from 'react-icons/tb';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import slider1 from '../images/image1.png';

export default function Submit() {

    const [option, setOption] = useState([]);
    const [status, setStatus] = useState(1)

    const optData = [
        {
            opt : "Christiano Ronaldo"
        },
        {
            opt : "M Bappe"
        },
        {
            opt : "Lionell Andress Messi"
        },
        {
            opt : "Neymar Junior"
        },
    ]

    useEffect(()=>{
        setOption(optData);
    })

  return (
    <div>
     <div className='container-fluid g-0' style={{ width:"100%", height:"100%" }} >
       <div className='row fixed-top'>
         <div className='row g-0 px-2 py-4 d-flex bg-dark text-white justify-content-between align-items-center'>
           <div className='col-3'>
              <div className='mx-3 py-2' style={{ backgroundColor:"#ffffff20", borderRadius:5, color:"#fff", fontSize:14, cursor:'pointer', display:"flex", alignItems:'center', justifyContent:"center" }} ><IoIosClose className='clos' style={{ fontSize:22 }} /> Quit</div>
           </div>
           <div className='col-4' style={{ color:"#fff", fontSize:18, fontWeight:600 }} >Score <span style={{ color:"#2FE4B1", fontSize:18, fontWeight:600 }}>+ 01</span></div>
           <div className='col-2'><MdOutlineTranslate style={{ fontSize:20, color:'#C5C5C5' }} /></div>
           <div className='col-3' style={{ color:"#fff", fontSize:18, fontWeight:600 }} >6 : 30</div>
         </div> 
         <div className='row g-0'>
           <div className='col-12 p-0' style={{ width:'100%', height:8, background: "linear-gradient(269.99deg, #59AFFF 0%, #6B24D6 99.99%)" }}></div>
         </div>
         <div className='row px-3 py-3 d-flex justify-content-between align-items-center' style={{ backgroundColor:"#F3F3F3" }} >
          <div className='col-4' style={{ fontSize:14, fontWeight:600, display:'flex', alignItems:'center' }} ><TbArrowNarrowLeft style={{ fontSize:20 }} />Previous</div>
          <div className='col-4' style={{ fontSize:22, fontWeight:600, color:"#2E2E2E" }} >1/<span style={{ fontSize:20, fontWeight:600, color:'#7E7E7E' }}>10</span></div>
          <div className='col-4' style={{ fontSize:14, fontWeight:600, display:'flex', alignItems:'center', justifyContent:"flex-end" }} >Next<TbArrowNarrowRight style={{ fontSize:20 }} /></div>
         </div>
       </div>
      <div className='que-screen' style={{ marginTop:"140px",  marginBottom:"120px", }} >
      <div className='row p-3'>
        <div className='col-12 text-start'>
        <div className='card border-0 bg-transparent'>
              {
                status == 1 ? (<p className='assi-declr-txt' style={{ fontSize:18, fontWeight:600, color:"#2E2E2E", fontFamily:"inter" }} >Which of the following football players went crying out of the field in FIFA 2022 Quater Finals ?</p>) : 
                 (<img
                   className="d-block w-100"
                   src={slider1}
                   alt="First slide"
                   style={{ width:"100%" }}
                 />)
              }
           </div> 
        </div>
      </div> 
      <div className='row'>
       <div className='col-11 m-auto'>
          <ul className="list-group border-0">
            {
                option.map((item,index)=>{
                    return(
                       <>
                         <div className='card mb-3 py-1' style={{ width:"100%", border:"1px solid #F2F2F2", borderRadius:10 }} >
                           <li key={index} className="list-group-item text-start border-0 bg-transparent assi-declr-txt" style={{ fontWeight:600, fontSize:16, color:'#3C3C3C', fontFamily:"inter" }} >{(index+1) + "." + "  "  +  item.opt}</li>
                         </div> 
                       </>
                    )
                })
            }
           </ul>
        </div>
      </div>
     </div>
     <div className='row fixed-bottom px-4 py-4' style={{ backgroundColor:"#fff", alignItems:"center"  }} >
       <NavLink to="/ReviewAnswer" className="text-decoration-none col-12" >
        <div className=' ms-auto py-3' style={{ backgroundColor:'#ED7A2B', borderRadius:5, color:"#fff", fontSize:16, fontWeight:600, alignItems:'center', justifyContent:"center", display:"flex", cursor:"pointer" }}>Submit Answer</div>
       </NavLink>
     </div>
    </div>
   </div>
  )
}
