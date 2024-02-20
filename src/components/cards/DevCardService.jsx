import React from 'react';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/node.png';
import GitHub from '../../assets/github.png';
import Tailwind from '../../assets/tailwind.png';
import Postgres from '../../assets/posgrest.png';
import Mysql from '../../assets/mysql.png';
import Php from '../../assets/PHP.png';

const DevCardService = () => {
    return (
        <div className="md:flex md:flex-col md:w-[80%] md:rounded-4 md:h-[400px] 2xl:h-[500px] md:shadow-md md:shadow-gray-300 rounded-xl md:p-5">
            <h2 className='mt-5 md:text-3xl 2xl:text-4xl text-gray-700 font-semibold'>Desarrollo Web</h2>
            <p className='md:mt-5 md:text-[14px] 2xl:text-[16px] 2xl:mt-10 text-start text-gray-500'>
                Desarrollamos aplicaciones, páginas y sistemas web.
                Basados en tecnologías actuales y de mayor impacto,
                manejando los más altos estandares de calidad y entregando un producto final
                acorde a las necesidades planteadas por nuestros clientes.
            </p>
            <p className='md:mt-[10px] 2xl:mt-[30px] text-2xl text-start text-gray-500 font-bold inline border-b-4 border-amber-600 '>Tecnologias</p>
            <div className='mx-auto w-[100%] md:mx-0 grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-8'>
                <div className='rounded-[50%] shadow-md shadow-gray-300 hover:scale-110 duration-500 w-12 h-12'>
                    <img className='w-10 mx-auto mb-2' src={HTML} alt="HTML icon" />
                </div>
                <div className='rounded-[50%] shadow-md shadow-gray-300 hover:scale-110 duration-500 w-12 h-12'>
                    <img className='w-10 mx-auto mb-2' src={CSS} alt="HTML icon" />
                </div>
                <div className='rounded-[50%] shadow-md shadow-gray-300 hover:scale-110 duration-500 w-12 h-12'>
                    <img className='w-10 mx-auto mb-2' src={JavaScript} alt="HTML icon" />
                </div>
                <div className='rounded-[50%] shadow-md shadow-gray-300 hover:scale-110 duration-500 w-12 h-12'>
                    <img className='w-10 mx-auto mb-2' src={ReactImg} alt="HTML icon" />
                </div>
                <div className='rounded-[50%] shadow-md shadow-gray-300 hover:scale-110 duration-500 w-12 h-12'>
                    <img className='w-10 mx-auto mb-2' src={GitHub} alt="HTML icon" />
                </div>
                <div className='rounded-[50%] shadow-md shadow-gray-300 hover:scale-110 duration-500 w-12 h-12'>
                    <img className='w-10 mx-auto mb-2' src={Node} alt="HTML icon" />
                </div>
                <div className='rounded-[50%] shadow-md shadow-gray-300 hover:scale-110 duration-500 w-12 h-12'>
                    <img className='w-10 mx-auto mb-2' src={Php} alt="HTML icon" />
                </div>
                <div className='rounded-[50%] shadow-md shadow-gray-300 hover:scale-110 duration-500 w-12 h-12'>
                    <img className='w-10 mx-auto mb-2' src={Tailwind} alt="HTML icon" />
                </div>
                <div className='rounded-[50%] shadow-md shadow-gray-300 hover:scale-110 duration-500 w-12 h-12'>
                    <img className='w-[80px] mx-auto mb-2' src={Postgres} alt="HTML icon" />
                </div>
                <div className='rounded-[50%] shadow-md shadow-gray-300 hover:scale-110 duration-500 w-12 h-12'>
                    <img className='w-20 mx-auto mb-2' src={Mysql} alt="HTML icon" />
                </div>
            </div>
        </div>
    );
};

export default DevCardService;