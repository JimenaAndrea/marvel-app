import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favouritesSlice';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'favourites',
  storage: AsyncStorage
};

const reducers = combineReducers({ favourites: favouritesReducer });

const persistedReducer = persistReducer( persistConfig, reducers);

export default configureStore({
  // Disable serializableCheck middleware.
  // Redux-persist uses non-serializable values. 
  // Non-serializable values are never saved in to the state.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    ImmutableStateInvariantMiddleware: { warnAfter: 500 }
  }),
  reducer: persistedReducer
});