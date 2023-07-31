import React,{useEffect} from 'react';
import Logo from '../images/logo.png';
import { NavLink,useNavigate } from 'react-router-dom';

export default function Splash2() {

  let Navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("token")){
     Navigate("/Login");
    }
    else{
     Navigate("/Home");
    }
  }, [])
  
  return (
    <div className='container-fluid'>
      <div className='row splash-2'>
        <div className='col-12 m-auto px-5'>
          <img src={Logo} className='' style={{ width:"100%" }} />
          <div className='row mt-4'>
            <div className='col-12 m-auto'>
               <NavLink to="/Login" className="text-decoration-none" >
                <div className='log-btn p-3 text-white' >Login</div>
               </NavLink>
              {/* <p className='text-center mt-4 splash-2-text' >Not a Student ? 
               <NavLink to="/Register" className="text-decoration-none">
                <span className='splash-txt2'>Register Now</span>
                  </NavLink>
              </p>*/} 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
