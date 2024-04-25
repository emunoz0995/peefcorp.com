import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useToolbarStore } from '../../store/VitalStore';
//UI
import { FaSearch, FaUser } from 'react-icons/fa';
import BtnCircle from '../buttons/BtnCircle';
import { useTranslation } from "react-i18next";
import eng from '../../assets/eng.png';
import es from '../../assets/es.png'


const NavTop = ({ onChange, options, value, view, viewOption, onChangeSelect }) => {
  const { openToolbar } = useToolbarStore((state) => state);
  const user = JSON.parse(localStorage.getItem("playerInfo"));

  const logOut = () => {
    localStorage.clear()
  };

  window.onscroll = function() {
    var y = window.scrollY;
    document.getElementById('y').innerText = y;
  };

  return (
    <nav className={`absolute flex w-calc md:right-0 h-16 items-center bg-[#fffffff2] shadow-md shadow-gray-500/20 z-10`} id='y'>
      {viewOption === true ?
        <div className=' flex ml-20 w-40 sm:ml-5 sm:items-center ' >
          <select onChange={(e) => onChangeSelect(e.target.value)} className="file-input-sm file-input-info outline-none input-bordered focus:outline-none focus:ring-1  w-full rounded-md shadow-base-300 shadow-lg">
            <option value="all">Todos</option>
            {options.map((service) => (
              <option key={service.id} value={service.id}>{service.name}</option>
            ))}
          </select>
        </div> :
        ""
      }
      {view === true ?
        <div className=' flex ml-20 w-60 sm:ml-5 sm:items-center ' >
          <input className="outline-none w-full input-bordered focus:outline-none focus:ring-1 text-sm border font-normal p-1 rounded-r-lg"
            type="text"
            placeholder={"Buscar..."}
            value={value}
            onChange={onChange} />
        </div> :
        ""
      }
      <div className="md:hidden absolute left-7">
        <BtnCircle btnAction={() => openToolbar()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </BtnCircle>
      </div>
      <div className="absolute right-7 flex h-[100%] items-center">
        <div className="dropdown dropdown-end h-full">
          <div className='flex h-full'>
            <BtnCircle>
              <p className='hidden sm:flex sm:text-[15px] sm:font-semibold'>{user.userName}</p>
              <div className='border w-[40px] h-[40px] flex justify-center items-center rounded-full'>
                <div className='w-[32px] h-[32px] flex justify-center items-center rounded-full bg-gray-300'>
                  <FaUser className='text-sky-300 text-[22px]' />
                </div>
              </div>

            </BtnCircle>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52"
          >
            <li>
              <Link onClick={logOut} to="/login" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
                <span>Cerrar sesión</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavTop;
