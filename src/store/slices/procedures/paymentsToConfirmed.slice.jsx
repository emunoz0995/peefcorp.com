import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from '../isLoading.slice';
import axios from 'axios';

export const paymentsSlice = createSlice({
    name: 'payments',
    initialState: {
        registers: [],
        message: "",
        error: "",
    },
    reducers: {
        initialStateRegister: (state, action) => {
            return {
                registers: [],
                message: "",
                error: "",
            }
        },
        setRegisters: (state, action) => {
            return {
                registers: action.payload,
                message: "",
                error: "",
            }
        },
        setRegisterError: (state, action) => {
            return {
                registers: [],
                game: {},
                message: "",
                error: action.payload,
            }
        }
    }
})

export const getPaymentsToBeConfirmedThunk = () => dispatch => {
    dispatch(setIsLoading(true));
    axios.get(`/api/procedures/paymentsToBeConfirmed`)
        .then(res => { dispatch(setRegisters(res.data)) })
        .catch(error => { dispatch(setRegisterError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};


export const {
    initialStateRegister,
    setRegisters,
    setRegisterError,
} = paymentsSlice.actions;

export default paymentsSlice.reducer;