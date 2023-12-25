'use client'
import React from 'react'
import OverView from './overview'
import Curriculum from './curriculum'
import Hero from './hero'
import Nav from './nav'
import Instructors from './instructors'
import FAQ from './faq'
import Tuition from './tuition'
import Certificate from './cetrificate'
import FormToPdfConverter from './pdf'

const page = ({training}) => {
  return (
    <div className='bg-white w-full'>
          {/* <Hero training={training} />
          <Nav/>
          <OverView />
          <Curriculum /> 
          <Instructors />
          <Tuition/>
          <FAQ/> */}
      {/* <Certificate/> */}
      <FormToPdfConverter/>
    </div>
  )
}

export default page