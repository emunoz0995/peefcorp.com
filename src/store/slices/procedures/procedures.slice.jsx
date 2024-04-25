import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from '../isLoading.slice';
import axios from 'axios';

export const proceduresSlice = createSlice({
    name: 'procedures',
    initialState: [],
    reducers: {
        setInitialState: (state, action) => {
            return [];
        },
        setProcedure: (state, action) => {
            return action.payload
        }
    }
})


//REGISTER PLAYER IN GAME
export const regiterPlayerInGameThunk = (playerId, data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.post(`/api/procedures/registerPlayerInGame/${playerId}`, data)
        .then(res => { dispatch(setProcedure(res.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const deletePlayerOfGameThunk = (id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.delete(`/api/procedures/deletePlayerInGame/${id}`)
        .then(res => {dispatch(setProcedure(res.data))})
        .finally(() => dispatch(setIsLoading(false)))
};

export const paymentConfirmedThunk = (gameId, data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.put(`/api/procedures/paymentConfirmed/${gameId}`, data)
        .then(res => {dispatch(setProcedure(res.data))})
        .finally(() => dispatch(setIsLoading(false)))
};

//AUTH
export const registerPlayerThunk = (data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.post(`/api/auth/register`, data)
        .then(res => { dispatch(setProcedure(res.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const forgotPassPlayerThunk = (data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.post(`/api/auth/forgot-password-players`, data)
        .then(res => { dispatch(setProcedure(res.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const confirmTransferThunk = (data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.post(`/api/procedures/confirmPayment`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(res => { dispatch(setProcedure(res.data)) })
        .catch(error => { dispatch(setProcedure(error)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const { setProcedure, setInitialState } = proceduresSlice.actions;

export default proceduresSlice.reducer;