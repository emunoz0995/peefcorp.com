import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToolbarStore, useCollapsed } from '../../store/VitalStore';
import { useTranslation } from "react-i18next";
//UI
import logo from '../../assets/peef.png';
import BtnDashboard from '../buttons/BtnDashboard';
import { FaGamepad, FaList, FaPeopleCarry, FaReadme, FaUser, FaUsers } from 'react-icons/fa';
import { Collapse } from 'react-collapse';
import GamesAccordion from '../accordions/GamesAccordion';


const NavLeft = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  const { isToolbarOpen, closeToolbar } = useToolbarStore((state) => state);
  const { isCollapsed, openCollapsed, closeCollapsed } = useCollapsed(
    (state) => state
  );

  return (
    <div
      className={`text-gray-400 shadow-md fixed top-0 bottom-0 shadow-gray-500 md:translate-x-0 bg-white transition-all w-60  z-20 ${isToolbarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="flex items-center justify-center m-auto gap-2 h-20 w-[90%]">
        <img className="object-contain h-[100px] mt-10 mb-5" src={logo} alt="logo" />
      </div>
      <ul className=" flex flex-col h-full items-start justify-start w-[98%] mt-5 gap-3">
        <li
          onClick={(e) => { navigate('/'); closeToolbar(); }}
          className={`w-full ${location.pathname === '/' || location.pathname === 'exit_list' ? 'active' : ''}`}>
          <BtnDashboard>
            <FaReadme />
            <p>Inicio</p>
          </BtnDashboard>
        </li>
        <li className={`w-full group mt-[-25px]`}>
          <input
            className="appearance-none"
            type="checkbox"
            id="catalogo"
            onChange={(e) => {
              e.target.checked ? openCollapsed() : closeCollapsed();
            }}
          />
          <label htmlFor="catalogo">
            <BtnDashboard>
              <FaGamepad />
              <div className="flex w-[100%] items-center justify-between  gap-2">
                <p>Juegos</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-3 h-3 transition-all ${isCollapsed ? 'rotate-90' : ''
                    }`}
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </BtnDashboard>
          </label>
          <Collapse isOpened={isCollapsed}>
            <GamesAccordion />
          </Collapse>
        </li>
        <div className='pl-2 text-[10px] font-semibold text-gray-400 uppercase mb-[-10px]'>{t("administration_tag")}</div>
        <li
          onClick={(e) => { navigate('/user-profile'); closeToolbar(); }}
          className={`w-full ${location.pathname === '/user-profile' ? 'active' : ''}`}>
          <BtnDashboard>
            <FaUser />
            <p>Perfil</p>
          </BtnDashboard>
        </li>
      </ul>
    </div>
  );
};

export default NavLeft;
