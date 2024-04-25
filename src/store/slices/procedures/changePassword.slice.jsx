import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from '../isLoading.slice';
import axios from 'axios';

export const changePassSlice = createSlice({
    name: 'changePass',
    initialState: [],
    reducers: {
        setInitialState: (state, action) => {
            return []
        },
        setChangePass: (state, action) => {
            return action.payload
        }
    }
})

export const changePassThunk = (userId, data) => dispatch => {
    dispatch(setIsLoading(true));
    axios.put(`/api/players/${userId}/changePassword`, data)
        .then(res => {dispatch(setChangePass(res.data))})
        .finally(() => dispatch(setIsLoading(false)))
};

export const {setChangePass, setInitialState} = changePassSlice.actions;

export default changePassSlice.reducer;