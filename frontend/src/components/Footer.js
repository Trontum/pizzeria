import React from 'react'

const Footer = () => {
    let date=new Date().getFullYear();
  return (
    <div style={{textAlign:'center'}}><p className='text-warning'><i>Copyrights @ {date} Pizzeria. All rights reserved</i></p></div>
  )
}

export default Footer