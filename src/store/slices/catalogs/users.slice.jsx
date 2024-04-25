import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from '../isLoading.slice';
import axios from 'axios';


export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        user: {},
        message: "",
        error: "",
    },
    reducers: {
        initialStateUser: (state, action) => {
            return {
                users: [],
                user: {},
                message: "",
                error: "",
            }
        },
        setUsers: (state, action) => {
            return {
                users: action.payload,
                user: {},
                message: "",
                error: "",
            }
        },
        setUser: (state, action) => {
            return {
                users: [],
                user: action.payload,
                message: "",
                error: "",
            }
        },
        setUserMessages: (state, action) => {
            return {
                users: [],
                user: {},
                message: action.payload,
                error: "",
            }
        },
        setUserError: (state, action) => {
            return {
                users: [],
                user: {},
                message: "",
                error: action.payload,
            }
        }
    }
})

export const getUsersThunk = () => dispatch => {
    dispatch(setIsLoading(true));
    axios.get(`/api/users`)
        .then(res => { dispatch(setUsers(res.data)) })
        .catch(error => { dispatch(setUserError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const getUserThunk = (user_id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.get(`/api/users/${user_id}`)
        .then(res => { dispatch(setUser(res.data)) })
        .catch(error => { dispatch(setUserError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};


export const createUserThunk = (data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.post(`/api/users/user`, data)
        .then(res => {dispatch(setUserMessages(res.data.message)) })
        .catch(error => {dispatch(setUserError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};


export const updateUserThunk = (user_id, data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.put(`/api/users/user/${user_id}`, data)
        .then(res => { dispatch(setUserMessages(res.data.message)) })
        .catch(error => { dispatch(setUserError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};


export const deleteUserThunk = (user_id) => dispatch => {
    dispatch(setIsLoading(true));
    axios.delete(`/api/users/user/${user_id}`)
        .then(res => { dispatch(setUserMessages(res.data.message)) })
        .catch(error => { dispatch(setUserError(error.response?.data)) })
        .finally(() => dispatch(setIsLoading(false)))
};

export const signInThunk = (data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.post('/api/auth/login', data)
        .then(res => {
            dispatch(setUser(res.data))
            let userInfo = {
                userName: res.data.firstName + " " + res.data.lastName,
                token: res.data.token,
                role: res.data.roleId,
            };
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
        })
        .catch(error => {
            dispatch(setUserError(error.response.data?.message))
        })
        .finally(() => dispatch(setIsLoading(false)))
};


export const { initialStateUser, setUsers, setUser, setUserMessages, setUserError } = usersSlice.actions;

export default usersSlice.reducer;