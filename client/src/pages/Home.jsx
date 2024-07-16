import React from 'react'

const Home = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 max-w-6xl mx-auto p-10 gap-10">
      <div className='bg-slate-200 p-3 rounded-3xl content-center border-4 border-gray-300 border-separate'>
        <h1 className='font-bold text-4xl pb-5 text-center'>Welcome to DigiMedSync</h1>
        <p>Your Health, Our Priority. Access expert medical care from the comfort of your home.
          Our team of certified professionals is here to provide you with top-notch medical consultations, diagnoses,
          and treatment plans tailored to your needs.
        </p>
      </div>
      <div className='row-start-1 col-start-2 bg-red-800 rounded-3xl'></div>
      <div className='flex flex-col items-center justify-center mx-auto'>
        <h1 className='font-bold text-4xl pb-5 text-center'>Online Centre 24/7</h1>
        <button className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-slate-200 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-slate-200 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
          Request a live chat!
        </button>
        <h1 className='font-bold text-4xl pb-5 pt-5 text-center'>Medical Centre Hours</h1>
        <ul className='p-3 space-y-3 text-center'>
          <li>Monday – Friday –  <span className='font-bold'>8AM – 6.00PM</span></li>
          <li>Saturday – <span className='font-bold'>9.30AM – 1.30PM</span></li>
          <li>Sunday – <span className='font-bold'>Closed</span></li>
          <li>Public Holidays – <span className='font-bold'>Closed</span></li>
        </ul>

      </div>
      <div className='row-start-2 col-start-1 col-span-2'>
        <img className='rounded-3xl' src='./src/assets/images/home-page-img.jpg' alt='doctor toy figures'></img>
      </div>
      <div className='row-start-2 col-start-3 bg-slate-200 rounded-3xl content-center border-4 border-gray-300 border-separate'>
        <ul className='p-20 space-y-3 text-center'>
          <p className='font-bold p-2 text-4xl'>Our Doctors</p>
          <li>Dr. Henry Harper</li>
          <li>Dr. Raj Patel</li>
          <li>Dr. Sophie Nguyen</li>
          <li>Dr. Marcus Davis</li>
          <li>Dr. Elena Torres</li>
        </ul>
      </div>
    </div>

  )
}

export default Home