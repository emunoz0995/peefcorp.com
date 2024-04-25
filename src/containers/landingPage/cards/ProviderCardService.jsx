import React from 'react';
import factsistem from '../../../assets/facSys.png';
import abidos from '../../../assets/abydos.png';


const ProviderCardService = () => {
    return (
        <div className="md:flex md:flex-col md:w-[80%] md:rounded-4 md:h-[400px] 2xl:h-[500px] md:shadow-md md:shadow-gray-300 rounded-xl md:p-5">
            <h2 className='mt-5 md:text-3xl 2xl:text-4xl text-gray-700 font-semibold '>Proveedores de sistemas </h2>
            <p className='mt-2 md:text-[14px] 2xl:text-[16px] text-start text-gray-500'>
                Somos dueños de sistemas de administracion finaciera y contable:
            </p>
            <p className='pl-3 mt-2 md:text-[14px] 2xl:text-[16px] text-start text-gray-500'>
                <h1 className='font-bold'>Nigisu</h1> -
                Sistema de administraicion contable - completo, modular y accequible. <br />
                <h1 className='font-bold'>Abydos</h1> -
                Sistema de administracion de nomita.
            </p>
            <div className='mx-auto w-[100%] md:mx-auto flex gap-5 justify-center items-center h-full py-8'>
                <div className='rounded-[50%] shadow-md shadow-gray-300 hover:scale-110 duration-500 md:w-[70px] md:h-[70px] 2xl:w-24 2xl:h-24'>
                    <img className='w-[90px] mx-auto mb-2' src={factsistem} alt="HTML icon" />
                </div>
                <div className='rounded-[50%] shadow-md shadow-gray-300 hover:scale-110 duration-500 md:w-[70px] md:h-[70px] 2xl:w-24 2xl:h-24'>
                    <img className='w-[90px] mx-auto mb-2' src={abidos} alt="HTML icon" />
                </div>
            </div>
        </div>
    );
};

export default ProviderCardService;