import React, { useState } from 'react';
import Logo from '../../../assets/favicon.png'
import {
  FaBars,
  FaTimes,
  FaHome,
  FaWhatsapp,
  FaCloudDownloadAlt,
  FaUserAlt,
  FaDownload,

} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import info from '../../../data/info.json';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleNavigate = () => {
    navigate(`/login`);
};

  return (
    <div className='fixed md:z-10 flex justify-between h-14 w-screen text-gray-600 text-[15px] shadow-base-300 shadow-lg px-14 bg-white'>
      {/* menu */}
      <div className='hidden md:flex justify-center items-center pl-10 cursor-pointer'>
        <Link to='home' smooth={true} duration={500}>
          <img className="w-[50px]" src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className='hidden md:flex pr-5 gap-5'>
        <li className=' hover:text-green-500 cursor-pointer duration-300 h-full'>
          <Link className='flex gap-1 pt-4' to='home' smooth={true} duration={500}>
            <FaHome size={20} />Home
          </Link>
        </li>
        <li className='hover:text-green-500 duration-300 cursor-pointer'>
          <Link className='flex gap-1 pt-4' to='about' smooth={true} duration={500}>
            Conocenos
          </Link>
        </li>
        <li className='hover:text-green-500 duration-300 cursor-pointer'>
          <Link className='flex gap-1 pt-4' to='skills' smooth={true} duration={500}>
            Servicios
          </Link>
        </li>
        <li className='hover:text-green-500 duration-300 cursor-pointer'>
          <Link className='flex gap-1 pt-4' to='work' smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        {/* <li className='hover:text-green-500 duration-300 flex h-full items-center cursor-pointer ml-3 mr-[-30px]' onClick={() => handleNavigate()}>
            <div className='flex gap-2 p-3 items-center  hover:bg-gray-300/20 border h-8 rounded-xl shadow-sm shadow-gray-300'>
             Iniciar sesión
            </div>
        </li> */}
        {/* <li className='hover:text-green-500 duration-300 cursor-pointer'>
          <Link className='flex gap-1 pt-4' to='contact' smooth={true} duration={500}>
            Contactanos
          </Link>
        </li> */}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 relative top-5 left-[-40px]'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'relative top-[60px] left-[-100px] w-[300px] h-screen text-white bg-gray-800/80 flex flex-col justify-center items-center'
        }
      >
        <li className='py-2 text-2xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Conocenos
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Servicios
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
        {/* <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li> */}
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#c9842b]'>
            <a
              className='flex justify-between items-center w-full px-3 text-white' target="_blank"
              href={info.contac[2].url}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#31ab43]'>
            <a
              className='flex justify-between items-center w-full px-3 text-white' target="_blank"
              href={info.contac[0].url}
            >
              Whatsapp <FaWhatsapp size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-red-500'>
            <a
              className='flex justify-between items-center w-full px-3 text-white' target="_blank"
              href={info.contac[1].url}
            >
              Instaladores <FaCloudDownloadAlt size={30} />
            </a>
          </li>
          <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gray-500'>
            <a
              className='flex justify-between items-center w-full px-3 text-white' target="_blank"
              href="https://mega.nz/folder/z6ZV1AKR#Jzyh7scGxFrzh4VdXs0cnA"
            >
              Peef <FaDownload size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
