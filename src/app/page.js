import React from 'react'
import OverView from './overview'
import Curriculum from './curriculum'
import Hero from './hero'
import Nav from './nav'
import Instructors from './instructors'

const page = () => {
  return (
    <div className='bg-white'>
          <Hero />
          <Nav/>
          <OverView />
          <Curriculum /> 
          <Instructors/>
    </div>
  )
}

export default page