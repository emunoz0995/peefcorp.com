import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
//UI
import Input from '../../components/Inputs/Input';
import InputGroup from '../../components/Inputs/InputGroup';
import Label from '../../components/Inputs/Label';
import logo from '../../assets/peef.png';
import UserLogo from '../../components/Inputs/UserLogo';
import Toast from '../../utils/toast';
import { FaArrowLeft } from 'react-icons/fa';
//SLICE
import { forgotPassPlayerThunk, setInitialState } from '../../store/slices/procedures/procedures.slice';

const ForgotPassword = () => {
  const passState = useSelector(state => state.procedures)

  const { setValue, register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setInitialState())
  },[])

  const submit = (data) => {
    dispatch(forgotPassPlayerThunk(data));
  }

  return (
    <div
      className={`text-[#004841 ] flex justify-center items-center 2xl:items-center transition-all h-full w-full min-h-screen bg-cover bg-center bg-[url('../../src/assets/fondo-casino.jpg')]`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-600/40 backdrop-blur-sm"></div>
      <div className="w-[90%] h-full transition-all fle rounded-md sm:w-2/3 md:w-[35%]  bg-white/55 backdrop-blur-lg shadow-md shadow-gray-300 flex flex-col items-center justify-center">
        <div className="w-[200px] h-[20px] mb-5">
          <img src={logo} alt="logo" />
        </div>
        {passState.message === "change password successfully" ?
          <>
            <div className='flex flex-col p-2 w-[80%] border-green-500 rounded-md border bg-green-200 mt-14'>
              <h1 className="text-center text-[14px] mb-5">Se ha enviado un email a la dirección de correo electrónico ingresada con una contraseña temporal con la que podrás iniciar sesión y restablecer tu contraseña</h1>
              <div className='pl-2 text-[12px] font-semibold'>
                <p className='mb-0'>Nota: Si no encuentras nuestro email en tu bandeja de entrada, por favor revisa la bandeja de spam o correo no deseado</p>
              </div>
            </div>
            <div className='flex gap-2 w-[100%] my-10 justify-center'>
              <h1 className="text-[13px] flex gap-2"><Link to={'/login'}><p className='text-sky-700 hover:text-sky-800 flex items-center gap-1'><FaArrowLeft />Iniciar sesión</p> </Link></h1>
            </div>
          </> :
          <>
            <div className='flex text-center flex-col gap-2 w-full mt-14 justify-center'>
              <h1 className="text-[25px] font-semibold ">¿Olvidaste tu contraseña?</h1>
              <p>Ingrese la dirección de correo electrónico asociada con su cuenta y le enviaremos un enlace por correo electrónico para restablecer su contraseña.</p>
            </div>
            <form onSubmit={handleSubmit(submit)} className="w-2/3 max-w-xs mx-auto mb-16">
              <InputGroup>
                <Input
                  id="email"
                  type="text"
                  register={register("email", { required: true })}
                  errors={errors.email && (<span className="text-red-500 text-xs">{'Información requerida'}</span>)}
                />
                <Label spam={false} htmlFor="email">Email</Label>
                <UserLogo />
              </InputGroup>
              <button type=" submit" className="btn shadow-lg btn-block bg-[#c08f48] hover:bg-[#b07117] border-none rounded-md mt-10 text-white">
                Restablecer contraseña
              </button>
              <div className='flex gap-2 w-[100%] mt-2 justify-center'>
                <h1 className="text-[13px] flex gap-2"><Link to={'/login'}><p className='text-sky-600 hover:text-sky-400 flex items-center gap-2'><FaArrowLeft /> Iniciar sesión</p> </Link></h1>
              </div>
            </form>
          </>
        }

      </div>
    </div>
  );
};

export default ForgotPassword;
