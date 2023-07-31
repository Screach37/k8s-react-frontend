import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../env';

export default function EnrollPreRecord() {

    const[preRecord, setPreRecord] = useState([]);

    const getpreRecordEnroll = ()=>{
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch(`${API_URL}/get/enroll/prereccou`, requestOptions)
          .then(response => response.json())
          .then(result => {
            if(result.status == "1"){
              console.log(result);
              setPreRecord(result.prereccourse)
            }
          })
          .catch(error => console.log('error', error));
    }

    useEffect(() => {
      getpreRecordEnroll();
       if(!localStorage.getItem("token")){
       }
       else{
     
       }
     }, [])

  return (
    <div>
      <div classNameName='container-fluid'>
        <div classNameName='row'>
          <div className='col-12 px-3'>
            {
                preRecord.map((item,index)=>{
                    return(
                      <div key={index} className='row'>
                        <div className='col-12 m-auto mt-2'>
                         <div className="card bg-white rounded-4 border-0" style={{padding:"8px"}} >
                          <img src={item.banner} className="card-img-top" alt="..." style={{ borderRadius:10 }} />
                          <div className="py-1">
                            <div className='text-start assi-declr-txt' style={{ fontSize:20, fontWeight:600, color:'#1E1E1E', fontFamily:"inter" }} >{item.name}</div>
                            <NavLink to="/DownloadedCourse" className="text-decoration-none" >
                            <div className='p-2 mt-2 assi-declr-txt' style={{ width:"100%", backgroundColor:"#fff", border:"1px solid #ED7A2B", borderRadius:5, color:"#ED7A2B", fontSize:18, fontWeight:600, fontFamily:"inter" }} >Go To Course</div>
                            </NavLink>
                          </div>
                          <div className='my-2' style={{ width:"100%", height:8, backgroundColor:"#F1F1F1" }} >
                           <div className='' style={{ width:item.width + "%", height:8, backgroundColor:"#26D88D" }} ></div>
                          </div>
                         </div>
                        </div>
                      </div>
                    )
                })
            }
          </div>
        </div>
      </div> 
    </div>
  )
}
