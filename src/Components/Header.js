import React,{ useState, useEffect } from 'react';
//import Logo from '../images/logo.png';
import { MdOutlineMenuBook, MdQuestionMark } from 'react-icons/md';
import { BsFillBellFill } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
import { IoMdCard } from 'react-icons/io';
import { RxQuestionMarkCircled } from 'react-icons/rx';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { backendURL } from '../env';

export default function Header() {

  const Navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [LogoDat, setLogoDat] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const studentData = async() => {
   
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`${backendURL}/get/studentdetail`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.status == "001")
        console.log(result);
        setName(result.stu_data.name);
      })
      .catch(error => console.log('error', error));
  }


  const GetLogo = async()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${backendURL}/get/logo`, requestOptions)
      .then(response => response.json())
      .then(result => {console.log(result);
      if(result.status==1){
        setLogoDat(result.logo[0]?.logo);
      }})
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
    <>
       <nav className="navbar bg-light fixed-top py-4">
         <div className="container-fluid">
           <button onClick={handleShow} className="navbar-toggler border-0 shadow-none" type="button" >
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M20 21V24H3.5V21H20ZM27.5 10.5V13.5H0.5V10.5H27.5ZM24.5 0V3H8V0H24.5Z" fill="black"/>
            </svg>
           </button>
           <img src={LogoDat} className='' style={{ width:"30%" }} />
            <NavLink to="/Notification" className="text-decoration-none" >
              <BsFillBellFill style={{ fontSize:30, color:"#545454" }} />
            </NavLink>
         </div>
       </nav>
       <Offcanvas show={show} onHide={handleClose} style={{width:"75%"}} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           <div>
             <div className="offcanvas-body text-start">
               <NavLink to="/Profile" className="text-decoration-none" >
                <div className='row g-0 d-flex align-items-center justify-content-between'>
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
                   <div className='col-8 text-start ps-1' style={{ }}>
                     <div className='homelive-txt' style={{ fontSize:20, fontWeight:600, color:"#545454", fontFamily:"inter"}}>{name}</div>
                     <div className='sub-name-txt' style={{ fontSize:14, fontWeight:500, color:"#ED7A2B", fontFamily:"inter"}}>View Profile</div>
                   </div>
                 </div>
               </NavLink>
               <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mt-5">
                <NavLink to='/Course' className="text-decoration-none" >
                <li className="nav-item mb-4">
                   <div style={{ width:"100%", display:"flex", alignItems:"center" }} >
                     <MdOutlineMenuBook className='assi-nav-txt' style={{ fontSize:25, color:"#545454" }} />
                     <div className="nav-link active ps-3 assi-declr-txt" style={{ fontSize:20, color:"#545454", fontWeight:400, fontFamily:"inter" }} >My Courses</div>
                   </div>
                 </li>
                </NavLink>
                 <NavLink to="/MyExam" className="text-decoration-none" >
                 <li className="nav-item mb-4">
                   <div style={{ width:"100%", display:"flex", alignItems:"center" }} >
                     <CgNotes className='assi-nav-txt' style={{ fontSize:25, color:"#545454" }} />
                     <div className="nav-link active ps-3 assi-declr-txt" style={{ fontSize:20, color:"#545454", fontWeight:400, fontFamily:'inter' }} >My Exams</div>
                   </div>
                 </li>
                 </NavLink>
                 <NavLink to="/AskAbout" className='text-decoration-none' >
                 <li className="nav-item mb-4">
                   <div style={{ width:"100%", display:"flex", alignItems:"center" }} >
                     <MdQuestionMark className='assi-nav-txt' style={{ fontSize:25, color:"#545454" }} />
                     <div className="nav-link active ps-3 assi-declr-txt" style={{ fontSize:20, color:"#545454", fontWeight:400, fontFamily:"inter" }} >Ask Doubt</div>
                   </div>
                 </li>
                 </NavLink>
                 <NavLink to="/Payment" className="text-decoration-none" >
                 <li className="nav-item mb-4">
                   <div style={{ width:"100%", display:"flex", alignItems:"center" }} >
                     <IoMdCard className='assi-nav-txt' style={{ fontSize:25, color:"#545454" }} />
                     <div className="nav-link active ps-3 assi-declr-txt" style={{ fontSize:20, color:"#545454", fontWeight:400, fontFamily:"inter" }} >Paymetns</div>
                   </div>
                 </li>
                 </NavLink>
                 <NavLink to="/StudyMaterials" className="text-decoration-none" >
                 <li className="nav-item mb-4">
                   <div style={{ width:"100%", display:"flex", alignItems:"center" }} >
                     <IoMdCard className='assi-nav-txt' style={{ fontSize:25, color:"#545454" }} />
                     <div className="nav-link active ps-3 assi-declr-txt" style={{ fontSize:20, color:"#545454", fontWeight:400, fontFamily:"inter" }} >Study Material</div>
                   </div>
                 </li>
                 </NavLink>
                 <NavLink to="/Complains" className="text-decoration-none" >
                  <li className="nav-item mb-5">
                    <div style={{ width:"100%", display:"flex", alignItems:"center" }} >
                      <RxQuestionMarkCircled className='assi-nav-txt' style={{ fontSize:25, color:"#545454" }} />
                      <div className="nav-link active ps-3 assi-declr-txt" style={{ fontSize:20, color:"#545454", fontWeight:400, fontFamily:"inter" }} >Complaints</div>
                    </div>
                  </li>
                 </NavLink>
               </ul>
               <div className='log-btn p-3 text-white text-center' onClick={()=> {{ localStorage.removeItem("token");Navigate("Login") }}}>Log Out</div>
             </div>
           </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
