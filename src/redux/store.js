import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import { persistReducer, persistStore } from"redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}




const persisterReducer = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    cart: persisterReducer,
  },
});




export default store;

export const persistor = persistStore(store);