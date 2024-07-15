import React from 'react'

const Home = () => {
  return (
    <div className="items-center max-w-6xl mx-auto p-3">
      <div>
        <span className='font-bold'>Welcome to DigiMedSync</span>
        <p>Your Health, Our Priority. Access expert medical care from the comfort of your home. 
        Our team of certified professionals is here to provide you with top-notch medical consultations, diagnoses, 
        and treatment plans tailored to your needs.
        </p>
      </div>
      <div>
        <img className='rounded-full w-max' src='./src/assets/images/home-page-img.jpg' alt='doctor toy figures'></img>
        <div>
          <ul>
          <p className='font-bold'>Our Doctors</p>
            <li>Dr. Henry Harper</li>
            <li>Dr. Raj Patel</li>
            <li>Dr. Sophie Nguyen</li>
            <li>Dr. Marcus Davis</li>
            <li>Dr. Elena Torres</li>
          </ul>
        </div>
        <button class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-slate-200 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-slate-200 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
          Request a live chat!
        </button>
      </div>
    </div>

  )
}

export default Home