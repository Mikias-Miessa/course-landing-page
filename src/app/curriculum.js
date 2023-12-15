import Image from 'next/image'
import curriculum from '../../public/curriculum.jpg'
import Link from 'next/link';

const Curriculum = () => {
  return (
    <div name='curriculum' className='h-screen bg-white w-full'>
        <div className="md:bg-[url('/curriculum.jpg')] md:bg-cover lg:bg-cotain md:bg-no-repeat  md:h-min pb-20">
          
          <div class="grid grid-cols-9 ">
            <div class="col-end-9 col-span-3">
              <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg md:max-w-2xl shadow">
              <h1 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Inside Our Best-in-Class Curriculum</h1>
              <h1 class="mb-3 mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Learn the Keys to Production-Ready Design</h1>
              <p class="text-sm font-small text-gray-700 dark:text-gray-100">Gain fluency in the fundamental tools of visual communication design — typography, color, and layout. GA’s visual design advisory board curates the innovative teaching approaches of our entire expert network to meet evolving employer demands. From Gestalt, to UX, to responsive design, students graduate ready to tackle the challenges they'll face on the job.</p>
              <h1 class="mb-3 mt-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Get a Head Start With Self-Paced Prep Lessons</h1>
              <p class="mb-5 text-sm font-small text-gray-700 dark:text-gray-100">Before day one, gain familiarity with the design software such as Sketch, Figma, or Photoshop via optional tutorials. We take a blended approach to learning, so you’ll complete a series of preparatory lessons before each session to get up to speed with the topic and make the most of collaboration time.</p>
              <a href="#" class="mt-5 items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-orange-300 hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Request Full Syllabus</a>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-6">
            <div class="col-end-6 col-span-2">
              <div class="block max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg md:max-w-xl shadow">
              <p class="mb-5 text-sm font-small text-gray-700 dark:text-gray-100"><strong>Unit1: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p class="mb-5 text-sm font-small text-gray-700 dark:text-gray-100"><strong>Unit2: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p class="mb-5 text-sm font-small text-gray-700 dark:text-gray-100"><strong>Unit3: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p class="mb-5 text-sm font-small text-gray-700 dark:text-gray-100"><strong>Unit4: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p class="mb-5 text-sm font-small text-gray-700 dark:text-gray-100"><strong>Unit5: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p class="mb-5 text-sm font-small text-gray-700 dark:text-gray-100"><strong>Unit6: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p class="mb-5 text-sm font-small text-gray-700 dark:text-gray-100"><strong>Unit7: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p class="mb-5 text-sm font-small text-gray-700 dark:text-gray-100"><strong>Unit8: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              <p class="mb-5 text-sm font-small text-gray-700 dark:text-gray-100"><strong>Unit9: </strong>loream temporibus distinctio pariatur alias corrupti reiciendis et</p>
              </div>
            </div>
          </div>


       </div>
    </div>
  )
}

export default Curriculum;