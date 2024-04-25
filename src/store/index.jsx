import { configureStore } from '@reduxjs/toolkit';
//CATALOGS
import users from './slices/catalogs/users.slice';
import players from './slices/catalogs/players.slice';
import isLoadingSlice from './slices/isLoading.slice';
import changePass from './slices/procedures/changePassword.slice';
import games from './slices/catalogs/games.slice';
import procedures from './slices/procedures/procedures.slice';
import cards from './slices/procedures/generateCards.slice';
import payments from "./slices/procedures/paymentsToConfirmed.slice";


export default configureStore({
  reducer: {
    users,
    players,
    isLoadingSlice,
    changePass,
    games,
    procedures,
    cards,
    payments
	}
})