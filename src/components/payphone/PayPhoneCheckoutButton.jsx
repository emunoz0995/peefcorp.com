import React from 'react';
import getConfigPayPhone from '../../utils/getConfigPayPhone';
import axios from 'axios';

const PayPhoneCheckoutButton = ({ data }) => {

    const handleClick = async () => {
        try {
            // Realizar una solicitud a la API de PayPhone para iniciar el proceso de pago
            const response = await axios.post('https://pay.payphonetodoesposible.com/api/button/Prepare', data, getConfigPayPhone() );
            //console.log(response)
            //     // Redirigir al usuario a la página de pago de PayPhone
            window.location.href = response.data.url;
        } catch (error) {
            console.error('Error al iniciar el proceso de pago:', error);
        }
    };

    return (
        <>
            <button onClick={handleClick} className="h-10 w-[60%] shadow-lg bg-[#c08f48] hover:bg-[#b07117] border-none rounded-md text-white">
                Pagar con PayPhone
            </button>
        </>
    );
};

export default PayPhoneCheckoutButton;