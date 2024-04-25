import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from '../isLoading.slice';
import axios from 'axios';

export const playersSlice = createSlice({
    name: 'players',
    initialState: {
        players: [],
        player: {},
        message: "",
        error: "",
    },
    reducers: {
        initialStatePlayer: (state, action) => {
            return {
                players: [],
                player: {},
                message: "",
                error: "",
            }
        },
        setPlayers: (state, action) => {
            return {
                players: action.payload,
                player: {},
                message: "",
                error: "",
            }
        },
        setPlayer: (state, action) => {
            return {
                players: [],
                player: action.payload,
                message: "",
                error: "",
            }
        },
        setPlayerMessages: (state, action) => {
            return {
                players: [],
                player: {},
                message: action.payload,
                error: "",
            }
        },
        setPlayerError: (state, action) => {
            return {
                players: [],
                player: {},
                message: "",
                error: action.payload,
            }
        }
    }
})

export const getPlayersThunk = () => dispatch => {
    dispatch(setIsLoading(true));
    axios.get(`/api/players/`)
        .then(res => { dispatch(setPlayers(res.data)) })
        .catch(error => { dispatch(setPlayerError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};


export const getPlayerThunk = (player_id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.get(`/api/players/player/${player_id}`)
        .then(res => { dispatch(setPlayer(res.data)) })
        .catch(error => { dispatch(setPlayerError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const createPlayerThunk = (data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.post(`/api/players/player`, data)
        .then(res => { dispatch(setPlayerMessages(res.data.message)) })
        .catch(error => { dispatch(setPlayerError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const updatePlayerThunk = (player_id, data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.put(`/api/players/player/${player_id}`, data)
        .then(res => { dispatch(setPlayerMessages(res.data.message)) })
        .catch(error => { dispatch(setPlayerError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const deletePlayerThunk = (player_id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.delete(`/api/players/player/${player_id}`)
        .then(res => { dispatch(setPlayerMessages(res.data.message)) })
        .catch(error => { dispatch(setPlayerError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const signInPlayerThunk = (data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.post('/api/auth/login-players', data)
        .then(res => {
            dispatch(setPlayer(res.data))
            let playerInfo = {
                userName: res.data.firstName + " " + res.data.lastName,
                token: res.data.token,
                userId: res.data.userId,
            };
            localStorage.setItem('playerInfo', JSON.stringify(playerInfo))
        })
        .catch(error => {
            dispatch(setPlayerError(error.response.data?.message))
        })
        .finally(() => dispatch(setIsLoading(false)))
};


export const {
    initialStatePlayer,
    setPlayers,
    setPlayer,
    setPlayerMessages,
    setPlayerError } = playersSlice.actions;

export default playersSlice.reducer;