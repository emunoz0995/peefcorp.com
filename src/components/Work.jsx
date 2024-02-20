import React from 'react';
import '../assets/css/work.css';
import { FaWhatsapp, FaMailBulk } from 'react-icons/fa';
import { Link } from 'react-scroll';
import info from '../data/info.json';


const Work = () => {


  setTimeout(function () {

    var $cont = document.querySelector('.cont');
    var $elsArr = [].slice.call(document.querySelectorAll('.el'));
    var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

    setTimeout(function () {
      $cont.classList.remove('s--inactive');
    }, 1100);

    $elsArr.forEach(function ($el) {
      $el.addEventListener('click', function () {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--el-active');
        this.classList.add('s--active');
      });
    });

    $closeBtnsArr.forEach(function ($btn) {
      $btn.addEventListener('click', function (e) {
        e.stopPropagation();
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
      });
    });

  }, 500)


  return (
    <div name='work' className='w-full md:h-screen text-gray-800'>
      <div className='w-full mx-auto flex flex-col justify-center h-full md:w-[1248px] md:ml-[80px] md:p-5 md:m-auto lg:m-auto 2xl:w-[1348px] 2xl:ml-[100px]'>
        <div className=' text-center md:text-left md:mt-10'>
          <p className=' text-4xl font-bold inline border-b-4 border-amber-600 '>Proyectos</p>
          <p className='pb-4 pt-2'>Conoce nuestros proyectos destacables</p>
        </div>
        <div className="cont s--inactive">
          {/* <!-- cont inner start --> */}
          <div className="cont__inner">
            {/* <!-- el start --> */}
            <div className="el">
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont shadow-md shadow-gray-800">
                    <h2 className="el__heading">Nigisu</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">
                      <div className='md:mx-auto md:mt-[5px] md:flex md:flex-col md:justify-center md:items-center md:w-[70%] md:shadow-md md:shadow-gray-500 md:bg-[#2e29296f]'>
                        <h1 className='inline border-b-4 border-amber-600 mb-4 '>Nigisu</h1>
                        <p className='text-2xl text-center mb-4'>Sistema Administrativo Financiero Contable.
                          completo, modular y accequible.</p>
                        <div className='flex gap-3 mb-3'>
                          <p className='text-[12px] text-start'>
                            Cuentas por cobrar. <br />
                            Cuentas por pagar.<br />
                            Contabilidad.<br />
                            Manejo de anexos transaccionales.<br />
                            Facturación electrónica<br />
                          </p>
                          <p className='text-[12px] text-start'>
                            Liquidaciones<br />
                            Retenciones electrónica<br />
                            Guía de remisión electrónica.<br />
                            Rol de pagos<br />
                            Importaciones / Exportaciones.<br />
                          </p>
                        </div>
                        <p className='text-[15px] text-center mb-1 '>contactanos</p>
                        <div className="flex gap-4 mb-3">
                          <a href={info.contac[0].url} target="_blank" className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaWhatsapp size={50} /> Whatsapp
                          </a>
                          <a href={info.contac[2].url} target="_blank" className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaMailBulk size={50} /> Email
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="el__close-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- el end -->
            <!-- el start --> */}
            <div className="el">
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont">
                    <h2 className="el__heading">Ecommerce</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">
                      <div className='md:mx-auto md:mt-[5px] md:flex md:flex-col md:justify-center md:items-center md:w-[70%] md:shadow-md md:shadow-gray-500 md:bg-[#2e29296f]'>
                        <h1 className='inline border-b-4 border-amber-600 mb-4 '>Ecommerce</h1>
                        <p className='text-2xl text-center mb-4'>Tienda online diseñada para administrar productos, cobros, e inventario.</p>
                        <div className='flex gap-3 mb-3'>
                          <p className='text-[12px] text-start'>
                            Inventario. <br />
                            Administracion.<br />
                            Cobros con tarjetas debito/credito.<br />
                            Promociones.<br />
                            Facturación<br />
                          </p>

                        </div>
                        <p className='text-[15px] text-center mb-1 '>contactanos</p>
                        <div className="flex gap-4 mb-3">
                          <a href={info.contac[0].url} target="_blank" className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaWhatsapp size={50} /> Whatsapp
                          </a>
                          <a href={info.contac[2].url} target="_blank" className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaMailBulk size={50} /> Email
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="el__close-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- el end -->
            <!-- el start --> */}
            <div className="el">
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont">
                    <h2 className="el__heading">Abydos</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">
                      <div className='md:mx-auto md:mt-[5px] md:flex md:flex-col md:justify-center md:items-center md:w-[70%] md:shadow-md md:shadow-gray-500 md:bg-[#2e29296f]'>
                        <h1 className='inline border-b-4 border-amber-600 mb-4 '>Abydos</h1>
                        <p className='text-2xl text-center mb-4'>Sistema administrativo de nomina para el personal</p>
                        <div className='flex gap-3 mb-3'>
                          <p className='text-[12px] text-start'>
                            Manejo de empleados. <br />
                            Procesamiento de roles de pago y haberes.<br />
                            Generación de archivos de texto.<br />
                            Reporteria.<br />
                            Control de horarios.<br />
                          </p>

                        </div>
                        <p className='text-[15px] text-center mb-1 '>contactanos</p>
                        <div className="flex gap-4 mb-3">
                          <a href={info.contac[0].url} target="_blank" className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaWhatsapp size={50} /> Whatsapp
                          </a>
                          <a href={info.contac[2].url} target="_blank" className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaMailBulk size={50} /> Email
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="el__close-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- el end -->
            <!-- el start --> */}
            <div className="el">
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont">
                    <h2 className="el__heading">Almafront</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">
                      <div className='md:mx-auto md:mt-[5px] md:flex md:flex-col md:justify-center md:items-center md:w-[70%] md:shadow-md md:shadow-gray-500 md:bg-[#2e29296f]'>
                        <h1 className='inline border-b-4 border-amber-600 mb-4 '>Almafront</h1>
                        <p className='text-2xl text-center mb-4'>Sistema web para administrar productos, cobros, e inventario.</p>
                        <div className='flex gap-3 mb-3'>
                          <p className='text-[12px] text-start'>
                            Inventario. <br />
                            Administración.<br />
                            Reporteria PDF/EXCEL.<br />
                            Control de almasenaje.<br />
                            Facturación<br />
                          </p>

                        </div>
                        <p className='text-[15px] text-center mb-1 '>contactanos</p>
                        <div className="flex gap-4 mb-3">
                          <a href={info.contac[0].url} target="_blank" className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaWhatsapp size={50} /> Whatsapp
                          </a>
                          <a href={info.contac[2].url} target="_blank" className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaMailBulk size={50} /> Email
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="el__close-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- el end -->
            <!-- el start --> */}
            <div className="el">
              <div className="el__overflow">
                <div className="el__inner">
                  <div className="el__bg"></div>
                  <div className="el__preview-cont">
                    <h2 className="el__heading">Mi Colacion</h2>
                  </div>
                  <div className="el__content">
                    <div className="el__text">
                      <div className='md:mx-auto md:mt-[5px] md:flex md:flex-col md:justify-center md:items-center md:w-[70%] md:shadow-md md:shadow-gray-500 md:bg-[#2e29296f]'>
                        <h1 className='inline border-b-4 border-amber-600 mb-4 '>MI COLACION</h1>
                        <p className='text-2xl text-center mb-4'>Sistema web de administracion y entrega de alimentos a entidades educativas.</p>
                        <div className='flex gap-3 mb-3'>
                          <p className='text-[12px] text-start'>
                            Inventario. <br />
                            Administracion.<br />
                            Reporteria PDF/EXCEL.<br />
                            Control de entrega de alimentos.<br />
                            Facturación<br />
                          </p>
                        </div>
                        <p className='text-[15px] text-center mb-1 '>contactanos</p>
                        <div className="flex gap-4 mb-3">
                          <a href={info.contac[0].url} target="_blank" className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaWhatsapp size={50} /> Whatsapp
                          </a>
                          <a href={info.contac[2].url} target="_blank" className='cursor-pointer hover:scale-110 duration-500 flex text-[12px] flex-col justify-center items-center' to='home' smooth={true} duration={500}>
                            <FaMailBulk size={50} /> Email
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="el__close-btn"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- el end --> */}
          </div>
          {/* <!-- cont inner end --> */}
        </div>
      </div>
    </div>

  );

};

export default Work;
