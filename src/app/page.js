import React from 'react'
import OverView from './overview'
import Curriculum from './curriculum'
import Hero from './hero'
import Nav from './nav'
import Instructors from './instructors'
import FAQ from './faq'

const page = () => {
  return (
    <div className='bg-white w-full'>
          <Hero />
          <Nav/>
          <OverView />
          <Curriculum /> 
          <Instructors />
          <FAQ/>
    </div>
  )
}

export default page