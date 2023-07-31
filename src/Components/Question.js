import React, {useEffect, useState} from 'react';
import { IoIosClose } from 'react-icons/io';
import { MdOutlineTranslate } from 'react-icons/md';
import { TbArrowNarrowLeft } from 'react-icons/tb';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { NavLink, useParams } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';
import { API_URL } from '../env';

export default function Question() {

    const [question, setQuestion] = useState([]);
    const [click, setClick] = useState(0);
    const [know, setknow] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [Index, setIndex] = useState();
    
     console.log(selectedOptions);

     const { id } = useParams();
     console.log("Question",id);

    const Questions =()=>{
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
         myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var raw = JSON.stringify({
          "quiz_id": id
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(`${API_URL}/join/upcoming/quiz`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log(result);
              setQuestion(result.questions);
              console.log(result.questions[0]?.options);
              setknow(1);
              setSelectedOptions(Array(result.questions.length).fill(-1));
            }
          })
          .catch(error => console.log('error', error));
    }

    const handleOptionClick = (optionIndex) => {
      setIndex(optionIndex)
    };

    const SaveNext = ()=>{
      setSelectedOptions(prevOptions =>{
        const updatedOptions = [...prevOptions];
        updatedOptions[click] = Index;
        return updatedOptions;
      });
      setClick(click+1);
    }

    const HandelSkip = ()=>{
        setSelectedOptions(prevOptions =>{
          const updatedOptions = [...prevOptions];
          updatedOptions[click] = -1;
          return updatedOptions;
        });
        setClick(click+1);
    }

   
    const Next = ()=>{
      setClick(click+1);
    }


    useEffect(()=>{
        Questions();
        if(!localStorage.getItem("token")){

        }else{

        }
    },[])

  return (
    <div>
     <div className='container-fluid g-0' style={{ width:"100%", height:"100%" }} >
       <div className='row fixed-top'>
         <div className='row g-0 px-2 py-4 d-flex bg-dark text-white justify-content-between align-items-center'>
           <div className='col-3'>
              <div className='mx-3 py-2' style={{ backgroundColor:"#ffffff20", borderRadius:5, color:"#fff", fontSize:14, cursor:'pointer', display:"flex", alignItems:'center', justifyContent:"center" }} ><IoIosClose className='clos' style={{ fontSize:22 }} /> Quit</div>
           </div>
           <div className='col-4' style={{ color:"#fff", fontSize:18, fontWeight:600 }} >Score 00</div>
           <div className='col-2'><MdOutlineTranslate style={{ fontSize:20, color:'#C5C5C5' }} /></div>
           <div className='col-3' style={{ color:"#fff", fontSize:18, fontWeight:600 }} >6 : 30</div>
         </div> 
         <div className='row g-0'>
           <div className='col-12 p-0' style={{ width:'100%', height:8, background: "linear-gradient(269.99deg, #59AFFF 0%, #6B24D6 99.99%)" }}></div>
         </div>
         <div className='row px-3 py-3 d-flex justify-content-between align-items-center' style={{ backgroundColor:"#F3F3F3" }} >
          <div className='col-4' onClick={()=>{setClick(click-1)}} style={{ fontSize:14, fontWeight:600, display:'flex', alignItems:'center' }} ><TbArrowNarrowLeft style={{ fontSize:20 }} />Previous</div>
          <div className='col-4' style={{ fontSize:22, fontWeight:600, color:"#2E2E2E" }} >{click+1}/<span style={{ fontSize:20, fontWeight:600, color:'#7E7E7E' }}>{question?.length}</span></div>
          <div className='col-4' onClick={()=>{Next()}} style={{ fontSize:14, fontWeight:600, display:'flex', alignItems:'center', justifyContent:"flex-end" }} >Next<TbArrowNarrowRight style={{ fontSize:20 }} /></div>
         </div>
       </div>
      <div className='que-screen' style={{ marginTop:"140px",  marginBottom:"120px", }} >
      <div className='row p-3'>
        <div className='col-12 mt-3 text-start'>
           <div className='card border-0 bg-transparent'>
              {/* {
                status == 1 ? (<p className='assi-declr-txt' style={{ fontSize:18, fontWeight:600, color:"#2E2E2E", fontFamily:"inter" }} >{question1} </p>) : 
                 (<img
                   className="d-block w-100"
                   src={slider1}
                   alt="First slide"
                   style={{ width:"100%" }}
                 />)
              } */}
              {
                // question[0]?.map((item,index)=>{
                //   return(
                    <p className='assi-declr-txt' style={{ fontSize:18, fontWeight:600, color:"#2E2E2E", fontFamily:"inter" }} >{question[click]?.question} </p>
                //   )
                // })
              }
           </div>  
        </div>
      </div> 
      <div className='row'>
       <div className='col-11 m-auto'>
        {
         know==1?<ul className="list-group border-0">
         {
             JSON.parse(question[click]?.options).map((item,index)=>{
              console.log(item);
                 return(
                    <>  
                      <div className={selectedOptions[click] === index ? 'selected card mb-3 py-1' : 'card mb-3 py-1'} style={{ width:"100%",border:selectedOptions[click] === index+1 ?"1px solid green":"", borderRadius:10 }} >
                        <li onClick={() => handleOptionClick(index+1)}  key={index} className="list-group-item text-start border-0 bg-transparent assi-declr-txt" style={{ fontWeight:600, fontSize:16, color:'#3C3C3C', fontFamily:"inter" }} >{index+1}.&nbsp;&nbsp;{item}</li>
                      </div> 
                    </>
                 )
             })
          }
        </ul>:<></>
        }
       </div>
      </div>
     </div>
     <div className='row fixed-bottom px-4 py-4' style={{ backgroundColor:"#fff", alignItems:"center"  }} >
      <div onClick={() => HandelSkip()} className='col-4 py-3' style={{ backgroundColor:'#F2F2F2', borderRadius:5, color:"#8A8C94", fontSize:16, fontWeight:600, alignItems:'center', justifyContent:"center", display:"flex", cursor:"pointer" }} >Skip</div>
       <div onClick={()=>{SaveNext();}} className="text-decoration-none col-8" >
        <div className=' ms-auto py-3' style={{ backgroundColor:'#ED7A2B', borderRadius:5, color:"#fff", fontSize:16, fontWeight:600, alignItems:'center', justifyContent:"center", display:"flex", cursor:"pointer" }}>Save & Next</div>
       </div>
       {/* <NavLink to="/Submit" className="text-decoration-none col-8" >
        <div className=' ms-auto py-3' style={{ backgroundColor:'#ED7A2B', borderRadius:5, color:"#fff", fontSize:16, fontWeight:600, alignItems:'center', justifyContent:"center", display:"flex", cursor:"pointer" }}>Save & Next</div>
       </NavLink> */}
     </div>
    </div>
   </div>
  )
}
