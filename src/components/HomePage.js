import React from 'react'
import { Navbar1 } from './Navbar/Navbar1'
import { Navbar0 } from './Navbar/Navbar0'
import { DrawerLayout } from './DrawerLayout'


export const HomePage = () => {
  return (
    <>
    <Navbar0/>
    <Navbar1/>  
    <DrawerLayout/>  
    </>
  )
}
