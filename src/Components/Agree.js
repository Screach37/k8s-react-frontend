import React, { useState, useEffect } from 'react';
import { GiDuration } from 'react-icons/gi'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';
import { MdOutlineQuiz } from 'react-icons/md';
import { API_URL } from '../env';

export default function Agree() {

    const { id } = useParams();
    console.log(id);

    const navigate = useNavigate();

    const [state, setState] = useState("");
    const [numberofquestion, setnumberofquestion] = useState();
    const [timeperquestion, settimeperquestion] = useState();
    const [passingpersentage, setpassingpersentage] = useState();
    const [quizrules, setquizrules] = useState();
    const [timeperiod, settimeperiod] = useState();
    const [tags, settags] = useState([]);
    const [name, setname] = useState("");

    useEffect(() => {
      setname(localStorage.getItem("CourseName"))
    }, [])

    const QuizzDetail =()=>{
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

        fetch(`${API_URL}/view/upcoming/quiz`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log(result);
              setnumberofquestion(result.quiz.numberofquestion);
              settimeperquestion(result.quiz.timeperquestion);
              setpassingpersentage(result.quiz.passingpersentage);
              setquizrules(result.quiz.quizrules);
              settimeperiod(result.quiz.timeperiod);
              settags(result.tags);
            }
          })
          .catch(error => console.log('error', error));
    }

    useEffect(()=>{
      QuizzDetail();
      if(!localStorage.getItem("token")){

      }else{

      }
    },[])


  return (
    <div>
      <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
          <div className='' style={{ marginBottom:"60px", width:"100%", marginTop:"84px" }} >
           <div className='row py-3 fixed-top' style={{ backgroundColor:"#fff", alignItems:"center" }}>
               <div className='col-12'>
                 <div className='row d-flex align-items-center'>
                   <div className='col-2' style={{  display:"flex", alignItems:"center", justifyContent:"center" }} >
                    <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:24 }} /></button>
                   </div>
                   <div className='col-10'>
                     <div style={{  display:"flex", alignItems:"center", justifyContent:"flex-start" }}>
                      <div className='text-start agre-txt-fold' style={{ fontWeight:600, fontSize:16, paddingLeft:0, fontFamily:"inter" }}>{name}</div>
                     </div>
                     <div className='row'>
                      <div className='col-10'>
                         <div className='row d-flex align-items-center justify-content-start'>
                          <div className='col-6 ms-auto text-start'><GiDuration style={{ fontSize:14, color:"#858585" }} /><span className='ps-1' style={{ fontSize:10, color:"#858585", fontFamily:"inter" }}>{timeperiod} Mins</span></div>
                          <div className='col-6 m-auto text-start'><MdOutlineQuiz style={{ fontSize:14, color:"#858585" }} /><span className='ps-1' style={{ fontSize:10, color:"#858585", fontFamily:'inter' }}>Practice Quiz</span></div>
                        </div>
                      </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div> 
          </div>
           <div className=''>
           <div className='py-2 text-start px-3 ruletxt' style={{ backgroundColor:"#F0F5FE", fontSize:20, fontWeight:600, color:"#2E2E2E", fontFamily:"inter" }} >Rules of Quiz</div>
             <div className='p-3' >
               <p className='text-start' style={{ fontSize:14, fontWeigth:600, color:"#2E2E2E", fontFamily:"inter" }} >Number of Questions : {numberofquestion}</p>
               <p className='text-start' style={{ fontSize:14, fontWeigth:600, color:"#2E2E2E", fontFamily:"inter" }} >Time for Each Question : {timeperquestion} Sec</p>
               <p className='text-start' style={{ fontSize:14, fontWeigth:600, color:"#2E2E2E", fontFamily:"inter" }} >Minimum Passing Percentage : {passingpersentage} %</p>
               <p className='text-start' style={{ fontSize:18, fontWeigth:500, color:"#2E2E2E", fontFamily:"inter" }} >Subjects</p>
               <ul class="list-group text-start bg-transparent">
                  {
                    tags.map((item,index)=>{
                      return(
                        <li key={index} class="list-group-item border-0 bg-transparent d-flex align-items-center"><div style={{ width:6, height:6, backgroundColor:"#2E2E2E", borderRadius:10 }} ></div><span className='ps-2' style={{ color:'#2E2E2E', fontSize:12, fontWeight:400, fontFamily:'inter' }} >{item}</span></li>
                      )
                    })
                  }
                </ul>
                <p className='pt-3 text-start' style={{ fontSize:18, fontWeigth:600, color:"#2E2E2E", fontFamily:'inter' }} >General Rules of Participation</p>
                {/* <ul class="list-group text-start bg-transparent">
                  {
                    tags.map((item,index)=>{
                      return(
                        <li key={index} class="list-group-item border-0 bg-transparent d-flex align-items-center"><div style={{ width:6, height:6, backgroundColor:"#2E2E2E", borderRadius:10 }} ></div><span className='ps-2' style={{ color:'#2E2E2E', fontSize:12, fontWeight:400, fontFamily:'inter' }} >{item}</span></li>
                      )
                    })
                  }
                </ul> */}
                <div className='text-start' style={{ fontSize:16, fontWeigth:500, color:"#2E2E2E", fontFamily:"inter" }}>{quizrules}</div>
             </div>
           </div>
          <div className='row fixed-bottom'>
            <NavLink to={`/Cycle/${id}`} className="text-decoration-none" >
              <div style={{ width:"100%", height:80, backgroundColor:"#ED7A2B", display:"flex", justifyContent:"center", alignItems:"center", color:'#fff', fontSize:18, fontWeight:500, cursor:"pointer", fontFamily:'inter' }}>Agree & Enter</div>
            </NavLink>
          </div>
        </div>
  )
}
