import React, {useState, useEffect} from 'react';
import Logo from '../images/logo.png';
import { HiMail } from 'react-icons/hi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { backendURL } from '../env';

export default function RecoverPassword() {

  const Navigate = useNavigate();
  
  const [passwordType2, setPasswordType2] = useState("password");
  const [passwordInput2, setPasswordInput2] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [Mail, setMail] = useState();
  
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  }
  const togglePassword = () => {
    if (passwordType === "password") {
        setPasswordType("text")
        return;
    }
    setPasswordType("password")
  }
  const handlePasswordChange2 = (evnt) => {
    setPasswordInput2(evnt.target.value);
  }
  const togglePassword2 = () => {
    if (passwordType2 === "password") {
        setPasswordType2("text")
        return;
    }
    setPasswordType2("password")
  }

const passwordMatch = () =>{
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": Mail,
      "password": passwordInput2,
      "cpassword": passwordInput
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${backendURL}/forgetpass3`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if(result.status == "1"){
          toast("Password updated");
          Navigate("/PasswordUpdate");
        }else{
          toast("Password doesn't match");
        }
      })
      .catch(error => console.log('error', error));
}

useEffect(() => {
  setMail(localStorage.getItem("email"));
}, [])

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 login-section'>
            <div className='row pt-4 text-white'>
              <div className='col-10 me-auto ps-4 pt-5 pb-4'>
                <div className='text-start pt-5'>
                  <div className='assi-nav-txt' style={{ fontFamily:'inter', fontSize:28, fontWeight:600 }} >Recover Password</div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className='row'>
          <div className='col-12 mx-auto'>
            <div className='card login-card mt-4 bg-transparent'>
              <p className='text-start' style={{ fontSize:20, fontWeight:500, color:"#545454", fontFamily:'inter' }} >Enter Password</p>
              <div class="input-group p-1 mb-3" style={{ border:"1px solid #E4E4E4", borderRadius:5 }}>
              <input type={passwordType2} onChange={handlePasswordChange2} value={passwordInput2} name="password" className="form-control border-0 py-2 shadow-none bg-transparent" placeholder="Enter Password" aria-label="Username"aria-describedby="basic-addon1" />
                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">
                  <span style={{ cursor:"pointer" }} className="border-0" onClick={togglePassword2} >
                      {passwordType2 == "password" ? <AiFillEyeInvisible style={{ fontSize:25, color:"#858585" }} /> : <AiFillEye style={{ fontSize:25, color:"#858585" }} />}
                  </span>
                </span>
              </div> 
              <div class="input-group p-1" style={{ border:"1px solid #E4E4E4", borderRadius:5 }}>
              <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="form-control border-0 py-2 shadow-none bg-transparent" placeholder="Confirm Password" aria-label="Username"aria-describedby="basic-addon1" />
                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">
                  <span style={{ cursor:"pointer" }} className="border-0" onClick={togglePassword} >
                      {passwordType == "password" ? <AiFillEyeInvisible style={{ fontSize:25, color:"#858585" }} /> : <AiFillEye style={{ fontSize:25, color:"#858585" }} />}
                  </span>
                </span>
              </div> 
              {/* <NavLink to='/PasswordUpdate' className="text-decoration-none mt-5" > */}
                <div onClick={()=> {passwordMatch()}} className='log-btn p-3 mt-5 text-white' >Reset Password</div>
              {/* </NavLink> */}
              <div className='col-10 mt-5 m-auto'>
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
