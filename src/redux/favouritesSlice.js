import { createSlice } from "@reduxjs/toolkit";

// Favourites state is an object with the ids of the 
// characters marked as favourites.
const initialState = {};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      if(state[action.payload]){
        delete state[action.payload];
      } else {
        state[action.payload] = true;
      }
    }
  }
});

// Checks with the id if a character is marked as favourite.
export function selectFavState( id, state ){
  if(state.favourites[id]){
    return true;
  } else {
    return false;
  }
};

export const { toggleFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;

