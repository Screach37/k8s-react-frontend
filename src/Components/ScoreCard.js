import React, { useEffect, useState } from 'react';
import { ImArrowLeft2 } from "react-icons/im";
import { Download } from './SvgIcon';
import { NavLink, useNavigate } from 'react-router-dom';

export default function ScoreCard() {

    const [table, setTable] = useState([]);

    const tblData = [
      {
        myans : "A",
        correctans : "B",
        marks : 1,
      },
      {
        myans : "A",
        correctans : "B",
        marks : 1,
      },
      {
        myans : "A",
        correctans : "B",
        marks : 1,
      },
    ]

    useEffect(()=>{
      setTable(tblData);
    })

    const navigate = useNavigate();

  return (
    <div>
        <div className='container-fluid'>
         <div classNameName='p-0' style={{ width:"100%", marginTop:"80px" }} >
             <div className='row'>
               <div className='col-md-12 P-0'>
                 <div className='row fixed-top'>
                    <div className='row py-2 mx-2 d-flex align-items-center'>
                        <button type='button' onClick={() => navigate(-1)} className='btn border-0 col-2' style={{ width:55, height:55, background: "rgba(46, 46, 46, 0.1)", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:50 }} ><ImArrowLeft2 style={{ fontSize:22 }} /></button>
                        <span className='text-center col-8' style={{ fontWeight:600, fontSize:22, paddingLeft:15  }}>My Scorecard</span>
                    </div>
                  </div> 
               </div>
            </div> 
            <div className='row px-3'>
               <div className='col-12 p-3 mt-5' style={{ color:'#000', fontSize:16, backgroundColor:"#fff", fontWeight:500, borderRadius:10 }} >Download Answer Sheet <Download /></div> 
            </div>
            <div className='row mt-5' style={{ }} >
              <div className='col-12'>
                <div className='card border-0' style={{ borderTopLeftRadius:40, borderTopRightRadius:40, }} >
                  <div className='py-4' style={{ fontSize:24, fontWeight:600 }} >Answer Sheet</div>
                 <table class="table">
                   <thead style={{ backgroundColor:"#F2F2F2", border:"1px solid #D8D8D8", }} >
                     <tr>
                       <th scope="col" style={{ borderRight:"1px solid #D8D8D8", fontWeight:400, fontSize:12 }}>Q No.</th>
                       <th scope="col" style={{ borderRight:"1px solid #D8D8D8", fontWeight:400, fontSize:12 }}>My Answer</th>
                       <th scope="col" style={{ borderRight:"1px solid #D8D8D8", fontWeight:400, fontSize:12 }}>Correct Answer</th>
                       <th scope="col" style={{ borderRight:"1px solid #D8D8D8", fontWeight:400, fontSize:12 }}>Marks</th>
                     </tr>
                   </thead>
                   <tbody className=''>
                     {
                       table.map((item,index)=>{
                        return(
                          <tr key={index} className='border-0'>
                            <th className='' style={{ borderRight:"1px solid #D8D8D8", borderBottom:"0px" }}>{(index+1)}</th>
                            <td style={{ borderRight:"1px solid #D8D8D8", borderBottom:"0px" }}>{item.myans}</td>
                            <td style={{ borderRight:"1px solid #D8D8D8", borderBottom:"0px" }}>{item.correctans}</td>
                            <td style={{ borderRight:"1px solid #D8D8D8", borderBottom:"0px" }}>+{item.marks}</td>
                          </tr>
                        )
                       })
                     }
                   </tbody>
                 </table>
                </div>
              </div>
            </div>
          </div>  
        </div>
    </div>
  )
}
