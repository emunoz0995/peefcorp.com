import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from 'react-router-dom';
//UI
import HomeLayout from '../../../layouts/HomeLayout';
import MainLoader from '../../../components/Loaders/MainLoader';
import IconStatus from '../../../components/icons/IconStatus';
import { FaDollarSign } from 'react-icons/fa';
import Toast from '../../../utils/toast';
import BtnTable from '../../../components/buttons/BtnTable'
import BreadTreeParts from '../../../components/breadcrumbs/BreadTreeParts';
//SLICE
import { getGameOfPlayerThunk, initialStateGame } from '../../../store/slices/catalogs/games.slice';
import { generateCardsThunk, setInitialState } from '../../../store/slices/procedures/generateCards.slice';
import { formatDateToLocal } from '../../../utils/funtions';


const MyGame = () => {

    const { game_id } = useParams();
    const gamesState = useSelector(state => state.games);
    const isLoading = useSelector(state => state.isLoadingSlice);
    const cardsState = useSelector(state => state.cards);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGameOfPlayerThunk(game_id));
        return () => {
            dispatch(initialStateGame())
        };
    }, []);

    if (gamesState.message === "resource deleted successfully") {
        dispatch(getGamesThunk());
    }

    if (gamesState.error === "invalid token") {
        Toast.fire({
            icon: 'error',
            title: 'Su sesión ha caducado!, vuelva a iniciar sesión'
        })
        setTimeout(() => {
            navigate("/login");
        }, 2000);
    }

    const handleGenerate = (ticketId) => {
        dispatch(generateCardsThunk(ticketId))
    }

    if (gamesState.error) {
        console.log(gamesState.error)
    }

    if (cardsState.message === 'cards generated successfully') {
        dispatch(getGameOfPlayerThunk(game_id));
        dispatch(setInitialState())
    }

    console.log(gamesState)

    return (
        <HomeLayout>
            {isLoading ? (
                <MainLoader />
            ) : (
                <div className="mx-5 my-5 w-full h-screen">
                    <BreadTreeParts titleOne={"Juegos"} toOne={"/games"} titleTwo={"Mis juegos"} toTwo={'/gamesOfPlayer'} titleTree={gamesState.game.game_player?.name} />
                    <div className='w-full flex flex-col gap-3 py-5 2xl:px-2'>
                        <div className='flex w-full justify-between py-2 px-5 font-semibold bg-gradient-to-r from-[#0c55a5] to-[#3dbff2] rounded-md shadow-md shadow-gray-500/50'>
                            <div className='flex flex-col'>
                                <div className='flex gap-2'>
                                    <div className='flex justify-center items-center mr-[2px]'>
                                        <IconStatus active={gamesState.game.game_player?.active} />
                                    </div>
                                    <h1 className='text-green-500 uppercase text-[23px]'>{gamesState.game.game_player?.name}</h1>
                                </div>
                                <p className='text-[13px] font-bold text-gray-300'>{'(9.2k jugadores)'}</p>
                                <p className='text-white'>Fecha Juego: {formatDateToLocal(gamesState.game.game_player?.gameDate)}</p>
                                <h1 className='text-white uppercase text-[18px] flex items-center'>Premio:  <FaDollarSign />{gamesState.game.game_player?.award}</h1>
                            </div>
                            <div className="bg-cover bg-center bg-[url('../src/assets/logo6.jpg')] w-20 md:w-[11%] md:h-5/8 rounded-md"></div>
                        </div>
                    </div>
                    {gamesState.game.game_tickets?.map(game => (
                        <div className='w-full mt-3 flex flex-col border rounded-md shadow-lg shadow-gray-300 p-2 bg-white'>
                            {game.card_tickets.length > 0 ?
                                <div className='flex flex-col md:flex-row w-full mb-3 gap-5 shadow-sm shadow-gray-300 p-2'>
                                    <div className="flex gap-2 justify-center items-center">
                                        <p className='font-semibold uppercase'>Fecha de compra:</p>
                                        <p>{formatDateToLocal(game.createdAt)}</p>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center">
                                        <p className='font-semibold uppercase'>Tickets comprados:</p>
                                        <p>{game.quantity}</p>
                                    </div>
                                </div>
                                :
                                <div className='flex flex-col md:flex-row w-full justify-between mb-3'>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className='font-semibold uppercase'>Fecha de compra</p>
                                        <p>{formatDateToLocal(game.createdAt)}</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className='font-semibold uppercase'>Tickets comprados</p>
                                        <p>{game.quantity}</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className='font-semibold uppercase'>Total</p>
                                        <p className='flex items-center'><FaDollarSign color='green' />{game.total} USD</p>
                                    </div>
                                    {game.confirmPay ?
                                        <BtnTable action="play" funtion={() => handleGenerate(game.id)} /> :
                                        <div className='flex p-2'>
                                            <p className='text-amber-500 font-semibold'>en verificación ...</p>
                                        </div>
                                    }
                                </div>
                            }
                            {game.card_tickets.length > 0 ?
                                <div className='grid md:grid-cols-5 w-full gap-3'>
                                    {game.card_tickets.map(card => (
                                        <div key={card.id} className=' shadow-sm shadow-gray-300'>
                                            <div className='bg-gradient-to-r from-[#0c55a5]/60 to-[#3dbff2] p-1 rounded-t-lg shadow-sm shadow-gray-500 '>
                                            <h1 className='text-[12px] text-white font-semibold'>Boletin N° {card.id}</h1>
                                            </div>
                                            <div className=' grid grid-cols-3 gap-1 p-2'>
                                                <div className=' shadow-sm shadow-gray-500 rounded-full md:w-14 md:h-14 flex justify-center items-center'>
                                                    <h1>{card.one}</h1>
                                                </div>
                                                <div className=' shadow-sm shadow-gray-500 rounded-full md:w-14 md:h-14 flex justify-center items-center'>
                                                    <h1>{card.two}</h1>
                                                </div>
                                                <div className=' shadow-sm shadow-gray-500 rounded-full md:w-14 md:h-14 flex justify-center items-center'>
                                                    <h1>{card.three}</h1>
                                                </div>
                                                <div className=' shadow-sm shadow-gray-500 rounded-full md:w-14 md:h-14 flex justify-center items-center'>
                                                    <h1>{card.four}</h1>
                                                </div>
                                                <div className=' shadow-sm shadow-gray-500 rounded-full md:w-14 md:h-14 flex justify-center items-center'>
                                                    <h1>{card.five}</h1>
                                                </div>
                                                <div className=' shadow-sm shadow-gray-500 rounded-full md:w-14 md:h-14 flex justify-center items-center'>
                                                    <h1>{card.six}</h1>
                                                </div>
                                                <div className=' shadow-sm shadow-gray-500 rounded-full md:w-14 md:h-14 flex justify-center items-center'>
                                                    <h1>{card.seven}</h1>
                                                </div>
                                                <div className=' shadow-sm shadow-gray-500 rounded-full md:w-14 md:h-14 flex justify-center items-center'>
                                                    <h1>{card.eight}</h1>
                                                </div>
                                                <div className=' shadow-sm shadow-gray-500 rounded-full md:w-14 md:h-14 flex justify-center items-center'>
                                                    <h1>{card.nine}</h1>
                                                </div>
                                                <div className=' shadow-sm shadow-gray-500 rounded-full md:w-14 md:h-14 flex justify-center items-center'>
                                                    <h1>{card.ten}</h1>
                                                </div>
                                                <div className=' shadow-sm shadow-gray-500 rounded-full md:w-14 md:h-14 flex justify-center items-center'>
                                                    <h1>{card.eleven}</h1>
                                                </div>
                                                <div className=' shadow-sm shadow-gray-500 rounded-full md:w-14 md:h-14 flex justify-center items-center'>
                                                    <h1>{card.twelve}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div> : isLoading ?
                                    <MainLoader /> : " "
                            }
                        </div>
                    ))}
                </div>
            )
            }
        </HomeLayout >
    );
};

export default MyGame;