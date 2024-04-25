import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
//UI
import InputForm from '../../../components/Inputs/formInput/InputForm';
import HomeLayout from '../../../layouts/HomeLayout';
import { FaIdCard, FaMailBulk, FaMap, FaMapMarked, FaMobile } from 'react-icons/fa';
//SLICES
import { getPlayerThunk, updatePlayerThunk, initialStatePlayer } from '../../../store/slices/catalogs/players.slice'
//RESOURCES
import Toast from "../../../utils/toast"

const UserProfile = () => {
    const dispatch = useDispatch()
    const { setValue, register, handleSubmit, formState: { errors } } = useForm();
    const user = JSON.parse(localStorage.getItem("playerInfo"));
    const playerState = useSelector(state => state.players)
    const player_id = user.userId;
    const [file, setFile] = useState(undefined);

    useEffect(() => {
        dispatch(getPlayerThunk(player_id));
        return (() => {
            dispatch(initialStatePlayer());
        })
    }, [])

    if (Object.keys(playerState.player).length !== 0) {
        setValue("names", playerState.player.firstName + " " + playerState.player.lastName)
        setValue("ci", playerState.player.ci)
        setValue("movile", playerState.player.movile)
        setValue("email", playerState.player.email)
        setValue("province", playerState.player.province)
        setValue("city", playerState.player.city)
        setValue("adress", playerState.player.adress)
    }

    const onSubmit = (data) => {
        dispatch(updatePlayerThunk(player_id, data));
    };

    if (playerState.message === "resource updated successfully") {
        Toast.fire({
            icon: 'success',
            title: 'Perfil actualizado correctamente'
        })
        dispatch(getPlayerThunk(player_id));
    }


    // const getFileName = (name) => {
    //     document.getElementById("file-chosen").innerText = name;
    // };

    // const setImage = (file) => {
    //     document.getElementById("blah").src = URL.createObjectURL(file)
    // };
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Obtenemos el primer archivo seleccionado
        const reader = new FileReader();

        // Leemos el archivo como una URL de datos
        reader.onload = () => {
            setSelectedImage(reader.result); // Actualizamos el estado con la URL de la imagen
        };

        if (file) {
            reader.readAsDataURL(file); // Leemos el archivo como una URL de datos
        }
    };

    return (
        <HomeLayout>
            <div className="mx-5 my-5 w-full flex flex-col md:flex-row gap-3">
                <div className='hidden md:flex md:flex-col border h-full mb-24 md:w-[40%] rounded-md shadow-sm shadow-gray-300'>
                    <div className={`h-[28%] rounded-t-lg bg-cover bg-center bg-[url(../../../../src/assets/fondo.jpg)]`}>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='w-24 h-24 bg-gray-500 rounded-full absolute flex justify-center items-center'>
                            <div id="file-chosen" className='border rounded-full w-[92px] h-[92px]  '>
                                <img className="rounded-full h-full" src={selectedImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <button className="shadow-lg bg-[#c08f48] hover:bg-[#b07117] border-none rounded-md text-white p-2 mt-14">Cambiar foto</button>
                        <input type="file" onChange={handleImageChange} accept="image/*" className=' relative opacity-0 top-[-35px] left-[-80px] cursor-pointer' />
                    </div>

                    <div className=' w-full h-screem p-2  flex flex-col justify-center items-center '>
                        <h1 className='text-2xl font-semibold text-sky-500 mb-5'>{playerState.player.firstName + " " + playerState.player.lastName}</h1>
                        <div className='flex flex-col text-left w-full pl-12 text-[14px] text-gray-400'>
                            <p className='flex gap-2 items-center'><FaIdCard />{playerState.player.ci}</p>
                            <p className='flex gap-2 items-center'><FaMobile />{playerState.player.movile}</p>
                            <p className='flex gap-2 items-center'><FaMailBulk />{playerState.player.email}</p>
                            <p className='flex gap-2 items-center'><FaMap />{playerState.player.province + " - " + playerState.player.city}</p>
                            <p className='flex gap-2 items-center'><FaMapMarked />{playerState.player.adress}</p>
                        </div>
                    </div>
                </div>
                <div className='border w-full rounded-md shadow-sm shadow-gray-300'>
                    <div className='flex justify-start p-2 bg-gray-300/60'>
                        <h1 className=''>Editar Perfil</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-2'>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <InputForm
                                type="text"
                                label="Nombre apellido"
                                input="input"
                                spam={false}
                                cols={1}
                                register={register("names", { required: true })}
                                errors={errors.names && (<span className="text-red-500 text-xs">informacion requerida</span>)}
                            />
                            <InputForm
                                type="text"
                                label="Cédula"
                                input="input"
                                spam={false}
                                cols={1}
                                register={register("ci", { required: true })}
                                errors={errors.ci && (<span className="text-red-500 text-xs">informacion requerida</span>)}
                            />
                        </div>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <InputForm
                                type="text"
                                label="Teléfono"
                                input="input"
                                spam={false}
                                cols={1}
                                register={register("movile", { required: true })}
                                errors={errors.movile && (<span className="text-red-500 text-xs">informacion requerida</span>)}
                            />

                            <InputForm
                                type="text"
                                label="Correo"
                                input="input"
                                disable={true}
                                spam={false}
                                cols={1}
                                register={register("email", { required: true })}
                                errors={errors.email && (<span className="text-red-500 text-xs">informacion requerida</span>)}
                            />
                        </div>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <InputForm
                                type="text"
                                label="Provincia"
                                input="input"
                                spam={false}
                                cols={1}
                                register={register("province", { required: true })}
                                errors={errors.province && (<span className="text-red-500 text-xs">informacion requerida</span>)}
                            />

                            <InputForm
                                type="text"
                                label="Ciudad"
                                input="input"
                                spam={false}
                                cols={1}
                                register={register("city", { required: true })}
                                errors={errors.city && (<span className="text-red-500 text-xs">informacion requerida</span>)}
                            />
                        </div>
                        <div className='flex flex-col md:flex-row gap-2 mb-[19px]'>
                            <InputForm
                                type="text"
                                label="Dirección de domicilio"
                                input="input"
                                spam={false}
                                cols={1}
                                register={register("adress", { required: true })}
                                errors={errors.adress && (<span className="text-red-500 text-xs">informacion requerida</span>)}
                            />
                        </div>
                        <div className='flex flex-col md:flex-row w-full items-center justify-center h-[20%]'>
                            <button type=" submit" className="h-10 w-[60%] shadow-lg bg-[#c08f48] hover:bg-[#b07117] border-none rounded-md text-white">
                                Actualizar perfil
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </HomeLayout>
    );
};

export default UserProfile;