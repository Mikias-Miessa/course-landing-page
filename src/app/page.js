import Image from 'next/image'
import hero from '../../public/hero.jpg'
import Link from 'next/link';

export default function Home() {
//     const pageStyle = {
//   backgroundImage: `url('/hero.jpg')`,
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center', // Adjust as needed
//   height: '80vh',
// };
  return (
    <div name='hero' className='h-screen bg-white w-full'>
        <div   className="md:bg-[url('/hero.jpg')] md:bg-cover lg:bg-cotain md:bg-no-repeat  md:h-min pb-20">
          <div className="grid lg:grid-cols-5">
             <div className='lg:col-span-3 flex flex-col justify-center ml-10 lg:ml-40 mr-10 mt-10 md:mt-16'>
                <h3 className='text-black text-xs sm:text-sm font-medium mb-10 bg-blue-300 text-center w-fit px-1 md:tracking-wider'>MASTER THE DIGITAL LANDSCAPE: DIGITAL MARKETING UNLEASHED</h3>
                <h1 className='text-3xl font-bold md:text-5xl text-black tracking-wider md:leading-normal'>Visual Communication - Graphic Design</h1>
                <div className='visible md:hidden my-6'>
              <Image src={hero} alt='hero Image' className='w-fit '/>
                </div>
                <p className='text-black pt-4 sm:pt-8 pb-4 pr-8 lg:pr-20 font-medium text-base md:leading-loose md:tracking-wide'>
                  Are you ready to become a digital storyteller?
                  Our Digital Marketing course is your gateway to conquering
                  the dynamic realm of online promotion. Whether you're an aspiring marketer or
                  a business enthusiast, this course is designed to fuel your ambition.
                </p>
                <div className="md:relative fixed bottom-0 left-0 w-full bg-white p-4 md:bg-transparent">
                  <Link href='#about' className='group text-white hover:scale-105 duration-200 font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-amber-500 cursor-pointer'>
                    Apply Now
                  </Link>
                </div>
              </div>
          </div>
       </div>
    </div>
    
   
  )
}