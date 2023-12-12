import Image from 'next/image'
import hero from '../../public/hero.jpg'
import Link from 'next/link';
import Hero from './hero';
import OverView from './overview';

export default function Home() {

  return (
    <div className='bg-white'>
      <Hero />
      <OverView/>
    </div>
    
   
  )
}