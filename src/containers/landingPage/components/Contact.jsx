import React from 'react'
import info from '../../../data/info.json';
import Logo from '../assets/peef.png';
import { FaFacebook, FaInstagram, FaMailBulk, FaMapPin, FaMobile, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div name='contact' className='flex flex-col h-screen md:flex md:flex-row'>
      <div className='max-w-3xl mx-auto pl-20 pr-8 flex flex-col justify-center text-start h-full mt-5'>
        <div className='sm:text-left relative md:top-[3%] 2xl:top-[-25px] md:mb-10 2xl:mb-[10px]'>
          <p className='text-4xl font-bold inline border-b-4 border-amber-600'>
            Contactanos
          </p>
        </div>
        <div className='flex flex-col items-center text-start md:mt-10 2xl:mt-0'>
          <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col'>
            <div className=' flex flex-col gap-3 bg-gray-600/50 md:w-[500px] md:shadow-md md:shadow-gray-500 md:h-[350px] 2xl:h-[500px] rounded-md p-3'>
              <input className='p-2 rounded-md' type="text" placeholder='Name' name='name' />
              <input className='p-2 rounded-md' type="email" placeholder='Email' name='email' />
              <textarea className='p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-white border-2 hover:bg-amber-600 hover:border-amber-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </div>
          </form >
        </div>

      </div>
      <div className='h-full mr-[220px] max-w-[1000px] md:px-8 md:flex md:flex-col md:justify-center '>
        <p className='ml-[-230px] text-2xl font-bold mb-[-20px]'>Siguenos en:</p>
        <div className='pt-6 pl-10 mx-auto gap-3 flex mb-5'>
          <div className='text-white  w-10 h-10 bg-[#9ba6c9] flex rounded-full items-center justify-center'>
            <FaFacebook size={25} />
          </div>
          <div className='text-white  w-10 h-10 bg-[#9ba6c9] flex rounded-full items-center justify-center'>
            <FaInstagram size={25} />
          </div>
        </div>
        <p className='ml-[-100px] text-2xl font-bold'>Información de contacto</p>
        <div className='pt-6 pl-10 mx-auto flex flex-col'>
          <div className='text-gray-500  flex flex-row'>
            <FaMailBulk /><p className='pl-4'>{info.email}</p>
          </div>
          <div className='text-gray-500  flex flex-row'>
            <FaMobile /><p className='pl-4'>{info.phone}</p>
          </div>
          <div className=' text-gray-500 flex flex-row mb-5'>
            <FaMapPin /><p className='pl-4'>{info.location}</p>
          </div>
          <div className='h-full mt-8 mx-auto max-w-[1000px] md:mx-auto md:px-8 md:flex md:flex-col md:justify-center '>
            <img className="w-[300px] md:w-[150px] 2xl:w-[250px] " src={Logo} alt="pick-user" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact