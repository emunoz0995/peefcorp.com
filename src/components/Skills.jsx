import React from 'react';

import {
    FaClock,
    FaLaptopCode,
    FaBriefcase


} from 'react-icons/fa';
import DevCardService from './cards/DevCardService';
import SellCardService from './cards/SellCardService';
import ProviderCardService from './cards/ProviderCardService';

const Skills = () => {
    return (
        <div name='skills' className='flex flex-col h-screen md:flex md:flex-row'>
            {/* Container */}
            <div className='w-full mx-auto p-4 flex flex-col justify-center h-full md:w-[1248px] 2xl:w-[94%] md:ml-[80px] md:p-5'>
                <div className=' text-center md:mt-[4%] 2xl:mt-[3%] md:text-left text-gray-800'>
                    <p className='mt-[50px] text-4xl font-bold inline border-b-4 border-amber-600 '>Servicios</p>
                    <p className='py-2'>Soluciones eficientes a necesidades exigentes</p>
                </div>
                <div className="md:flex md:flex-col md:w-[100%] md:gap-10">
                    <div className=" flex flex-col md:w-full md:p-5 md:justify-center md:items-center md:flex-row md:gap-2">
                        <DevCardService />
                        <SellCardService />
                        <ProviderCardService />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
