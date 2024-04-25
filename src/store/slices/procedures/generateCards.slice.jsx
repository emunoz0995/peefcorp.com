import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from '../isLoading.slice';
import axios from 'axios';

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: [],
    reducers: {
        setInitialState: (state, action) => {
            return ""
        },
        setCards: (state, action) => {
            return action.payload
        }
    }
})


//REGISTER PLAYER IN GAME
export const generateCardsThunk = (ticketId) => dispatch => {
    dispatch(setIsLoading(true));
    axios.post(`/api/procedures/generateCardNumbers/${ticketId}`)
        .then(res => { dispatch(setCards(res.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};


export const { setCards, setInitialState } = cardsSlice.actions;

export default cardsSlice.reducer;