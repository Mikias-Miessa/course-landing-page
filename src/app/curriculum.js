import Image from 'next/image'
import curriculum from '../../public/curriculum.jpg'
import Link from 'next/link';

const Curriculum = () => {
  return (
    <div name='Curriculum' className=' bg-white w-full'>
        <div className="md:bg-[url('/bg.jpg')] md:bg-cover lg:bg-cotain md:bg-no-repeat  md:h-min pb-20">
          
          <div className="grid grid-cols-9 ">
            <div className="col-end-9 col-span-3">
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg md:max-w-2xl shadow">
              <h1 className="mb-2 text-3xl font-bold tracking-tight  text-black">Inside Our Best-in-className Curriculum</h1>
              <h1 className="mb-3 mt-2 text-xl font-bold tracking-tight  text-black">Learn the Keys to Production-Ready Design</h1>
              <p className="text-sm font-small text-black ">Gain fluency in the fundamental tools of visual communication design — typography, color, and layout. GA’s visual design advisory board curates the innovative teaching approaches of our entire expert network to meet evolving employer demands. From Gestalt, to UX, to responsive design, students graduate ready to tackle the challenges they'll face on the job.</p>
              <h1 className="mb-3 mt-1 text-xl font-bold tracking-tight  text-black">Get a Head Start With Self-Paced Prep Lessons</h1>
              <p className="mb-5 text-sm font-small  text-black">Before day one, gain familiarity with the design software such as Sketch, Figma, or Photoshop via optional tutorials. We take a blended approach to learning, so you’ll complete a series of preparatory lessons before each session to get up to speed with the topic and make the most of collaboration time.</p>
              <a href="#" className="mt-5 items-center px-4 py-2 text-sm font-medium text-center  bg-white border border-orange-300 hover:bg-gray-100 focus:ring-4 focus:outline-none text-black dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Request Full Syllabus</a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6">
            <div className="col-end-6 col-span-2">
              <div className="block max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg md:max-w-xl shadow">
              <p className="mb-5 text-sm font-small  text-black"><strong>Unit1: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p className="mb-5 text-sm font-small  text-black"><strong>Unit2: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p className="mb-5 text-sm font-small  text-black"><strong>Unit3: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p className="mb-5 text-sm font-small  text-black"><strong>Unit4: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p className="mb-5 text-sm font-small text-black "><strong>Unit5: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p className="mb-5 text-sm font-small  text-black"><strong>Unit6: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p className="mb-5 text-sm font-small text-black "><strong>Unit7: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p className="mb-5 text-sm font-small text-black "><strong>Unit8: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p className="mb-5 text-sm font-small  text-black"><strong>Unit9: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              </div>
            </div>
          </div>


       </div>
    </div>
  )
}

export default Curriculum;