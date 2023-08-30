import React, { useEffect, useState } from 'react';
import Cardimg from '../images/cardimg.png';
import { NavLink } from 'react-router-dom';
import { backendURL } from '../env';


export default function EnrollLiveClass() {

    const[PreRecord, setPreRecord] = useState([]);

    const getEnrollLive = async() =>{
      var myHeaders = new Headers();
       myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch(`${backendURL}/get/enroll/live/cou`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result);
            if(result.status == "1"){
              setPreRecord([result.course]);
              localStorage.setItem("CourseName",result.course.name);
            }
          })
          .catch(error => console.log('error', error));
    }

    useEffect(() => {
      getEnrollLive();
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
                PreRecord?.map((item,index)=>{
                    return(
                      <div key={index} className='row'>
                        <div className='col-12 m-auto mt-2'>
                         <div className="card bg-white rounded-4 border-0" style={{padding:"8px"}} >
                          {/* <img src={item.banner} className="card-img-top" alt="..." style={{ borderRadius:10 }} /> */}
                          <img src={Cardimg} className="card-img-top" alt="..." style={{ borderRadius:10 }} />
                          <div className="card-body px-0">
                            <div className='text-start assi-declr-txt' style={{ fontSize:20, fontWeight:600, color:'#1E1E1E', fontFamily:'inter' }} >{item.name}</div>
                            {/* <NavLink to={`/CourseHistory/${item.name}`} className="text-decoration-none" > */}
                            <NavLink to="/CourseHistory" className="text-decoration-none" >
                             <div className='p-2 mt-2 assi-declr-txt' style={{ width:"100%", backgroundColor:"#fff", border:"1px solid #ED7A2B", borderRadius:5, color:"#ED7A2B", fontSize:18, fontWeight:600, fontFamily:'inter' }} >Go To Course</div>
                            </NavLink>
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
