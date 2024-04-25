import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
//UI
import HomeLayout from '../../../layouts/HomeLayout';
import MainLoader from '../../../components/Loaders/MainLoader';
import InputForm from '../../../components/Inputs/formInput/InputForm';
//SLICES
import { getRegisterGameThunk, initialStateGame } from '../../../store/slices/catalogs/games.slice';
import { confirmTransferThunk, setInitialState } from '../../../store/slices/procedures/procedures.slice';
import { FaArrowLeft } from 'react-icons/fa';

const PayForTransfer = () => {
    const { game_id } = useParams();
    const playerInfo = JSON.parse(localStorage.getItem("playerInfo"));
    const playerId = playerInfo.userId;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(state => state.isLoadingSlice);
    const gameState = useSelector(state => state.games)
    const procedureState = useSelector(state => state.procedures)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [tiempoRestante, setTiempoRestante] = useState(2 * 60 * 60 * 1000); // 2 horas en milisegundos


    useEffect(() => {
        const intervalo = setInterval(() => {
            setTiempoRestante(prevTiempoRestante => {
                if (prevTiempoRestante > 0) {
                    return prevTiempoRestante - 1000;
                } else {
                    clearInterval(intervalo);
                    return 0;
                }
            });
        }, 1000);
        return () => clearInterval(intervalo);
    }, []);

    useEffect(() => {
        dispatch(getRegisterGameThunk(playerId, game_id))
        return (() => {
            dispatch(initialStateGame());
        })
    }, [])

    const formatearTiempo = (milisegundos) => {
        const segundos = Math.floor(milisegundos / 1000);
        const horas = Math.floor(segundos / 3600);
        const minutos = Math.floor((segundos % 3600) / 60);
        const segundosRestantes = segundos % 60;
        return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
    };

    const submit = async (data) => {
        const formData = new FormData();
        formData.append('numeroConfirmacion', data.comprobante_nro);
        formData.append('numeroRegistro', gameState.game?.id);
        formData.append('playerId', playerId);
        formData.append('game_id', game_id);
        formData.append('total', gameState.game?.total);
        formData.append('imagen', data.comprobante_img[0]);
        dispatch(confirmTransferThunk(formData))
    };

    return (
        <HomeLayout>
            {isLoading ? (
                <MainLoader />
            ) : (
                <div className="mx-5 my-5 w-full">
                    <div className='w-full flex flex-col justify-center items-center'>
                        {procedureState.message === 'Correo enviado correctamente' ?
                            <>
                                <div className='shadow-md bg-green-500/20 w-[50%] shadow-green-300 p-2 rounded-md mt-10'>
                                    <h1 className='text-[27px] uppercase text-center font-semibold'>👋 Hemos recibido tu pago</h1>
                                    <p className='text-sm'>
                                        ¡¡¡En hora buena!!! hemos recibido tu pago, nuestro personal verificara el mismo y en unos momentos podrás ingresar al juego
                                        " {gameState.game.game_player?.name} " a generar tus cartones, te deseamos la mejor suerte,
                                        esperamos que tus seas el ganador.
                                    </p>
                                    <p className='text-sm font-semibold mt-5'>Nota:</p>
                                    <p className='text-[12px] font-semibold'>La verificación del pago puede tomar entre 5 a 30 minutos, una ves verificado el pago llegara un email de confirmación a tu correo.</p>
                                </div>
                                <div className='flex gap-2 w-[100%] my-10 justify-center'>
                                    <h1 className="text-[13px] flex gap-2"><Link to={'/gamesOfPlayer'}><p className='text-sky-700 hover:text-sky-800 flex items-center gap-1'><FaArrowLeft />Mis juegos</p> </Link></h1>
                                </div>
                            </>
                            :
                            <>
                                <h1 className='text-[30px] mb-2'>Por favor no cierres la ventana hasta confirmar tu transferencia</h1>
                                <p className='text-[50px] mb-2'>{formatearTiempo(tiempoRestante)}</p>
                                <div className=' flex flex-col md:flex-row gap-14 justify-center mb-8'>
                                    <div className='flex flex-row md:flex-col gap-3 justify-center w-full md:w-[46%]'>
                                        <div className='shadow-md shadow-gray-300 p-2 rounded-md bg-white'>
                                            <h1 className='text-[17px] font-semibold'>Datos bancarios</h1>
                                            <p className='text-sm'>
                                                Banco Pichincha <br />
                                                Cta. Ahorro <br />
                                                Número: 2206314238 <br />
                                                Darwin Bladimir Puentestar Chuga <br />
                                                Ci: 0401615554 <br />
                                            </p>
                                        </div>
                                        <div className='shadow-md shadow-gray-300 rounded-md p-2 bg-white'>
                                            <h1 className='text-[17px] font-semibold'>Valores y detalles</h1>
                                            <p className='text-sm'>
                                                Detalle: compra de {gameState.game?.quantity} boletos  <br />
                                                Juego: {gameState.game.tickets_game?.game_player?.name} <br />
                                                Costo del boleto: $ {gameState.game.tickets_game?.game_player?.costTikect} USD <br />
                                                Valor a transferir: $ {gameState.game?.total} USD <br />                                                
                                            </p>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit(submit)} className='w-[46%]rounded-md bg-white shadow-md shadow-gray-300'>
                                        <div className='flex justify-start p-2 bg-gray-300/60'>
                                            <h1 className=''>Confirmar transferencia</h1>
                                        </div>
                                        <div className='flex flex-col gap-2 p-2 mb-[19px]'>
                                            <InputForm
                                                type="text"
                                                label="Comprobante Nro"
                                                input="input"
                                                register={register("comprobante_nro", { required: true })}
                                                spam={true}
                                                cols={1}
                                                errors={errors.comprobante_nro && (<span className="text-red-500 text-xs">Información requerida</span>)}
                                            />
                                            <InputForm
                                                type="file"
                                                label="Enviar comprobante"
                                                input="file-input"
                                                register={register("comprobante_img", { required: true })}
                                                spam={true}
                                                cols={1}
                                                errors={errors.comprobante_img && (<span className="text-red-500 text-xs">Información requerida</span>)}
                                            />
                                            <div className='flex justify-center mt-2'>
                                                < button type=" submit" className="h-8 w-[50%] shadow-lg bg-[#c08f48] hover:bg-[#b07117] border-none rounded-md text-white" >
                                                    Confirmar
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className='bg-amber-500/30 p-2 border border-amber-600 rounded-md font-semibold text-[13px]'>
                                    <p>Debes confirmar tu transferencia en las dos siguientes horas para poder participar en el juego,
                                        si no lo has hecho para entonces se procederá con la cancelación de la orden.
                                    </p>
                                </div>
                            </>
                        }
                    </div>
                </div>
            )}
        </HomeLayout>
    );
};

export default PayForTransfer;