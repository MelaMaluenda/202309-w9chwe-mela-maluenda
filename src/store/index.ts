import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { aquelarreReducer as AvatarReducer } from "./features/avatarsSlice";

export const store = configureStore({
  reducer: { AvatarState: AvatarReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
