import React, {useState} from 'react';
import Logo from '../images/logo.png';
import { HiMail, HiOutlineUser } from 'react-icons/hi';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { IoCallOutline } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router-dom';

export default function Register() {

  const[number,setNumber] = useState();
  const[name,setName] = useState();
  const[email,setEmail] = useState();
  console.log(number);
  
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  console.log(passwordInput);
  
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

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 login-section'>
            <div className='row pt-4 text-white'>
              <div className='col-10 me-auto ps-4 pt-5 pb-4'>
                <div className='text-start pt-5'>
                  <div style={{ fontFamily:"inter", fontWeight:500, fontSize:20 }} >Register with us</div>
                  <div className='assi-nav-txt' style={{ fontFamily:"inter", fontWeight:600, fontSize:24 }} >To Achieve Excellence</div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className='row'>
          <div className='col-12 mx-auto'>
            <div className='card login-card mt-5 bg-transparent'>
              <p className='text-start' style={{ fontFamily:"inter", fontSize:20, fontWeight:500, color:"#545454" }} >Enter Details</p>
              <div class="input-group p-1 mb-3" style={{ border:"1px solid #E4E4E4", borderRadius:5 }}>
                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">
                  <HiOutlineUser style={{ fontSize: 18, color:"#858585" }} />  
                </span>
                 <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} className="form-control border-0 py-2 shadow-none bg-transparent" placeholder="Enter Your Name" aria-label="Username"aria-describedby="basic-addon1" />
              </div> 
              <div class="input-group p-1 mb-3" style={{ border:"1px solid #E4E4E4", borderRadius:5 }}>
                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">
                  <IoCallOutline style={{ fontSize: 18, color:"#858585" }} />  
                </span>
                 <input type="number" maxLength={10} value={number} onChange={(e) => {setNumber(e.target.value)}} className="form-control border-0 py-2 shadow-none bg-transparent" placeholder="Enter Your Contact Number" aria-label="Username"aria-describedby="basic-addon1" />
              </div> 
              <div class="input-group p-1 mb-3" style={{ border:"1px solid #E4E4E4", borderRadius:5 }}>
                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">
                  <HiMail style={{ fontSize: 18, color:"#858585" }} />  
                </span>
                 <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="form-control border-0 py-2 shadow-none bg-transparent" placeholder="Enter Your Email Address" aria-label="Username"aria-describedby="basic-addon1" />
              </div> 
              <NavLink to='/SavePassword' className="text-decoration-none" >
                <div className='log-btn p-3 text-white' >Register</div>
              </NavLink>
              <p className='text-center mt-4 splash-2-text' style={{ fontFamily:'inter', fontWeight:400, fontSize:20 }} >Not a Student ? 
               <NavLink to="/Login" className="text-decoration-none" >
                <span className='splash-txt2' style={{ fontFamily:'inter', fontWeight:400, fontSize:20, cursor:"pointer" }} >Login Now</span>
               </NavLink>
              </p>
              <div className='col-10 mt-4 m-auto'>
               <img src={Logo} className='' style={{ width:"100%" }} />
              </div>
            </div> 
          </div>
        </div>  
      </div> 
    </>
  )
}
