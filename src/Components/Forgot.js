import React, {useState} from 'react';
import Logo from '../images/logo.png';
import { HiMail } from 'react-icons/hi';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../env';

export default function Forgot() {

  const Navigate = useNavigate();

  const[email,setEmail] = useState();

  const sendMail = () =>{
    var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        "email": email
      });
      localStorage.setItem("email",email);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
  
      fetch(`${API_URL}/forgetpass1`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.status == true){
            console.log(result);
            alert(result.message);
            Navigate("/Otp");
          }else{
            toast("Invalid email");
          }
        })
        .catch(error => console.log('error', error));
  }

  return (
    <>
      <div className='container-fluid bg-white' style={{ height:"100%", width:"100%" }} >
        <div className='row'>
          <div className='col-12 login-section'>
            <div className='row pt-4 text-white'>
              <div className='col-10 me-auto ps-4 pt-5 pb-4'>
                <div className='text-start pt-5'>
                  <div style={{ fontFamily:'inter', fontSize:28, fontWeight:600 }} >Recover Password</div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className='row'>
          <div className='col-12 mx-auto'>
            <div className='card login-card mt-5 bg-transparent'>
              <p className='text-start' style={{ fontSize:20, fontWeight:500, color:"#545454", fontFamily:'inter' }} >Enter Registered Email</p>
              <div class="input-group p-1 mb-3" style={{ border:"1px solid #E4E4E4", borderRadius:5 }}>
                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">
                  <HiMail style={{ fontSize: 25, color:"#858585" }} />  
                </span>
                 <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="form-control border-0 py-2 shadow-none bg-transparent" placeholder="john.doe@gmail.com" aria-label="Username"aria-describedby="basic-addon1" />
              </div> 
              {/* <NavLink to='/Otp' className="text-decoration-none" > */}
                <div onClick={()=> {sendMail()}} className='log-btn p-3 text-white mt-5' >Proceed</div>
              {/* </NavLink> */}
              <NavLink to='/Login' className="text-decoration-none" >
                <div className='p-3 mt-5' style={{ backgroundColor:'#F0F5FE', width:"100%", color:"#95A1B6", fontSize:16, fontWeight:600, borderRadius:5, cursor:"pointer", fontFamily:"inter" }} >Back to Login</div>
              </NavLink>
              <div className='col-10 mt-4 m-auto'>
               <img src={Logo} className='' style={{ width:"100%" }} />
              </div>
            </div> 
          </div>
        </div>  
      </div> 
      <ToastContainer autoClose={5000}/>
    </>
  )
}
