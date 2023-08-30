import React, { useEffect, useState } from 'react';
import { Fees } from "./SvgIcon";
import { AiTwotoneCalendar } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { backendURL } from '../env';

export default function UpcomingPayment() {

  const [payment, setPayment] = useState([]);
  //const [id, setid] = useState("");
    

   const Api = async()=>{
    var myHeaders = new Headers();
     let Token = await localStorage.getItem("token");

    myHeaders.append("Authorization", `Bearer ${Token}`);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`${backendURL}/get/upcom/payments`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if(result.status==1){
          setPayment(result.upcom_payment);
          //setid(result.invoice_id);
        }
        else{

        }
      })
      .catch(error => console.log('error', error));
   }


  
  const data = [
    {
      amount : 19867,
      duedate : "19 April 2023",
      name : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
    {
      amount : 19867,
      duedate : "19 April 2023",
      course : "BCA Second Semester Fees",
    },
  ]

  useEffect(()=>{
    Api();
   
  },[]);

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
             {
              payment.length>0?
               payment?.map((item,index)=>{
                 return (
                    <>
                     <div key={index} className='card mt-3 p-3 border-0'>
                       <div className='' style={{ display:"flex", alignItems:'center', justifyContent:"space-between" }} >
                         <p style={{ color:"#858585", fontSize:16, fontWeight:400, fontFamily:'inter' }}>Amount</p>
                         <p className='px-3 p-1 sub-assi-txt' style={{ color:"#FF0E0E", fontSize:14, fontWeight:400, backgroundColor:"#FFE1E1", borderRadius:5, fontFamily:'inter' }} >Unpaid</p>
                       </div>
                       <div className='text-start m-0' style={{ color:"#545454", fontSize:26, fontWeight:600, fontFamily:'inter ' }} >₹ {item.emi_amount}</div>
                        <div className='d-flex align-items-center' >
                           <AiTwotoneCalendar className='sub-assi-txt' style={{ fontSize:24, color:"#858585" }} />
                           <div className='sub-assi-txt ps-2' style={{ fontSize:16, fontWeight:400, color:"#858585", fontFamily:'inter' }} >Due Date : {item.emi_date.split("T",1)}</div>
                        </div>
                        <div className='py-2 d-flex align-items-center' >
                           <Fees className='sub-assi-txt' style={{ fontSize:24, color:"#858585" }} />
                           <div className='sub-assi-txt ps-3' style={{ fontSize:16, fontWeight:400, color:"#858585", fontFamily:'inter' }} >{item.description}</div>
                        </div>
                        <div className='row mt-2'>
                           <NavLink to={`/PaymentDetail/${item.invoice_id}`} className="text-decoration-none col-6">
                             <button type='button' className='btn btn-outline py-3 sub-assi-txt' style={{ width:"100%", border:'1px solid #ED7A2B', color:"#ED7A2B", borderRadius:5, fontFamily:'inter' }} >View Details</button>
                           </NavLink>
                           {/*
                           <NavLink to="/PayNow" className="text-decoration-none col-6">
                             <button type='button' className='btn py-3 sub-assi-txt' style={{ width:"100%", color:"#fff", backgroundColor:"#ED7A2B", borderRadius:5, fontFamily:'inter' }} >Pay Now</button>
                           </NavLink>
                            */}
                           <NavLink  className="text-decoration-none col-6">
                             <button type='button' className='btn py-3 sub-assi-txt' style={{ width:"100%", color:"#fff", backgroundColor:"#ED7A2B", borderRadius:5, fontFamily:'inter' }} >Pay Now</button>
                           </NavLink>
                        </div>
                      </div>
                    </>
                 )
               }):<><div className="mt-5" style={{color:"red"}}><h6>No Data Founds</h6></div></>
             }
          </div>
        </div>
      </div>
    </div>
  )
}
