import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
//UI
import Input from '../../components/Inputs/Input';
import InputGroup from '../../components/Inputs/InputGroup';
import Label from '../../components/Inputs/Label';
import ShowPassword from '../../components/Inputs/ShowPassword';
import logo from '../../assets/peef.png';
import UserLogo from '../../components/Inputs/UserLogo';
import MobileLogo from '../../components/Inputs/MobileLogo';
//SLICE
import { registerPlayerThunk, setInitialState } from '../../store/slices/procedures/procedures.slice';
import { FaArrowLeft } from 'react-icons/fa';

const Register = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const registerState = useSelector(state => state.procedures)

  const { setValue, register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setInitialState())
  },[])

  const onSubmit = (data) => {
    dispatch(registerPlayerThunk(data));
  }

  return (
    <div
      className={`text-[#004841 ] flex justify-center items-center 2xl:items-center transition-all h-full w-full min-h-screen bg-cover bg-center bg-[url('../../src/assets/fondo-casino.jpg')]`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-600/40 backdrop-blur-sm"></div>
      <div className="w-[90%] h-full transition-all fle rounded-md sm:w-2/3 md:w-[35%] bg-white/55 backdrop-blur-lg shadow-md shadow-gray-300 flex flex-col items-center justify-center">
        <div className="w-[200px] h-[20px] mb-5">
          <img src={logo} alt="logo" />
        </div>
        {registerState.message === "player created successfully" ?
          <>
            <div className='flex flex-col p-2 w-[80%] border-green-500 rounded-md border bg-green-200 mt-14'>
              <h1 className="text-center text-[14px] mb-5">Se ha enviado un email a la dirección de correo electrónico ingresada con sus credenciales ahi podrás iniciar sesión por primera vez</h1>
              <div className='pl-2 text-[12px] font-semibold'>
                <p className='mb-0'>Nota: Si no encuentras nuestro email en tu bandeja de entrada, por favor revisa la bandeja de spam o correo no deseado</p>
              </div>
            </div>
            <div className='flex gap-2 w-[100%] my-10 justify-center'>
              <h1 className="text-[13px] flex gap-2"><Link to={'/login'}><p className='text-sky-700 hover:text-sky-800 flex items-center gap-1'><FaArrowLeft />Iniciar sesión</p> </Link></h1>
            </div>
          </> :
          <>
            <div className='flex flex-col gap-2 w-[65%] mt-14'>
              <h1 className="text-left text-[18px] font-semibold ">Comience absolutamente gratis</h1>
              <h1 className="text-left text-[13px] flex gap-2 ">Ya tienes una cuenta? <Link to={'/login'}><p className='text-sky-600 hover:text-sky-400'>Iniciar sesión</p> </Link></h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 max-w-xs mx-auto mb-8">
              <div className='flex gap-2'>
                <InputGroup>
                  <Input
                    id="firstName"
                    type="text"
                    register={register("firstName", { required: true })}
                    errors={errors.firstName && (<span className="text-red-500 text-xs">{'Información requerida'}</span>)}
                  />
                  <Label spam={true} htmlFor="firstName">Nombre</Label>
                </InputGroup>
                <InputGroup>
                  <Input
                    id="lastName"
                    type="text"
                    register={register("lastName", { required: true })}
                    errors={errors.lastName && (<span className="text-red-500 text-xs">{'Información requerida'}</span>)}
                  />
                  <Label spam={true} htmlFor="lastName">Apellido</Label>
                </InputGroup>
              </div>
              <InputGroup>
                <Input
                  id="email"
                  type="text"
                  register={register("email", { required: true })}
                  errors={errors.email && (<span className="text-red-500 text-xs">{'Información requerida'}</span>)}
                />
                <Label spam={true} htmlFor="email">Email</Label>
                <UserLogo />
              </InputGroup>
              <InputGroup>
                <Input
                  id="Teléfono"
                  type="text"
                  register={register("movile", { required: true })}
                  errors={errors.movile && (<span className="text-red-500 text-xs">{'Información requerida'}</span>)}
                />
                <Label spam={true} htmlFor="Teléfono">Teléfono</Label>
                <MobileLogo />
              </InputGroup>
              <InputGroup>
                <Input
                  isPasswordHidden={isPasswordHidden}
                  type={isPasswordHidden ? 'password' : 'text'}
                  register={register("password", { required: true })}
                  autoComplete="off"
                  errors={errors.password && (<span className="text-red-500 text-xs">{'Información requerida'}</span>)}
                />
                <Label spam={true} htmlFor="password">Contraseña</Label>
                <ShowPassword
                  isPasswordHidden={isPasswordHidden}
                  setIsPasswordHidden={setIsPasswordHidden}
                />
              </InputGroup>
              <button type=" submit" className="btn shadow-lg btn-block bg-[#c08f48] hover:bg-[#b07117] border-none rounded-md mt-10 text-white">
                Crear cuenta
              </button>
            </form>
          </>
        }


      </div>
    </div>
  );
};

export default Register;
