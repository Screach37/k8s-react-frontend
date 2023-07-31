import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../env';

export default function Performance() {

    const [ClassData, setClassData] = useState(0);
    const [quizData, setquizData] = useState(0);
    const [quizz, setquizz] = useState("pass");
    const [examData, setexamData] = useState(0);
    const [Exam, setExam] = useState("pass");
    const [assignmentData, setassignmentData] = useState(0);
    const [Assig, setAssig] = useState("pass");
    const [persentage, setpersentage] = useState(0);
    const [ClassAtt, setClassAtt] = useState("persent");
    const [quizzper, setquizzper] = useState(0);
    const [physical_class, setphysical_class] = useState(0);
    const [physicaldata, setphysicaldata] = useState(0);
    const [phydata, setphydata] = useState("persent");
    const [examper, setexamper] = useState(0);
    const [assigndata, setassigndata] = useState("pass");
    

    const getData =()=>{
      var myHeaders = new Headers();
       myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

      fetch(`${API_URL}/myperformance`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.status == "1"){
            console.log(result);
            setClassData(result.myperformance.class);
            setClassData(result.myperformance.class);
            setquizData(result.myperformance.quiz);
            setexamData(result.myperformance.exam);
            setassignmentData(result.myperformance.assignment==null?0:result.myperformance.assignment);
            setphysical_class(result.myperformance.physical_class==null?0:result.myperformance.physical_class);
          }
        })
        .catch(error => console.log('error', error));
    }

    const ClassAttend =(id)=>{
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

          var raw = JSON.stringify({
            "status": id
          });

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

          fetch(`${API_URL}/get/class/statics`, requestOptions)
            .then(response => response.json())
            .then(result => {
              if(result.status == "1");
              console.log(result.persentage);
              setpersentage(Math.floor(result.persentage));
            })
            .catch(error => console.log('error', error));
    }

    const QuizzData =(id)=>{
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
         myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var raw = JSON.stringify({
          "status": id
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(`${API_URL}/get/quiz/statics`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log(result.quizpersentage);
              setquizzper(Math.floor(result.quizpersentage));
            }
          })
          .catch(error => console.log('error', error));
    }

    const ExamData =(id)=>{
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
         myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var raw = JSON.stringify({
          "status": id
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(`${API_URL}/get/exam/statics`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log("exam",result.exampersentage);
              setexamper(Math.floor(result.exampersentage));
            }
          })
          .catch(error => console.log('error', error));
    }

    const getAssig =(id)=>{
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
         myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var raw = JSON.stringify({
          "status": id
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(`${API_URL}/get/assignment/statics`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log(result.assignmentpersentage);
              setassigndata(Math.floor(result.assignmentpersentage));
            }
          })
          .catch(error => console.log('error', error));
    }

    const Physical =(id)=> {
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
         myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var raw = JSON.stringify({
          "status": id
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(`${API_URL}/get/physical/class/statics`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log(result.phy_att);
              setphysicaldata(Math.floor(result.phy_att));
            }
          })
          .catch(error => console.log('error', error));
    }

    useEffect(()=>{
      getData();
      ClassAttend("persent");
      QuizzData("pass");
      ExamData("pass");
      getAssig("pass");
      Physical("persent");
       if(!localStorage.getItem("token")){

       }
       else{
         
       }
     },[]);

  return (
    <div>
      <div className='container-fluid'>
       <div style={{ width:"100%", marginTop:"0px", marginBottom:"20px" }}>  
        <div className='row mt-3'>
         <div className='col-12 m-auto'>
          <div className='card p-3 border-0'>
            <p className='text-center' style={{ fontSize:20, fontWeight:600, color:"#2E2E2E", fontFamily:'inter' }} >Live Classes</p>
             <div className='row'>
               <div className='col-5 m-auto'>
                <div style={{ }}>
                 <CircularProgressbar value={persentage} text={`${persentage}`} />
                </div>
               </div>
             </div>
             <div className='row mt-3'>
                <div onClick={()=> {ClassAttend("absent");setClassAtt("absent")}} className="col-4 ms-auto p-2 d-flex align-items-center justify-content-center text-decoration-none" style={{ backgroundColor:ClassAtt === "absent"?"#F0F5FE":"", borderRadius:10 }} >
                   <div className='' style={{ width:25, height:25, backgroundColor:"#F5B807", borderRadius:5 }} > </div> 
                   <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:"inter" }} >Absent</div> 
                </div>
                <div className='col-2'></div>
                <div onClick={()=> {ClassAttend("persent");setClassAtt("persent")}} className="col-4 me-auto p-2 d-flex align-items-center justify-content-center text-decoration-none" style={{backgroundColor:ClassAtt === "persent"?"#F0F5FE":"", borderRadius:10 }} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#0CBC8B", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:"inter" }} >Present</div> 
                </div>
             </div>
           </div> 
         </div>
       </div> 
        <div className='row mt-3'>
         <div className='col-12 m-auto'>
          <div className='card p-3 border-0'>
            <p className='text-center' style={{ fontSize:20, fontWeight:600, color:"#2E2E2E", fontFamily:'inter' }} >Physical Classes</p>
             <div className='row'>
               <div className='col-5 m-auto'>
                <div style={{ }}>
                 <CircularProgressbar value={physicaldata} text={`${physicaldata}`} />
                </div>
               </div>
             </div>
             <div className='row mt-3'>
             <div onClick={()=> {Physical("absent");setphydata("absent")}} className="col-4 ms-auto p-2 d-flex align-items-center justify-content-center text-decoration-none" style={{ backgroundColor:phydata === "absent"?"#F0F5FE":"", borderRadius:10 }} >
                   <div className='' style={{ width:25, height:25, backgroundColor:"#F5B807", borderRadius:5 }} > </div> 
                   <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:"inter" }} >Absent</div> 
                </div>
                <div className='col-2'></div>
                <div onClick={()=> {Physical("persent");setphydata("persent")}} className="col-4 me-auto p-2 d-flex align-items-center justify-content-center text-decoration-none" style={{backgroundColor:phydata === "persent"?"#F0F5FE":"", borderRadius:10 }} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#0CBC8B", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:'inter' }} >Present</div> 
                </div>
             </div>
           </div> 
         </div>
       </div> 
        <div className='row mt-3'>
         <div className='col-12 m-auto'>
          <div className='card p-3 border-0'>
            <p className='text-center' style={{ fontSize:20, fontWeight:600, color:"#2E2E2E", fontFamily:"inter" }} >Quizzes</p>
            <div className='row'>
               <div className='col-5 m-auto'>
                <div style={{ }}>
                 <CircularProgressbar value={quizzper} text={`${quizzper}`} />
                </div>
               </div>
             </div>
             <div className='row mt-3'>
                <div onClick={()=> {QuizzData("unattemped");setquizz("unattemped")}} className='col-4 m-auto p-2 d-flex align-items-center justify-content-center' style={{backgroundColor:quizz === "unattemped"?"#F0F5FE":"", borderRadius:10}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#F5B807", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:"inter" }} >Unattemped</div> 
                </div>
                <div onClick={()=> {QuizzData("pass");setquizz("pass")}} className='col-4 m-auto p-2 d-flex align-items-center justify-content-center' style={{backgroundColor:quizz === "pass"?"#F0F5FE":"", borderRadius:10}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#0CBC8B", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:"inter" }} >pass</div> 
                </div>
                <div onClick={()=> {QuizzData("fail");setquizz("fail")}} className='col-4 m-auto p-2 d-flex align-items-center justify-content-center' style={{backgroundColor:quizz === "fail"?"#F0F5FE":"", borderRadius:10}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#FF0E0E", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:"inter" }} >Failed</div> 
                </div>
             </div>
           </div> 
         </div>
        </div> 
        <div className='row mt-3'>
         <div className='col-12 m-auto'>
          <div className='card p-3 border-0'>
            <p className='text-center' style={{ fontSize:20, fontWeight:600, color:"#2E2E2E", fontFamily:"inter" }} >Exams</p>
            <div className='row'>
               <div className='col-5 m-auto'>
                <div style={{ }}>
                 <CircularProgressbar value={examper} text={`${examper}`} />
                </div>
               </div>
             </div>
             <div className='row mt-3'>
                <div onClick={()=> {ExamData("unattemped");setExam("unattemped")}} className='col-4 m-auto p-2 d-flex align-items-center justify-content-center' style={{backgroundColor:Exam === "unattemped"?"#F0F5FE":"", borderRadius:10}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#F5B807", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:"inter" }} >Unattemped</div> 
                </div>
                <div onClick={()=> {ExamData("pass");setExam("pass")}} className='col-4 m-auto p-2 d-flex align-items-center justify-content-center' style={{backgroundColor:Exam === "pass"?"#F0F5FE":"", borderRadius:10}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#0CBC8B", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:"inter" }} >pass</div> 
                </div>
                <div onClick={()=> {ExamData("fail");setExam("fail")}} className='col-4 m-auto p-2 d-flex align-items-center justify-content-center' style={{backgroundColor:Exam === "fail"?"#F0F5FE":"", borderRadius:10}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#FF0E0E", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:"inter" }} >Failed</div> 
                </div>
             </div>
           </div> 
         </div>
        </div> 
        <div className='row mt-3'>
         <div className='col-12 m-auto'>
          <div className='card p-3 border-0'>
            <p className='text-center' style={{ fontSize:20, fontWeight:600, color:"#2E2E2E", fontFamily:"inter" }} >Assignments</p>
            <div className='row'>
               <div className='col-5 m-auto'>
                <div style={{ }}>
                 <CircularProgressbar value={assigndata} text={`${assigndata}`} />
                </div>
               </div>
             </div>
             <div className='row mt-3'>
                <div onClick={()=> {getAssig("unattemped");setAssig("unattemped")}} className='col-4 m-auto p-2 d-flex align-items-center justify-content-center' style={{backgroundColor:Assig === "unattemped"?"#F0F5FE":"", borderRadius:10}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#F5B807", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:"inter" }} >Unattemped</div> 
                </div>
                <div onClick={()=> {getAssig("pass");setAssig("pass")}} className='col-4 m-auto p-2 d-flex align-items-center justify-content-center' style={{backgroundColor:Assig === "pass"?"#F0F5FE":"", borderRadius:10}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#0CBC8B", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:"inter" }} >pass</div> 
                </div>
                <div onClick={()=> {getAssig("fail");setAssig("fail")}} className='col-4 m-auto p-2 d-flex align-items-center justify-content-center' style={{backgroundColor:Assig === "fail"?"#F0F5FE":"", borderRadius:10}} >
                  <div className='' style={{ width:25, height:25, backgroundColor:"#FF0E0E", borderRadius:5 }} > </div> 
                  <div className='ps-2 sub-name-txt' style={{ color:"#2E2E2E", fontSize:14, fontWeight:500, fontFamily:"inter" }} >Failed</div> 
                </div>
             </div>
           </div> 
         </div>
        </div> 
      </div> 
     </div>
    </div>
  )
}
