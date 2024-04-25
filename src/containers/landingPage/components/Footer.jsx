import React from 'react'
import info from '../../../data/info.json';
import Logo from '../../../assets/peef.png';
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaMapPin, FaMobile, FaPhone } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Contact = () => {
  return (
    <footer className=' hidden md:flex justify-around bg-green-500/20 p-10 mt-24'>
      <div className='flex flex-col'>
        <p className='text-xm font-bold text-start mb-4'>Información de contacto</p>
        <div className='flex flex-col'>
          <div className='text-gray-500  flex flex-row'>
            <FaMailBulk /><p className='pl-2'>{info.email}</p>
          </div>
          <div className='text-gray-500  flex flex-row'>
            <FaMobile /><p className='pl-2'>{info.phone}</p>
          </div>
          <div className=' text-gray-500 flex flex-row mb-5'>
            <FaMapPin /><p className='pl-2'>{info.location}</p>
          </div>
        </div>
        <p className='text-xm font-bold text-start'>Siguenos</p>
        <div className='pt-6 pl-10 mx-auto gap-3 flex mb-5'>
          <div className='cursor-pointer w-10 h-10 flex rounded-full items-center justify-center'>
            <a target="_blank" href="#">
              <FaFacebook size={35} />
            </a>
          </div>
          <div className='cursor-pointer w-10 h-10 flex rounded-full items-center justify-center'>
            <a target="_blank" href="#">
              <FaInstagram size={35} />
            </a>
          </div>
        </div>
      </div>
      <div className='border border-gray-800'></div>
      <div className='flex flex-col justify-center text-gray-500 cursor-pointer gap-3 items-center'>
        <Link className='flex gap-1 w-full hover:text-amber-600' to='home' smooth={true} duration={500}>
          <FaHome size={20} />Home
        </Link>
        <Link className='flex gap-1 w-full hover:text-amber-600' to='about' smooth={true} duration={500}>
          Conocenos
        </Link>
        <Link className='flex gap-1 w-full hover:text-amber-600 pl-2' to='skills' smooth={true} duration={500}>
          Servicios
        </Link>
        <Link className='flex gap-1 w-full hover:text-amber-600 pl-2' to='work' smooth={true} duration={500}>
          Proyectos
        </Link>
      </div>
      <div className='border border-gray-500'></div>
      <div className='flex flex-col justify-center items-center'>
        <div className='h-full mx-auto max-w-[1000px] md:mx-auto md:px-8 md:flex md:flex-col md:justify-center '>
          <img className="w-[300px] md:w-[150px] 2xl:w-[250px] " src={Logo} alt="pick-user" />
        </div>
        <div className='h-full md:flex md:flex-col md:justify-center '>
          <p>© Copyright PeefCorp. Todos los derechos reservados 2024</p>
        </div>
      </div>
    </footer>
  )
}

export default Contact