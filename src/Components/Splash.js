import React from 'react';
import Logo from '../images/logo.png';

export default function Splash() {
  return (
    <div className='container-fluid'>
      <div className='splash-screen'>
        <img src={Logo} className='' style={{ width:"50%" }} />
      </div>
    </div>
  )
}
