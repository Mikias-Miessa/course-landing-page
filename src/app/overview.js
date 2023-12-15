import React from 'react';
// Import your CSS file

const OverView = () => {
  return (
    <div className='relative h-screen bg-white text-black grid lg:grid-cols-5 px-10 '>
      <div className='hidden lg:block lg:col-span-1 sticky-top'></div>
      <div className='lg:col-span-4'></div>
    </div>
  );
}

export default OverView;
