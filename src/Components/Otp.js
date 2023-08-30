import React, {useState,useEffect} from 'react';
import Logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { backendURL } from '../env';

export default function Otp() {
  
  const Navigate = useNavigate();

  const [Mail, setMail] = useState();
  
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [];
    
    const handleChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
    
        // Move focus to the next input field
        if (e.target.value !== '' && index < inputRefs.length - 1) {
          inputRefs[index + 1].focus();
        }
      };
    
      const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
          // Move focus to the previous input field on Backspace key press
          inputRefs[index - 1].focus();
        }
      };

      var processedOtp = otp.reduce(function(acc, val, index) {
        return acc + val;
      }, []);

      const verifyOtp = () =>{
        var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            "email": Mail,
            "otp": processedOtp
          });

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

          fetch(`${backendURL}/forgetpass2`, requestOptions)
            .then(response => response.json())
            .then(result => {
              console.log(result);
              if(result.status == true){
                console.log(result);
                toast("Valid otp");
                Navigate("/RecoverPassword");
              }else{
                toast("Invalid otp");
              }
            })
            .catch(error => console.log('error', error));
      }


      const sendMail = () =>{
        var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
      
          var raw = JSON.stringify({
            "email": Mail
          });
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
      
          fetch(`${backendURL}/forgetpass1`, requestOptions)
            .then(response => response.json())
            .then(result => {
              if(result.status == true){
                console.log(result);
                alert(result.message);
              }else{
                toast("Invalid email");
              }
            })
            .catch(error => console.log('error', error));
      }

      useEffect(() => {
        setMail(localStorage.getItem("email"));
      }, [])
      
  return (
    <>
      <div className='container-fluid bg-white' style={{ height:"100%", width:"100%" }} >
        <div className='row'>
          <div className='col-12 login-section'>
            <div className='row pt-4 text-white'>
              <div className='col-10 me-auto ps-2 pt-5 pb-4'>
                <div className='text-start pt-5'>
                  <div style={{ fontFamily:'inter', fontSize:28, fontWeight:600 }}>Recover Password</div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className='row'>
          <div className='col-12 mx-auto'>
            <div className='card login-card mt-5 bg-transparent'>
              <p className='text-start' style={{ fontSize:20, fontWeight:500, color:"#545454", fontFamily:"inter" }} >Enter OTP Received on<br></br> Registered E-Mail</p>
                <div class="d-flex flex-row mt-5">
                  {otp.map((digit, index) => (
                   <input type="number" class="form-control p-4" autofocus=""
                      key={index}
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      ref={(ref) => (inputRefs[index] = ref)}
                   />
                  ))}
                </div>
                <p className='text-start py-2' onClick={()=> {sendMail()}} style={{ fontSize:18, fontWeight:400, color:"#ED7A2B", cursor:"pointer", fontFamily:'inter' }} >Resend OTP</p>
                 {/* <NavLink to='/RecoverPassword' className="text-decoration-none" > */}
                   <div onClick={() => {verifyOtp()}} className='log-btn p-3 text-white mt-5' >Submit</div>
                 {/* </NavLink> */}
                   <div onClick={() => Navigate(-1)} className='p-3 mt-5' style={{ backgroundColor:'#F0F5FE', width:"100%", color:"#95A1B6", fontSize:16, fontWeight:600, borderRadius:5, cursor:"pointer", fontFamily:"inter" }} >Back</div>
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
