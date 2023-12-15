import Image from 'next/image'
import hero from '../../public/hero.jpg'
import Link from 'next/link';
import Hero from './hero';
import Curriculum from './curriculum';

export default function Home() {

  return (
    <div>
      <Hero/>
      {/* <Curriculum/> */}
    </div>
    
   
  )
}