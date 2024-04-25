import React from 'react';
import marcas from '../../../assets/marcas/marcas.png';

const SellCardService = () => {
    return (
        <div className="md:flex md:flex-col md:w-[80%] md:rounded-4 md:h-[400px] 2xl:h-[500px] md:shadow-md md:shadow-gray-300 rounded-xl md:p-5">
            <h2 className='mt-5 md:text-3xl 2xl:text-4xl text-gray-700 font-semibold '>Venta y mantenimiento de equipos </h2>
            <p className='mt-2 md:text-[14px] 2xl:text-[16px] text-start text-gray-500'>
                Somos proveedores directos de equipos informaticos, asi como tambien
                ofrecemos el servicio de mantenimiento preventivo y correctivo en desktops y laptops,
                asesoramiento personalizado.
            </p>
            <p className='md:mt-[6px] 2xl:mt-[46px] text-2xl text-start text-gray-500 font-bold inline border-b-4 border-amber-600 '>Marcas</p>
            <div className='mx-auto w-full md:mx-0 flex py-8'>
                <div className='hover:scale-110 duration-500'>
                    <img className='md:mt-[-29px] 2xl:mt-[-20px] md:w-[359px] 2xl:w-[400px] h-full' src={marcas} alt="marcas" />
                </div>
            </div>
        </div>
    );
};

export default SellCardService;