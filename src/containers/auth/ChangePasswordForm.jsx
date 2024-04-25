import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
//UI
import logo from '../../assets/peef.png'
import ShowPassword from '../../components/Inputs/ShowPassword';
//TRASLATION
import { useTranslation } from "react-i18next";
//ACTIONS
import { changePassThunk, setInitialState } from '../../store/slices/procedures/changePassword.slice';

const ChangePasswordForm = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { t } = useTranslation();
    let { user_id } = useParams();
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    const { setValue, register, handleSubmit, formState: { errors } } = useForm();
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isPasswordConfirmHidden, setIsPasswordConfirmHidden] = useState(true);
    const [comparePass, setComparePass] = useState(true)
    const userState = useSelector(state => state.changePass)

    useEffect(()=>{
        return(()=>{
            dispatch(setInitialState())
        })
    },[])

    const onSubmit = (data) => {
        if (data.password === data.confirmPassword) {
            dispatch(changePassThunk(user_id, data));
        }
    };

    function comparePassword() {
        if (getValues("password") !== getValues("confirmPassword")) {
            setComparePass(false)
        } else {
            setComparePass(true)
        }
    }

    if(userState.message === "password updated successfully"){
        setTimeout(()=>{
            navigate('/login')
        },5000)
    }

    return (
        <div
            className={`text-sky-800 flex justify-center items-center 2xl:items-center transition-all h-full w-full min-h-screen bg-cover bg-center bg-[url('../../src/assets/fondo-casino.jpg')]`}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gray-600/40 backdrop-blur-sm"></div>
            <div className="w-[90%] h-full transition-all fle rounded-md sm:w-2/3 md:w-[35%]  bg-white/55 backdrop-blur-lg shadow-md shadow-gray-300 flex flex-col items-center justify-center">
                <div className="w-[200px] h-[20px] mb-5">
                    <img src={logo} alt="logo" />
                </div>
                <div className='flex flex-col gap-2 mt-14 mx-5'>
                    <h1 className="text-center uppercase text-[18px] font-semibold ">{t("change_password_title")}</h1>
                </div>
                <div className='flex flex-col p-2 mx-2 border-green-500 rounded-md border mt-6 bg-green-200'>
                    {userState.message === "password updated successfully" ?
                        <>
                            <h1 className="text-left text-sm mb-0">{t("change_password_success")}</h1>
                            <div className='pl-2 text-sm'>
                                <p className='mb-0'>{t("change_password_success_message")}</p>
                            </div>
                        </> :
                        <>
                            <h1 className="text-left text-[14px] mb-0">{t("change_password_instructions")}</h1>
                            <div className='pl-2 text-[13px]'>
                                <p className='mb-0'>- {t("change_password_instruction_one")}</p>
                                <p className='mb-0'>- {t("change_password_instruction_two")}</p>
                                <p className='mb-0'>- {t("change_password_instruction_three")}</p>
                            </div>
                        </>
                    }
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-[75%] text-gray-800 mx-auto mb-8">
                    <div className='flex flex-col'>
                        <div className="relative flex flex-col mt-8">
                            <input className={'w-full placeholder-gray-600 p-2 focus:outline-none peer bg-transparent shadow-[inset_0_-1px_0_0_rgba(29,34,43,.2)]'}
                                type={isPasswordHidden ? 'password' : 'text'}
                                {...register("password", { required: true, pattern: regex, minLength: 6, maxLength: 14 })}
                                placeholder="Contraseña"
                            />
                            <ShowPassword
                                isPasswordHidden={isPasswordHidden}
                                setIsPasswordHidden={setIsPasswordHidden}
                            />
                        </div>
                        {errors.password && errors.password.type === "required" && <span className="text-red-600">{t("required_information")}</span>}
                        {errors.password && errors.password.type === "pattern" && <span className="text-red-600">{t("change_password_not_comply")}</span>}
                        {errors.password && errors.password.type === "minLength" && <span className="text-red-600">{t("change_password_minimum_six_characters")}</span>}
                        {errors.password && errors.password.type === "maxLength" && <span className="text-red-600">{t("change_password_maximum_fourteen_characters")}</span>}
                        <div className="relative flex flex-col mt-8">
                            <input className={'w-full placeholder-gray-600 p-2 focus:outline-none peer bg-transparent shadow-[inset_0_-1px_0_0_rgba(29,34,43,.2)]'}
                                type={isPasswordConfirmHidden ? 'password' : 'text'}
                                {...register("confirmPassword", { required: true })}
                                placeholder="Confirme contraseña"
                                onChange={comparePassword}
                            />
                            <ShowPassword
                                isPasswordHidden={isPasswordConfirmHidden}
                                setIsPasswordHidden={setIsPasswordConfirmHidden}
                            />
                        </div>
                        {errors.confirmPassword && errors.confirmPassword.type === "required" && <span className="text-red-600">{t("required_information")}</span>}
                        {!comparePass && <span className="text-red-600">{t("change_password_passwords_donot_match")}</span>}
                    </div>
                    <div className='flex w-full justify-center h-[35px] mt-10'>
                        <button type=" submit" className="btn shadow-lg w-[70%] bg-[#c08f48] hover:bg-[#b07117] hover:duration-75 border-none rounded-md  text-white">
                            {t("change_password_reset_pass")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePasswordForm;