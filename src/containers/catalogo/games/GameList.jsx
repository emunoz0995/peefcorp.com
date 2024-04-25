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
import { formatDateToLocal } from '../../../utils/funtions';


const GameList = () => {

    const { t } = useTranslation();
    const gamesState = useSelector(state => state.games);
    const games = gamesState.games.filter((game) => game.active);
    const isLoading = useSelector(state => state.isLoadingSlice)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGamesThunk());
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

    if (gamesState.error) {
        console.log(gamesState.error)
    }


    const handleClick = (gameId) => {
        navigate(`/registerInGame/${gameId}`);
    };

    return (
        <HomeLayout>
            {isLoading ? (
                <MainLoader />
            ) : (
                <div className="mx-5 my-5 w-full">
                    <BreadTwoParts titleOne={"Juegos"} toOne={"/"} titleTwo={"Todos"} />
                    <div className="overflow-y-scroll h-[87%] contenedor">
                        <table className="text-[13px] table table-zebra w-full shadow-md shadow-gray-300">
                            <thead className='' >
                                <tr>
                                    <th></th>
                                    <th>Nombre</th>
                                    <th>Costo</th>
                                    <th>Fecha de juego</th>
                                    <th>Premio</th>
                                </tr>
                            </thead>
                            <tbody >
                                {games.map(game => (
                                    <tr key={game.id} className='hover cursor-pointer' onClick={() => handleClick(game.id)}>
                                        <td className='w-10'>
                                            <div className=" h-14 w-14 rounded-md bg-cover shadow-lg shadow-gray-500 bg-center bg-[url('../src/assets/logo6.jpg')]">

                                            </div>
                                        </td>
                                        <td className='text-green-600 uppercase font-semibold text-[15px]'>{game.name}</td>
                                        <td> $ {game.costTikect} USD</td>
                                        <td className='pl-10'>{formatDateToLocal(game.gameDate)}</td>
                                        <td><div className='flex gap-2 items-center text-[15px] text-gray-500 font-semibold'><FaDollarSign />{game.award}</div></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </HomeLayout>
    );
};

export default GameList;