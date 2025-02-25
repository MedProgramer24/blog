import React from 'react'

function Footer() {
  return (
    <div  style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' ,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' , borderTop: "1px solid #41464b"}}>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' , color:'white'}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white ' style={{textDecoration:"none"}} href=''>
        The Code Journal
        </a>
      </div>
    </div>
  )
}

export default Footer