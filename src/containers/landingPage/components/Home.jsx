import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import info from '../../../data/info.json';
import Logo from '../../../assets/peef.png';
import '../../../assets/css/home.css';
import {
  FaMailBulk,
  FaMobile,
  FaMapPin,
} from 'react-icons/fa';


const Home = () => {
  return (
    <div name='home' className='flex flex-col h-screen md:flex md:flex-row '>
      {/* Container */}
      <div className='max-w-3xl mx-auto md:pl-20 md:pr-8 pl-10 pr-8 flex flex-col justify-center text-start h-full mt-16 md:mt-5'>
        <p className='text-amber-600 text-[25px]'>Bienvenidos!</p>
        <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>
          {info.name}
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Somos {info.title}
        </h2>
        <p className='text-[#9ba6c9] py-4 max-w-[100%] md:max-w-[700px]'>
          {info.description}
        </p>
        <div>
          <a
            className='hidden text-gray-500 w-[160px] border-2 px-6 py-3 my-2 md:flex items-center hover:bg-green-400 hover:border-green-400' target="_blank"
            href={info.contac[0].url}
          >
            Contactanos
            <span className='group-hover:rotate-90 duration-300' >
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </a>

        </div>
      </div>
      <div className='h-full mx-auto max-w-[1000px] md:mx-auto md:px-8 md:flex md:flex-col md:justify-center '>
        <img className="w-[300px] md:w-[450px] 2xl:w-[550px] " src={Logo} alt="pick-user" />
      </div>
    </div>
  );
};

export default Home;
