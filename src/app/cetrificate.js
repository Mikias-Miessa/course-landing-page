import React from 'react'

const Certificate = () => {

    // Create a new Date object representing the current date and time
const currentDate = new Date();

// Get individual components of the date
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Note: Months are zero-based, so we add 1
const day = currentDate.getDate();

// Format the date as a string (e.g., "YYYY-MM-DD")
const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  return (
      <div className=" text-black bg-[url('/certeficateBg.png')] bg-center bg-contain bg-no-repeat h-screen ">
          <div className="">
            <form  className='flex flex-col items-center '>
                    {/* <label htmlFor="name">Name:</label> */}
                    <input type="text" id="Date" name="Date" className='font-semibold text-lg text-center mt-32' value={formattedDate}/>

                    {/* <label htmlFor="email">Email:</label> */}
                    <input type="text" id="Name" name="Name"  />

                    {/* Add more form elements as needed */}
            </form>
          </div>
          
    </div>
  )
}

export default Certificate