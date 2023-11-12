import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { aquelarreReducer as avatarReducer } from "./features/avatarsSlice";

export const store = configureStore({
  reducer: { avatarState: avatarReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
