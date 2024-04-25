import React, { useEffect, useState } from 'react';
import InputForm from '../Inputs/formInput/InputForm';
import { useTranslation } from "react-i18next";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import PayPhoneCheckoutButton from '../payphone/PayPhoneCheckoutButton';
import { regiterPlayerInGameThunk, setInitialState } from '../../store/slices/procedures/procedures.slice';
import { useNavigate } from 'react-router-dom';
import MainLoader from '../Loaders/MainLoader';


const DetailsBuy = ({ gameState }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { handleSubmit, formState: { errors } } = useForm();
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const comicion = type == "card" ? (price * 0.06) : 0;
    const total = type == "card" ? (comicion + price) : price;
    const [data, setData] = useState({})

    useEffect(() => {
        dispatch(setInitialState())
    }, [])

    const handleQuantityChange = (newValue) => {
        setQuantity(newValue);
        setPrice(newValue * gameState.game?.costTikect)
    };

    const registerState = useSelector(state => state.procedures);
    const isLoading = useSelector(state => state.isLoadingSlice);
    const player_id = gameState.player?.id;

    const submit = () => {
        setData( data.tickets = quantity,
        data.gameId = gameState.game?.id,
        data.confirmPay = false)
        dispatch(regiterPlayerInGameThunk(player_id, data))
    }

    useEffect(()=>{
        if(registerState.message === 'player register succesfully'){
            navigate(`/payForTransfer/game/${gameState.game?.id}`)
        }
    },[])
    
    if(isLoading){
        return <MainLoader/>
    }


    return (
        <div className='w-full h-full flex flex-col md:flex-row gap-3 md:p-5'>
            <div className="h-full md:w-[60%] mb-18 md:mb-0 shadow-md shadow-gray-300 bg-white">
                <div className='flex justify-start p-2 bg-gray-300/60'>
                    <h1 className=''>Invoice</h1>
                </div>

                <div className='flex flex-col md:flex-row gap-2 p-2 mb-[-19px]'>
                    <InputForm
                        type="text"
                        disable={true}
                        label="Nombre apellido"
                        input="input"
                        defaultValue={gameState.player?.firstName}
                        spam={true}
                        cols={1}
                    />
                    <InputForm
                        type="text"
                        disable={true}
                        label="Cédula"
                        input="input"
                        defaultValue={gameState.player?.ci}
                        spam={true}
                        cols={1}
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-2 p-2 mb-[-19px]'>
                    <InputForm
                        type="text"
                        disable={true}
                        label="Teléfono"
                        input="input"
                        defaultValue={gameState.player?.movile}
                        spam={true}
                        cols={1}
                    />

                    <InputForm
                        type="text"
                        disable={true}
                        label="Correo"
                        input="input"
                        defaultValue={gameState.player?.email}
                        spam={true}
                        cols={1}
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-2 p-2 mb-[-19px]'>
                    <InputForm
                        type="text"
                        disable={true}
                        label="Provincia"
                        input="input"
                        defaultValue={gameState.player?.province}
                        spam={true}
                        cols={1}
                    />

                    <InputForm
                        type="text"
                        disable={true}
                        label="Ciudad"
                        input="input"
                        defaultValue={gameState.player?.city}
                        spam={true}
                        cols={1}
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-2 p-2 mb-[19px]'>
                    <InputForm
                        type="text"
                        disable={true}
                        label="Dirección de domicilio"
                        input="input"
                        defaultValue={gameState.player?.adress}
                        spam={true}
                        cols={1}
                    />
                </div>
                <div className='flex justify-start p-2 bg-gray-300/60'>
                    <h1 className=''>Detalles</h1>
                </div>
                <table className='text-[13px] table table-zebra w-full'>
                    <thead>
                        <tr>
                            <th>cantidad</th>
                            <th>Detalle</th>
                            <th>V unitario</th>
                            <th>V total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{quantity}</td>
                            <td>boletos juego {gameState.game?.nameGame}</td>
                            <td>$ {gameState.game?.costTikect}</td>
                            <td>$ {price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='md:w-[40%] flex flex-col gap-3 shadow-md bg-white shadow-gray-300'>
                <div className='flex justify-start p-2 bg-gray-300/60'>
                    <h1 className=''>Resumen de compra</h1>
                </div>
                <div className='w-full justify-between flex mt-2 px-2 text-gray-500'>
                    <div className='flex gap-1'>
                        <input type="radio" id='transferBank' value="transferBank" checked
                            // {...register("type", { required: true })}
                            onChange={e => setType(e.target.value)} />
                        <label for="transferBank">Transferencia bancaria</label>
                    </div>
                    {/* <div className='flex gap-1'>
                        <input type="radio" id='card' value="card"
                            {...register("type", { required: true })}
                            onChange={e => setType(e.target.value)} />
                        <label for="card">Targeta credito/debito</label>
                    </div> */}
                </div>
                {errors.type && (<span className="text-red-500 text-xs relative left-6">Debe seleccionar una forma de pago</span>)}
                <div className='border-b-[1px] border w-[95%] ml-2'></div>
                <div className='w-full justify-between flex mt-2 px-2 text-gray-500'>
                    <h1 className='font-bold text-[18px]'>Cantidad boletos</h1>
                    <div className='flex justify-center'>
                        <button type='button' onClick={() => handleQuantityChange(quantity - 1)} className='border w-6 shadow-sm rounded-full shadow-gray-500 font-bold text-[16px]' >-</button>
                        <input id="quantityInput" type='text' value={quantity} className='text-center focus:outline-none w-[50px] ' />
                        <button type='button' onClick={() => handleQuantityChange(quantity + 1)} className='border w-6 shadow-sm rounded-full shadow-gray-500 font-bold text-[16px]'>+</button>
                    </div>
                </div>
                <div className='flex justify-between px-5'>
                    <h1>Subtotal</h1>
                    <p className='mr-3 font-semibold text-sky-600'>$ {price.toFixed(2)}</p>
                </div>
                {type == "card" ?
                    <div className='flex justify-between px-5'>
                        <h1>Costo servicio T/C - T/D</h1>
                        <p className='mr-[18px]'>$ {comicion.toFixed(2)}</p>
                    </div>
                    : " "
                }
                <div className='border-b-[1px] border w-[95%] ml-2'></div>
                <div className='flex justify-between px-5'>
                    <h1>Total</h1>
                    <p className='mr-[15px]'>${total.toFixed(2)}</p>
                </div>
                <div className='mt-10 flex items-center justify-center w-full'>
                    {quantity > 0 ?
                        < button onClick={submit} type=" submit" className="h-10 w-[60%] shadow-lg bg-[#c08f48] hover:bg-[#b07117] border-none rounded-md text-white" >
                            Pagar
                        </button>
                        : <div className='flex flex-col gap-3 items-center justify-center'> < button disabled type=" submit" className="h-10 w-[60%] shadow-lg bg-gray-300 border-none rounded-md text-white" >
                            Pagar
                        </button>
                            <div className='bg-red-300 mx-5 text-[12px] p-2 rounded-md font-semibold'>
                                <p>La cantidad de boletos debe ser mayor a 0 para continuar</p>
                            </div>
                        </div>
                    }
                    {/* <PayPhoneCheckoutButton data={payPhoneData} /> */}
                </div>

            </div>
        </div >
    );
};

export default DetailsBuy;