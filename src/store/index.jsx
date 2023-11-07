import { configureStore, createSlice } from "@reduxjs/toolkit";
const createSliced = createSlice({
  name: "stateTest",
  initialState: { cont: 0 },
  reducers: {
    inc(state, action) {
      state.cont++;
    },
    dec(state, action) {
      state.cont--;
    },
    addBy(state, action) {
      state.cont += 10;
    },
  },
});

const screenSlice = createSlice({
  name: "screen",
  initialState: { isMobile: false },
  reducers: {
    refresh(state, action) {
      console.log(action.payload);

      const screenWidth = action.payload;
      const brakepoint = 620;

      screenWidth < brakepoint
        ? (state.isMobile = true)
        : (state.isMobile = false);
      console.log(state.isMobile);
    },
  },
});

export const actions = createSliced.actions;

export const refresh = screenSlice.actions;
const myStore = configureStore({
  reducer: createSliced.reducer,
});
export default myStore;
