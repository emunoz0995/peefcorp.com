import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom';
//UI
import HomeLayout from '../../../layouts/HomeLayout';
import MainLoader from '../../../components/Loaders/MainLoader';
import IconStatus from '../../../components/icons/IconStatus';
import { FaDollarSign } from 'react-icons/fa';
import BreadTwoParts from '../../../components/breadcrumbs/BreadTwoParts';
import Toast from '../../../utils/toast';
//SLICE
import { getGamesThunk, initialStateGame } from '../../../store/slices/catalogs/games.slice';


const GamesResults = () => {

    const { t } = useTranslation();
    const gamesState = useSelector(state => state.games);
    const isLoading = useSelector(state => state.isLoadingSlice)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGamesThunk());
        return () => {
            dispatch(initialStateGame())
        };
    }, []);
ss

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

    if (gamesState.error) {
        console.log(gamesState.error)
    }

    return (
        <HomeLayout>
            {isLoading ? (
                <MainLoader />
            ) : (
                <div className="mx-5 my-5 w-full">
                    <BreadTwoParts titleOne={"Juegos"} toOne={"/"} titleTwo={"Resultados"} />
                    <div className='grid grid-cols-4 gap-2 h-[500px] p-2 '>
                        {gamesState.games.map(game => (
                            <div key={game.id} className=" h-full rounded-md bg-cover shadow-lg shadow-gray-500 bg-center bg-[url('../src/assets/logo6.jpg')]">
                                <div className='flex p-2'>
                                    <IconStatus active={game.active} />
                                </div>
                                <div className='flex relative  top-[110px] md:top-[85px] p-2 font-semibold bg-gray-900/60 backdrop-blur-sm'>
                                    <div className='w-[70%]'>
                                        <h1 className='text-green-500 uppercase'>{game.name}</h1>
                                        <p className='text-white text-[12px]'>Precio boleto: $ {game.costTikect} USD</p>
                                        <p className='text-white text-[12px]'>Fecha Juego: {game.gameDate}</p>
                                        <h1 className='text-white uppercase text-[18px] flex items-center'>Premio:  <FaDollarSign />{game.award}</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        {game.active ?
                                            <Link className="w-[50px] h-[50px] rounded-full cursor-pointer justify-center items-center flex bg-white/60 hover:bg-white/80 duration-75"
                                                to={`/registerInGame/${game.id}`}>
                                                Jugar
                                            </Link> : " "
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            )}
        </HomeLayout>
    );
};

export default GamesResults;