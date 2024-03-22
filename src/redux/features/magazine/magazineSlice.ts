import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TMagazine = {
  _id: string;
  task: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

type TInitialState = {
  magazine: TMagazine[];
};

const initialState: TInitialState = {
  magazine: [],
};

const magazineSlice = createSlice({
  name: "magazine",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<TMagazine>) => {
      state.magazine.push({ ...action.payload });
    },
    removeRecipe: (state, action: PayloadAction<string>) => {
      state.magazine = state.magazine.filter(
        (item) => item._id !== action.payload
      );
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const status = state.magazine.find((item) => item._id === action.payload);
      if (status) {
        status.isCompleted = !status.isCompleted;
        state.magazine.sort(
          (a, b) => (a.isCompleted ? 1 : 0) - (b.isCompleted ? 1 : 0)
        );
      }
    },
  },
});

export const { addRecipe, removeRecipe, toggleStatus } = magazineSlice.actions;

export default magazineSlice.reducer;
