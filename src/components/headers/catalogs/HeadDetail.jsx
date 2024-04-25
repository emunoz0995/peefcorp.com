import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const HeadDetail = ({ gameState }) => {

    var sumaTickes = gameState.games_playersGames?.reduce(function (total, dato) {
        return total + dato.total;
    }, 0);

    const players = (gameState.games_playersGames)?.length
    return (
        <div className='mb-5 flex w-full justify-between py-2 px-5 font-semibold bg-gradient-to-r from-[#0c55a5] to-[#3dbff2] rounded-md shadow-md shadow-gray-500/50'>
            <div className='flex flex-col'>
                <div className='flex gap-2'>
                    <h1 className='text-green-500 uppercase text-[23px]'>{gameState.name}</h1>
                </div>
                <p className='text-gray-300'>{`(${players} jugadores)`}</p>
                <p className='text-white'>Precio boleto: $ {gameState.costTikect} USD</p>
                <p className='text-white'>Fecha Juego: {gameState.gameDate}</p>
                <h1 className='text-white uppercase text-[18px] flex items-center'>Premio:  <FaDollarSign />{gameState.award}</h1>
            </div>
            <div className="bg-gray-500/50 text-white w-[30%] md:w-[12%] h-5/8 rounded-md flex flex-col justify-center items-center">
                <h1 className='text-3xl'>$ {sumaTickes}</h1>
                <h1>Recaudado</h1>
            </div>
        </div>
    );
};

export default HeadDetail;