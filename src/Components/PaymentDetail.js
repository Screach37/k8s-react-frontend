import React, { useEffect, useState } from 'react';
import { Fees } from "./SvgIcon";
import { AiTwotoneCalendar } from "react-icons/ai";
import { ImArrowLeft2 } from 'react-icons/im';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { backendURL } from '../env';

export default function PaymentDetail() {

  const navigate = useNavigate();

   const {id} = useParams();
    const [Data, setData] = useState([]);

    const Api = async()=>{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let Token = await localStorage.getItem("token")
      myHeaders.append("Authorization", `Bearer ${Token}`);

      var raw = JSON.stringify({
        "emi_id": id
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(`${backendURL}/view/upcom/payments`, requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result);
          if(result.status==1){
            setData([result.upcom_payment]);
          }
        })
        .catch(error => console.log('error', error));
    }

    useEffect(() => {
      Api();
    }, [])
    
  return (
    <div>
    {
      Data?.map((res,key)=>{
        return(
          <>
          <div className='container-fluid p-0' style={{overflowX:"hidden", padding:"0px"}}>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card py-2 rounded-0 border-0'>
               <div className='row py-3'>
                  <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                    <button type='button' onClick={() => navigate(-1)} className='btn border-0' style={{ height:30, display:"flex", justifyContent:"center", alignItems:"center" }} ><ImArrowLeft2 style={{ fontSize:20 }} /></button>
                    <span className='text-start assi-nav-txt' style={{ fontWeight:600, fontSize:20, paddingLeft:10  }}>Payment Detail</span>
                  </div>
                </div>
              </div> 
            </div>
          </div>
          <div className='row m-3'>
           <div className='' style={{ display:"flex", alignItems:'center', justifyContent:"space-between" }} >
              <p style={{ color:"#858585", fontSize:22, fontWeight:400, fontFamily:'inter' }}>Amount</p>
              <p className='px-3 p-1 sub-assi-txt' style={{ color:"#FF0E0E", fontSize:16, fontWeight:400, backgroundColor:"#FFE1E1", borderRadius:5 }} >Unpaid</p>
            </div>
            <div className='text-start m-0' style={{ color:"#545454", fontSize:26, fontWeight:600, fontFamily:'inter' }} >₹ {res.emi_amount}</div>
             <div className='d-flex align-items-center mt-2' >
               <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:24, color:"#858585" }} />
               <div className='sub-assi-txt ps-2' style={{ fontSize:14, fontWeight:400, color:"#858585", fontFamily:"inter" }} >Due Date : {res.emi_date.split("T",1)}</div>
            </div>
            <div className='py-2 d-flex align-items-center mt-2' >
               <Fees className='sub-assi-txt' style={{ fontSize:24, color:"#858585" }} />
               <div className='sub-assi-txt ps-3' style={{ fontSize:14, fontWeight:400, color:"#858585", fontFamily:'inter' }} >{res.description.length>1?res.description:"No Course Founds"}</div>
            </div>
            <p className='text-start mt-2 assi-nav-txt' style={{ color:"#858585", fontSize:18, fontWeight:400, fontFamily:'inter' }}>Remark</p>
            <div className='text-start assi-nav-txt' style={{ color:"#545454", fontSize:20, fontWeight:500, fontFamily:"inter" }} >{res.remarks.length>1?res.remarks:"No Remark Founds"}</div>
          </div>
          <div className='fixed-bottom' style={{ width:"100%", }} >
          <div className='row px-4 py-5 d-flex align-items-center'>
           <div className='col-12 m-auto'>
            {/* <NavLink to='/PayNow' className="text-decoration-none" >
               <div className='log-btn p-4 text-white'>Pay Now</div>
             </NavLink>
             */}
             <NavLink className="text-decoration-none" >
               <div className='log-btn p-4 text-white'>Pay Now</div>
             </NavLink>
           </div>
          </div> 
         </div>
        </div>
          </>
        )
      })
    }
      
    </div>
  )
}
