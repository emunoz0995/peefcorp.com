import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BtnDashboard from '../buttons/BtnDashboard';
import { useTranslation } from "react-i18next";
import { FaCircle } from 'react-icons/fa';

const GamesAccordion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  
  return (
    <ul className=''>
      <li
        onClick={() => {
          navigate('/games');
        }}
        className={`w-full ${location.pathname === '/games' ? 'active' : ''}`}
      >
        <BtnDashboard><FaCircle className='ml-5 text-[7px]'  />Todos</BtnDashboard>
      </li>
      <li
        className={`w-full ${
          location.pathname === '/gamesOfPlayer' ? 'active' : ''
        }`}
        onClick={() => {
          navigate('/gamesOfPlayer');
        }}
      >
        <BtnDashboard><FaCircle className='ml-5 text-[7px]'  />Mis juegos</BtnDashboard>
      </li>
      {/* <li
        onClick={() => {
          navigate('/gamesResults');
        }}
        className={`w-full ${
          location.pathname === '/gamesResults' ? 'active' : ''
        }`}
      >
        <BtnDashboard><FaCircle className='ml-5 text-[7px]'  />Resultados</BtnDashboard>
      </li> */}
    </ul>
  );
};

export default GamesAccordion;
