import React from 'react';

function Header() {
  return (
    <div className='header'>
        <div><img src='covid19-logo.png' alt='covid19 information' /></div>
        <div className='fw-700 mt-3'>Global and Country Wise Cases of Corona Virus</div>
        <div className='mt-1'>(For a Particular country, select a Country from below)</div>
    </div>
  )
}

export default Header;