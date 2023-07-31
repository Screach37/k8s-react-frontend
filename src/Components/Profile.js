import React, { useState, useEffect } from 'react';
import Performance from './Performance';
import OtherDetail from './OtherDetail';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../env';

export default function Profile() {

    const [state, setState] = useState("");
    const [name, setName] = useState();
    const [img, setImg] = useState(1)

    const navigate = useNavigate();

    const studentData = async() => {
   
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch(`${API_URL}/get/studentdetail`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.status == "001")
          console.log(result);
          setName(result.stu_data.name);
        })
        .catch(error => console.log('error', error));
    }
  
     useEffect(()=>{
      studentData();
       if(!localStorage.getItem("token")){
       }
       else{
         
       }
     },[]);

  return (
    <div>
      <div className='container-fluid g-0' style={{overflowX:"hidden"}}>
         <div className='' style={{marginBottom:"60px"}} >
           <div classNameName='p-0' style={{ width:"100%", marginTop:"200px" }} >
             <div className='row'>
                <div className='col-md-12 P-0'>
                  <div className='row fixed-top' style={{ backgroundColor:"#fff" }}>
                    <div className='row'>
                       <div className='col-12'>
                         <div className='row py-3'>
                           <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                             <span className='text-start ps-2 ' style={{ fontWeight:600, fontSize:25, fontFamily:'inter'}}>Profile Detail</span>
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className='row px-4 g-0 d-flex align-items-center justify-content-between'>
                        <div className='col-3 p-0' style={{ }}>
                          <div className='p-0' style={{ width:55, height:55, backgroundColor:'#F2F2F2', borderRadius:100, display:"flex", justifyContent:"center", alignItems:"center" }} >
                               <div
                                style={{
                                  color: "#0CBC8B",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems:'center',
                                  fontSize: "30px",
                                  fontWeight: "600",
                                  fontFamily:"inter",
                                  textTransform: "capitalize",
                                }}
                              >
                                {name?.split("", 1)}
                              </div>
                          </div>
                        </div>
                        <div className='col-8 me-auto text-start p-0' style={{ }}>
                          <div className='profile-txt'>
                            <div className='homelive-txt' style={{ fontSize:20, fontWeight:600, color:"#2E2E2E", fontFamily:"inter"}}>{name}</div>
                            <div className='sub-name-txt' style={{ fontSize:14, fontWeight:500, color:"#545454", fontFamily:'inter'}}>Student</div>
                          </div>
                        </div>
                      </div>
                     <div className='col-6'> 
                        <div className='py-3' onClick={()=> setState("Performance")} style={{ borderBottom:state=="Performance" || state === ''?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                            <span className='sub-assi-txt' style={{ color:state=="Performance" || state === '' ?"#ED7A2B":"#545454", fontSize:20, fontWeight:500, fontFamily:"inter" }} >My Performance</span>
                        </div>
                     </div>
                     <div className='col-6'>
                        <div className='py-3' onClick={()=> setState("OtherDetail")} style={{ borderBottom:state=="OtherDetail"?"2px solid #ED7A2B":"none", width:"100%", backgroundColor:"#fff", cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center" }} >
                          <span className='sub-assi-txt' style={{ color:state=="OtherDetail"?"#ED7A2B":"#545454", fontSize:20, fontWeight:500, fontFamily:"inter" }} >Other Details</span>
                        </div>
                     </div>
                   </div> 
                   { state === "Performance" || state === '' ? <> <Performance /> </> : <></> }
                   { state === "OtherDetail" ? <> <OtherDetail /> </> : <></> }
                </div>
            </div> 
          </div>
         </div>
         <Footer />
      </div>
    </div>
  )
}
