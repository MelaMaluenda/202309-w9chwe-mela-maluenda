import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AquelarreStateStructure from "../features/types";
import AvatarStructure from "../types";

export const initialAvatarsState: AquelarreStateStructure = {
  avatars: [],
};

const avatarsSlice = createSlice({
  name: "avatars",
  initialState: initialAvatarsState,
  reducers: {
    loadAvatars: (
      currentState,
      action: PayloadAction<AvatarStructure[]>,
    ): AquelarreStateStructure => ({
      ...currentState,
      avatars: action.payload,
    }),
  },
});

export const { loadAvatars: loadAvatarsActionCreator } = avatarsSlice.actions;

export const aquelarreReducer = avatarsSlice.reducer;
