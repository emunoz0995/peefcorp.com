import React from 'react';
import Logo from '../assets/about.png';
import Slider from 'react-slick';

const About = () => {

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', top: '10px', left: '15%', transform: 'translateX(-50%)' }}>
        <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div name='about' className='flex flex-col h-screen md:flex md:flex-row'>
      {/* Container */}
      <div className='max-w-3xl mx-auto md:pl-20 md:pr-8 flex flex-col justify-center text-start h-full mt-10 md:mt-5'>
        <div className='sm:text-left relative top-[8%] mb-10 md:mt-0'>
          <p className='text-4xl font-bold inline border-b-4 border-amber-600'>
            Sobre nosotros
          </p>
        </div>
        <div className='h-full mx-auto max-w-[1000px] md:mx-auto md:px-8 md:flex md:flex-col md:justify-center '>
          <img className="w-[300px] md:w-[450px] 2xl:w-[750px] " src={Logo} alt="pick-user" />
        </div>
      </div>
      <div className='max-w-3xl mx-auto md:pl-20 md:pr-8 px-8 flex flex-col justify-center text-start h-full mt-5'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Peef Corporation
        </h1>
        <p className='text-[#9ba6c9] py-4 max-w-[100%] md:max-w-[700px]'>
          se contruye luego de receptar muchas necesidades tecnológicas de los clientes a los cuales prestamos nuestro servicio profesional, al pasar de los años hemos adquirdo una experiencia en la cual podemos solventar y asesorar en cualquier tipo de requerimiento tecnológico y automatización de proceos mediante el desarrollo de plataformas web y base de datos.
        </p>
      </div>
    </div>
  );
};

export default About;
