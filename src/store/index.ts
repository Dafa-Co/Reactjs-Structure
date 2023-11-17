import { configureStore, combineReducers } from "@reduxjs/toolkit";

import globalReducer from "./globalReducer";

// Combine reducers
const reducers = combineReducers({
  global: globalReducer,
});

// Configure the store
const store = configureStore({
  reducer: reducers,
  // devTools: import.meta.env.MODE !== "production"
});

export default store;

// Define the type for the root state
export type RootState = ReturnType<typeof store.getState>;

// Define the type for the app dispatch
export type AppDispatch = typeof store.dispatch;
