import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signInPlayerThunk, initialStatePlayer } from '../../store/slices/catalogs/players.slice';
//UI
import ShowPassword from '../../components/Inputs/ShowPassword';
import logo from '../../assets/peef.png';
import UserLogo from '../../components/Inputs/UserLogo';
import Toast from '../../utils/toast';

const Login = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const userState = useSelector(state => state.players)
  const { setValue, register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return (() => {
      dispatch(initialStatePlayer());
    })
  }, []);

  const submit = (data) => {
    dispatch(signInPlayerThunk(data));
  }

  // if (Object.keys(playerState.player).length !== 0) {
  //   if (playerState.player.changePassword) {
  //     navigate(`/changePassword/${playerState.player.userId}`)
  //   } else {
  //     navigate('/'); 
  //   }
  // }

  // if (playerState.error === "user or pass incorrect") {
  //   Toast.fire({
  //     icon: 'error',
  //     title: 'Usuario y/o contraseña incorrectos'
  //   })
  //   dispatch(initialStatePlayer())
  // }

  return (
    <div
      className={`text-gray-700 flex justify-start items-center 2xl:items-center transition-all h-full w-full min-h-screen bg-cover bg-center bg-[url('../src/assets/Picture3.jpg')]`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gray-600/40 backdrop-blur-sm"></div>
      <div className="w-[90%] h-screen transition-all sm:w-2/3 md:w-[35%]  bg-[#ffffff6a] sm:bg-[#ffffff6a] backdrop-blur-lg shadow-lg shadow-gray-500 flex flex-col items-center justify-center">
        <div className='flex flex-col gap-2 w-[65%] mt-10'>
          <h1 className="text-center text-[34px] font-semibold mb-0">¡Bienvenido!</h1>
        </div>
        {userState.error === "invalid password" || userState.error === "resource not found" ?
          <>
            <div className='flex flex-col p-2 w-[80%] border-red-500 rounded-md border mt-6 bg-red-200'>
              <h1 className="text-left text-sm mb-0">Error!</h1>
              <div className='pl-2 text-sm'>
                <p className='mb-0'>Usuario o contraseña incorrectas.</p>
              </div>
            </div>
          </> : userState.error === "temporary password has expired" ?
            <>
              <div className='flex flex-col p-2 w-[80%] border-red-500 rounded-md border mt-6 bg-red-200'>
                <h1 className="text-left text-sm mb-0">Error!</h1>
                <div className='pl-2 text-sm'>
                  <p className='mb-0'>La contraseña temporal ha expirado. Por favor, solicite una nueva.</p>
                </div>
              </div>
            </> : ""}
        <form onSubmit={handleSubmit(submit)} className="w-[75%] mx-auto text-gray-800 my-10">
          <div className='flex flex-col'>
            <div className="relative flex flex-col mt-8">
              <input className={'w-full placeholder-gray-800 p-2 rounded-xl focus:outline-none peer bg-transparent shadow-[inset_0_-1px_0_0_rgba(29,34,43,.2)]'}
                type='text'
                {...register("email", { required: true })}
                placeholder="Email"
              />
              <UserLogo />
            </div>
            {errors.email && (<span className="error_message">{"Información requerida"}</span>)}
            <div className="relative flex flex-col mt-8">
              <input className='w-full p-2 rounded-xl placeholder-gray-800 focus:outline-none peer bg-transparent shadow-[inset_0_-1px_0_0_rgba(29,34,43,.2)]'
                type={isPasswordHidden ? 'password' : 'text'}
                {...register("password", { required: true })}
                placeholder="Password"
              />
              <ShowPassword
                isPasswordHidden={isPasswordHidden}
                setIsPasswordHidden={setIsPasswordHidden}
              />
            </div>
            {errors.email && (<span className="text-red-600">{"Información requerida"}</span>)}
            <div className='flex gap-2 w-[100%] mt-2 justify-end'>
              <h1 className="text-[13px] flex gap-2"><Link to={'/forgotPassword'}><p className='text-green-700 hover:text-green-800'>¿Has olvidado tu contraseña?</p> </Link></h1>
            </div>
          </div>
          <div className='flex w-full justify-center h-[35px] mt-10'>
            <button type=" submit" className="btn shadow-lg btn-block w-[70%] bg-green-700 hover:bg-green-800 hover:duration-75 border-none rounded-md  text-white">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
      <div className="absolute w-[120px] h-[20px] z-10 -translate-x-1/2 top-5 right-1/2  sm:translate-x-0  sm:top-[83%] sm:right-7 rotate-[0.5deg] ">
        <img src={logo} alt="logo" />
      </div>
    </div >
  );
}
export default Login;