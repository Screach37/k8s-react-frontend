import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function AddComplaints() {

    const navigate = useNavigate();

    const [text, setText] = useState('');
    const [inputText, setInputText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);

    const changeHandler = (event) => {
        setText(event.target.value);
      };

      const handleInputChange = (event) => {
        setInputText(event.target.value);
      };

      const characterCount = inputText.length;


    useEffect(() => {
        // array of words
        const words = text.split(' ');
    
        // update word count
        let wordCount = 0;
        words.forEach((word) => {
          if (word.trim() !== '') {
            wordCount++;
          }
        });
        setWordCount(wordCount);
    
        // update char count (including whitespaces)
        setCharCount(text.length);
      }, [text]);


  return (
    <div>
      <div classNameName='p-0' style={{ width:"100%", marginTop:"80px", marginBottom:"90px" }} >
       <div className='row fixed-top'>
         <div className='col-md-12'>
           <div className='card py-2 rounded-0 border-0'>
            <div className='row py-3'>
               <div style={{ display:"flex", justifyContent:"", alignItems:"center" }}>
                 <div className='assi-nav-txt ps-3' style={{ fontWeight:600, fontSize:20 }}>Complaint Details</div>
               </div>
             </div>
           </div> 
         </div>
        </div>
        <div className='row p-3'>
            <div className='col-12'>
              <div className='text-start py-1' style={{ fontSize:16, color:"#2E2E2E", fontWeight:400, fontFamily:"inter" }} >Headline</div>
              <div class="input-group p-2 mb-3" style={{ backgroundColor:"#fff", borderRadius:5 }}>
                 <input type="text" value={inputText} onChange={handleInputChange} maxLength="30" className="form-control border-0 py-10 shadow-none bg-transparent" placeholder="Enter Topic of your complaint" aria-label="Username"aria-describedby="basic-addon1" />
              </div>
              <p className='char-count text-end' style={{ fontSize:14, fontWeight:400, color:"#B4B4B4" }}>{characterCount} / 30</p>
              <div>
              <div className='text-start py-1' style={{ fontSize:16, color:"#2E2E2E", fontWeight:400, fontFamily:"inter" }} >Description</div>
                <div>
                   <textarea
                       className='p-2 shadow-none'
                       value={text}
                       maxLength="1000"
                       onChange={changeHandler}
                       placeholder='Describe your complaint'
                       style={{ width:"100%", height:300, backgroundColor:"#fff", border:"none", borderRadius:5, boxShadow:"none"  }}
                      ></textarea>
                    <div>
                     <p className='char-count text-end' style={{ fontSize:14, fontWeight:400, color:"#B4B4B4" }}>
                      {charCount} / 1000
                     </p>
                 </div>
                </div>
              </div>
            </div>
        </div>
        <div className='row fixed-bottom px-4 py-4' style={{ backgroundColor:"transparent", alignItems:"center"  }} >
         <div className='ms-auto py-3 col-6 assi-declr-txt' onClick={() => navigate(-1)} style={{ backgroundColor:'#fff', borderRadius:5, color:"#ED7A2B", fontSize:16, fontWeight:500, alignItems:'center', justifyContent:"center", display:"flex", cursor:"pointer", fontFamily:"inter" }}>Cancel</div>
          <NavLink to="/FileClose" className="text-decoration-none col-6" >
           <div className=' ms-auto py-3 assi-declr-txt' style={{ backgroundColor:'#ED7A2B', borderRadius:5, color:"#fff", fontSize:16, fontWeight:500, alignItems:'center', justifyContent:"center", display:"flex", cursor:"pointer", fontFamily:'inter' }}>File Complaint</div>
          </NavLink>
        </div>
       </div>
    </div>
  )
}