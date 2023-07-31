import React, { useEffect, useState } from 'react';
import { Document } from './SvgIcon';
import MyImg from '../images/myimage.jpg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ImArrowLeft2 } from 'react-icons/im';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';
import { FiUpload } from 'react-icons/fi';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../env';

export default function SubmitAssignments() {

    const navigate = useNavigate();
    const [first, setfirst] = useState(false)
    const [assignment_name, setassignment_name] = useState();
    const [sub_name, setsub_name] = useState();
    const [instructor_name, setinstructor_name] = useState();
    const [ImageSave, setImageSave] = useState();
    const [sch_time, setsch_time] = useState();
    const [due_time, setdue_time] = useState();
    const [assign_pap, setassign_pap] = useState("");
    const [stu_res, setstu_res] = useState("");

    const [selectedImage, setSelectedImage] = useState();
    const [name, setname] = useState("");

    useEffect(() => {
      setname(localStorage.getItem("CourseName"))
    }, [])
  
  const handleImageChange = (e) => {
    console.log(e.target.files);
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
    setImageSave(e.target.files[0]);
    setstu_res(e.target.files[0].name);
  };

    const { id } = useParams();
    console.log(id);

    const submitAssignment =()=>{
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
         myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var raw = JSON.stringify({
          "assign_id": id
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(`${API_URL}/view/upcoming/assignments`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log(result);
              setassignment_name(result.sending.assignment_det.assignment_name);
              setsub_name(result.sending.assignment_det.sub_name);
              setinstructor_name(result.sending.instructor_name);
              setsch_time(result.sending.assignment_det.sch_time);
              setdue_time(result.sending.assignment_det.due_time);
              setassign_pap(result.sending.assignmnet_res_det.assign_pap);
              setstu_res(result.sending.assignmnet_res_det.stu_res);
            }
          })
          .catch(error => console.log('error', error));
    }

 
    
     
     const Api = ()=>{
      setfirst(true);
      var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
        
        var formdata = new FormData();
        formdata.append("assign_id", id);
        formdata.append("stu_res", ImageSave);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch(`${API_URL}/submit/assignments`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log(result);
              navigate(`/AssignmemtDeclared/${id}`);
              setfirst(false);
            }
          })
          .catch(error => console.log('error', error))
          .finally(()=>{ setfirst(false);});
     }

    useEffect(()=>{
      submitAssignment();
        if(!localStorage.getItem("token")){

        }else{

        }
    },[])

  return (
    <div>
      <div className='container-fluid p-0' style={{overflowX:"hidden", padding:"0px"}}>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card py-2 rounded-0 border-0'>
             <div className='row py-3'>
                <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                  <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:20 }} /></button>
                  <span className='text-start assi-nav-txt' style={{ fontWeight:600, fontSize:20, paddingLeft:10, fontFamily:"inter"  }}>{name}</span>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div className='row m-3'>
          <div className='col-12 text-start assi-nav-txt' style={{ fontSize:20, fontWeight:600, fontFamily:"inter" }} >Assignments</div>
          <p className='col-12 text-start pt-2 assi-nav-txt' style={{ fontSize:16, fontWeight:500, fontFamily:"inter" }} >{assignment_name}</p>
           <div className='row'>
             <div className='col-11' style={{ display:'flex', justifyContent:"space-between", alignItems:'center' }}>
              <div className='d-flex align-items-center' >
                 <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                 <div className='sub-assi-txt' style={{ fontSize:14, fontWeight:600, color:"#545454", fontFamily:"inter" }} >{sch_time?.split('T')[0]}</div>
              </div>
              <div className='d-flex align-items-center' >
                 <CiClock2 className='sub-assi-txt' style={{ fontSize:20, color:"#545454" }} />
                 <div className='sub-assi-txt' style={{ fontSize:14, fontWeight:600, color:"#545454", fontFamily:"inter" }} >{sch_time?.split('T')[1].split('.')[0]} - {due_time?.split('T')[1].split('.')[0]}</div>
              </div>
             </div>
           </div>
          <p className='col-12 text-start py-2' style={{ fontSize:16, fontWeight:400, color:'#9098A8', fontFamily:"inter" }} >Instructor</p>
          <div className='row'>
            <div className='col-8' style={{ border:'1px solid #9098A8', borderRadius:40 }} >
               <div className='row p-2 d-flex align-items-center'>
                 {/* <div className='col-2 p-0' style={{ borderRadius:50 }} >
                  <img src={MyImg} className='' style={{ width:"100%", height:"100%", borderRadius:50 }}/>
                 </div> */}
                 <div className='col-12 ms-auto sub-name-txt' style={{ display:"flex", alignItems:"center", color:"#545454", fontSize:16, fontFamily:"inter" }}>
                    {instructor_name}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-4 mx-3 p-0'>
        <div className='text-start p-0 assi-nav-txt' style={{ fontSize:22, fontWeight:400, color:"#545454", fontFamily:'inter' }} >Attachments</div>
          <div class="scrollmenu">
            {/* {
                attachment.map((item,index)=>{
                    return(
                      )
                    })
                  } */}
                                   <div class="scroll-div card mx-2 border-0" style={{ fontFamily:"inter", fontSize:14, fontWeight:400 }}>{assign_pap.length>0?assign_pap:"NA"}</div>
         </div>
      </div>
      <div className='row mt-4 mx-3 p-0'>
        <div className='text-start p-0 assi-nav-txt' style={{ fontSize:22, fontWeight:400, color:"#545454", fontFamily:'inter' }} >My Attachments</div>
          <div class="scrollmenu">
            {/* {
                myattachment.map((item,index)=>{
                    return(
                      )
                    })
                  } */}
                 <div class="scroll-div card mx-2 border-0" style={{ fontFamily:"inter", fontSize:14, fontWeight:400 }}>{stu_res.length>0?stu_res:"NA"}</div>
         </div>
      </div>
      <div className='row mx-3 mt-5'>
        {/* <NavLink to="/AssignmemtDeclared" className="text-decoration-none" > */}
          <div className='py-4 assi-nav-txt' onClick={()=> {Api()}} style={{ width:"100%", backgroundColor:"#ED7A2B", borderRadius:5, display:"flex", alignItems:'center', justifyContent:"center", cursor:"pointer", color:"#fff", fontSize:20, fontFamily:"inter" }} ><Document />&nbsp;{first==false?"Submit Assignments":"Submiting..."}</div>
        {/* </NavLink> */}
      </div>
      <div className='row mx-3 mt-5 mb-4'>
        <label className="py-4 assi-nav-txt" style={{width:"100%", backgroundColor:"#DDE2EA", borderRadius:5, display:"flex", alignItems:'center', justifyContent:"center", cursor:"pointer", color:"#95A1B6", fontSize:20, fontFamily:"inter"}} htmlFor="imageUpload" >
            <FiUpload style={{ fontSize:25, }} />&nbsp; Upload Files
        </label>
        <input id="imageUpload" type="file" accept='.pdf' onChange={handleImageChange} style={{ display: 'none' }} />
      </div>
    </div>
  )
}
