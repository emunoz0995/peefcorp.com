import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//UI
import HomeLayout from '../../../layouts/HomeLayout';
import BreadTreeParts from '../../../components/breadcrumbs/BreadTreeParts';
import IconStatus from '../../../components/icons/IconStatus';
import DetailsBuy from '../../../components/sections/DetailsBuy';
import MainLoader from '../../../components/Loaders/MainLoader';
import { FaDollarSign } from 'react-icons/fa';

//SLICE
import { getGameAndPlayerThunk, initialStateGame } from '../../../store/slices/catalogs/games.slice';



const RegisterInGame = () => {
    const dispatch = useDispatch();
    const { game_id } = useParams();
    const playerInfo = JSON.parse(localStorage.getItem("playerInfo"));
    const playerId = playerInfo.userId;
    const gameState = useSelector(state => state.games);
    const isLoading = useSelector(state => state.isLoadingSlice);

    useEffect(() => {
        dispatch(getGameAndPlayerThunk(game_id,playerId));
        return () => {
            dispatch(initialStateGame())
        };
    }, [])

    return (
        <HomeLayout>
            {isLoading ? (
                <MainLoader />
            ) : (
                <div className="mx-5 my-5 w-full">
                    <BreadTreeParts titleOne={"Juegos"} toOne={"/"} titleTwo={"Todos"} toTwo={'/games'} titleTree={gameState.game.game?.name} />
                    <div className='md:w-full flex flex-col gap-3 py-5 md:px-2'>
                        <div className='flex w-full justify-between py-2 px-5 font-semibold bg-gradient-to-r from-[#0c55a5] to-[#3dbff2] rounded-md shadow-md shadow-gray-500/50'>
                            <div className='flex flex-col'>
                                <div className='flex gap-2'>
                                <div className='flex justify-center items-center mr-[2px]'>
                                        <IconStatus active={gameState.game.game?.active} />
                                    </div>
                                    <h1 className='text-green-500 uppercase text-[23px]'>{gameState.game.game?.name}</h1>
                                </div>
                                <p className='text-[13px] font-bold text-gray-300'>{'(9.2k jugadores)'}</p>
                                <p className='text-white'>Precio boleto: $ {gameState.game.game?.costTikect} USD</p>
                                <p className='text-white'>Fecha Juego: {gameState.game.game?.gameDate}</p>
                                <h1 className='text-white uppercase text-[18px] flex items-center'>Premio:  <FaDollarSign />{gameState.game.game?.award}</h1>
                            </div>
                            <div className="bg-cover bg-center bg-[url('../src/assets/logo6.jpg')] w-20 md:w-[11%] md:h-5/8 rounded-md"></div>
                        </div>
                    </div>
                    {isLoading ? <MainLoader/> :
                    <DetailsBuy
                        gameState={gameState.game}
                    /> 
                    }
                </div>
            )}
        </HomeLayout >
    );
};

export default RegisterInGame;