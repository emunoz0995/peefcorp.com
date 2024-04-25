import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToolbarStore } from '../../store/VitalStore';
import { useTranslation } from "react-i18next";
//UI
import logo from '../../assets/Logo.png';
import BtnDashboard from '../buttons/BtnDashboard';
import { FaGamepad, FaMoneyBillWaveAlt, FaPeopleCarry, FaReadme, FaUsers } from 'react-icons/fa';


const NavLeftAdmin = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { t } = useTranslation();
  const { isToolbarOpen, closeToolbar } = useToolbarStore((state) => state);

  return (
    <div
      className={`text-gray-500 shadow-md fixed top-0 bottom-0 shadow-black/10 md:translate-x-0 bg-white transition-all w-60  z-20 ${isToolbarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="flex items-center justify-center m-auto gap-2 h-16 w-[90%]">
        <img className="object-contain h-[100px] mt-8 mb-5" src={logo} alt="logo" />
      </div>
      <ul className=" flex flex-col h-full items-start justify-start w-[98%] mt-5 gap-3">
        <li
          onClick={(e) => { navigate('/admin-panel'); closeToolbar(); }}
          className={`w-full ${location.pathname === '/admin-panel' || location.pathname === 'exit_list' ? 'active' : ''}`}>
          <BtnDashboard>
            <FaReadme />
            <p>Inicio</p>
          </BtnDashboard>
        </li>
        <div className='pl-2 text-[10px] text-gray-400 mb-[-10px]'>{t("administration_tag")}</div>
        {user.role === 1 ?
          <li
            onClick={(e) => { navigate('/admin-panel/users'); closeToolbar(); }}
            className={`w-full ${location.pathname === '/admin-panel/users' ? 'active' :
              location.pathname === '/admin-panel/users_new' ? 'active' : ''}`}>
            <BtnDashboard>
              <FaUsers />
              <p>Usuarios</p>
            </BtnDashboard>
          </li> : " "
        }

        <li
          onClick={(e) => { navigate('/admin-panel/players'); closeToolbar(); }}
          className={`w-full ${location.pathname === '/admin-panel/players' ? 'active' :
            location.pathname === '/admin-panel/player_new' ? 'active' :
              location.pathname === '/admin-panel/playerInscriptionGame/:player_id' ? 'active' : ''}`}>
          <BtnDashboard>
            <FaPeopleCarry />
            <p>Jugadores</p>
          </BtnDashboard>
        </li>
        <li
          onClick={(e) => { navigate('/admin-panel/games'); closeToolbar(); }}
          className={`w-full ${location.pathname === '/admin-panel/games' ? 'active' :
            location.pathname === '/admin-panel/game_new' ? 'active' :
              location.pathname === '/admin-panel/playersInGame/:player_id' ? 'active' : ''}`}>
          <BtnDashboard>
            <FaGamepad />
            <p>Juegos</p>
          </BtnDashboard>
        </li>
        { user.role === 1 ? 
          <li
            onClick={(e) => { navigate('/admin-panel/confirmPayments'); closeToolbar(); }}
            className={`w-full ${location.pathname === '/admin-panel/confirmPayments' ? 'active' : ''}`}>
            <BtnDashboard>
              <FaMoneyBillWaveAlt />
              <p>Confirmar pagos</p>
            </BtnDashboard>
          </li> : "" 
        }

      </ul>
    </div>
  );
};

export default NavLeftAdmin;
