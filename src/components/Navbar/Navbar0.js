import React from 'react'
import { Nav } from 'react-bootstrap'

export const Navbar0 = () => {
    const navList=['FAQ','Contact'];
    const navColor='darkblue';
    const navLinkColor='white';
  return (
    <>
   
    <Nav className="justify-content-end" style={{backgroundColor:navColor}}>
    {navList&&navList.map((tab,index)=>(
        <Nav.Item>
       
          <Nav.Link key={index} href={`#${tab.toLowerCase()}`} style={{color:navLinkColor}} >{tab}</Nav.Link>
        
        </Nav.Item>
         ))}
      </Nav>

    </>
  )
}
