import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { API_URL } from '../env';


export default function OtherDetail() {

  const [Profile, setProfile] = useState([]);
  const Navigate = useNavigate();

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
       // console.log(result);
        if(result.status == "001")
        console.log(result);
        setProfile([result.stu_data]);
      })
      .catch(error => console.log('error', error));
  }

   useEffect(()=>{
     if(!localStorage.getItem("token")){
       Navigate("Login");
     }
     else{
       studentData();
     }
   },[]);

  return (
    <div>
       <div className='container-fluid'>
        {
          Profile?.map((item,index)=>{
            return(
                <>
                   <div className='row mb-3'>
                      <div className='card p-3 border-0 rounded-0 '>
                        <p className='text-start' style={{ fontSize:20, color:"#2E2E2E", fontWeight:500, fontFamily:'inter' }} >Personal Details</p>
                        <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Name <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;{item.name}</span></div>
                        <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Phone No. <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;+91 {item.phone}</span></div>
                        <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Email <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;{item.email}</span></div>
                      </div>
                    </div>  
                   <div className='row mb-3'>
                      <div className='card p-3 border-0 rounded-0 '>
                        <p className='text-start' style={{ fontSize:20, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Address Details</p>
                        <div className='text-start' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Address</div>
                        <div className='homelive-txt text-start py-2' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:'inter' }}>{item.address}</div>
                        {/* <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Pincode <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:'inter' }}>&nbsp;302021</span></div>
                        <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >City <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;Jaipur</span></div>
                        <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >State <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;Rajasthan</span></div>
                        <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Country <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;India</span></div> */}
                      </div>
                    </div>  
                  <div className='row mb-3'>
                   <div className='card p-3 border-0 rounded-0 '>
                    <p className='text-start' style={{ fontSize:20, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Family Details</p>
                    <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Father's Name <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;{item.father_name}</span></div>
                    <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Phone No. <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;+91 {item.father_phone}</span></div>
                    <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Email <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;{item.father_email}</span></div>
                    {/* <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Occupation <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:'inter' }}>&nbsp;Government Employee</span></div> */}
                    <div className='py-2'>
                      <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Mother's Name <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;{item.mother_name}</span></div>
                      {/* <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Phone No. <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;+91 9024974391</span></div>
                      <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Email <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;kadyan.harsh3030@gmail.com</span></div>
                      <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Occupation <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:'inter' }}>&nbsp;Housewife</span></div> */}
                    </div>
                  </div>
                </div> 
                {/* <div className='row mb-5'>
                 <div className='card p-3 border-0 rounded-0'>
                   <p className='text-start' style={{ fontSize:20, color:"#2E2E2E", fontWeight:500, fontFamily:'inter' }} >Institution Details</p>
                    <div className='text-start' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500 }} >Name of Institution</div>
                    <div className='homelive-txt text-start py-1' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>Savitribai Phule University</div>
                    <div className='text-start pt-2' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Type of Institution</div>
                    <div className='homelive-txt text-start py-1' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>College/University</div>
                    <div className='text-start pt-2 py-1' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Affiliation Code</div>
                    <div className='homelive-txt text-start' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>Rj20230623IJ34</div>
                    <div className='text-start pt-2' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Address of Institution</div>
                    <div className='homelive-txt text-start py-2' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:'inter' }}>Plot number 116, Lane no. 4, Rathore Nagar, Vaishali Nagar, Jaipur</div>
                    <div className='text-start homelive-txt pt-2' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:'inter' }} >Pincode <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;302021</span></div>
                    <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >City <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;Jaipur</span></div>
                    <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >State <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;Rajasthan</span></div>
                    <div className='text-start homelive-txt' style={{ fontSize:18, color:"#2E2E2E", fontWeight:500, fontFamily:"inter" }} >Country <span className='homelive-txt' style={{ fontSize:16, color:"#545454", fontWeight:400, fontFamily:"inter" }}>&nbsp;India</span></div>
                 </div>
               </div>  */}
             </>
            )
          })
        }
    </div>
  </div> 
  )
}
