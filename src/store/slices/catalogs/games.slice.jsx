import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from '../isLoading.slice';
import axios from 'axios';

export const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        games: [],
        game: {},
        message: "",
        error: "",
    },
    reducers: {
        initialStateGame: (state, action) => {
            return {
                games: [],
                game: {},
                message: "",
                error: "",
            }
        },
        setGames: (state, action) => {
            return {
                games: action.payload,
                game: {},
                message: "",
                error: "",
            }
        },
        setGame: (state, action) => {
            return {
                games: [],
                game: action.payload,
                message: "",
                error: "",
            }
        },
        setGameMessages: (state, action) => {
            return {
                games: [],
                game: {},
                message: action.payload,
                error: "",
            }
        },
        setGameError: (state, action) => {
            return {
                games: [],
                game: {},
                message: "",
                error: action.payload,
            }
        }
    }
})

export const getGamesThunk = () => dispatch => {
    dispatch(setIsLoading(true));
    axios.get(`/api/games`)
        .then(res => { dispatch(setGames(res.data)) })
        .catch(error => { dispatch(setGameError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const getGameThunk = (game_id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.get(`/api/games/game/${game_id}`)
        .then(res => { dispatch(setGame(res.data)) })
        .catch(error => { dispatch(setGameError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const getPlayersInGameThunk = (game_id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.get(`/api/games/playersInGame/${game_id}`)
        .then(res => { dispatch(setGame(res.data)) })
        .catch(error => { dispatch(setGameError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const createGameThunk = (data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.post(`/api/games/game`, data)
        .then(res => { dispatch(setGameMessages(res.data.message)) })
        .catch(error => { dispatch(setGameError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const updateGameThunk = (game_id, data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.put(`/api/games/game/${game_id}`, data)
        .then(res => { dispatch(setGameMessages(res.data.message)) })
        .catch(error => { dispatch(setGameError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};


export const deleteGameThunk = (game_id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.delete(`/api/games/game/${game_id}`)
        .then(res => { dispatch(setGameMessages(res.data.message)) })
        .catch(error => { dispatch(setGameError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const getGameAndPlayerThunk = (game_id, player_id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.get(`/api/games/${game_id}/player/${player_id}`)
        .then(res => { dispatch(setGame(res.data)) })
        .catch(error => { dispatch(setGameError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const getRegisterGameThunk = (player_id, game_id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.get(`/api/games/lastGameRecord?player_id=${player_id}&&game_id=${game_id}`)
        .then(res => { dispatch(setGame(res.data)) })
        .catch(error => { dispatch(setGameError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const getGamesOfPlayerThunk = (player_id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.get(`/api/games/gamesOfPlayer?player_id=${player_id}`)
        .then(res => { dispatch(setGames(res.data)) })
        .catch(error => { dispatch(setGameError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const getGameOfPlayerThunk = (game_id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.get(`/api/games/gameOfPlayer/${game_id}`)
        .then(res => { dispatch(setGame(res.data)) })
        .catch(error => { dispatch(setGameError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};


export const {
    initialStateGame,
    setGames,
    setGame,
    setGameMessages,
    setGameError
} = gamesSlice.actions;

export default gamesSlice.reducer;