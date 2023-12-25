'use client'
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const FormToPdfConverter = () => {
  const containerRef = useRef(null);

  const convertToPdf = async () => {
    const containerElement = containerRef.current;

    if (!containerElement) {
      console.error('Container element not found');
      return;
    }

    try {
      const canvas = await html2canvas(containerElement);

      const pdf = new jsPDF({
        orientation: 'landscape', // or 'landscape'
        unit: 'mm',
        format: 'a4', // or [width, height]
      });

      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);

      pdf.save('form.pdf');
    } catch (error) {
      console.error('Error converting to PDF', error);
    }
  };

  return (
    <div ref={containerRef} className="h-screen text-black flex flex-col items-center gap-10 bg-[url('/certeficateBg.png')] bg-center bg-contain bg-no-repeat">
      <h1>.</h1>
      <div>
        {/* Additional content goes here */}
        <p>.</p>
      </div>
      <form className='flex flex-col gap-56' >
        {/* <label htmlFor="name">Name:</label> */}
        <input type="text" id="date" name="date" className='border-b text-center' />

        {/* <label htmlFor="email">Email:</label> */}
        <input type="text" id="stname" name="stname" className='border-b mt-6 text-center font-bold text-4xl' />
        <input type="text" id="course" name="course" className='border-b -mt-36 text-center font-bold text-4xl pt-6' />

        {/* Add more form elements as needed */}
      </form>
      <button onClick={convertToPdf}>Convert to PDF</button>
    </div>
  );
};

export default FormToPdfConverter;
