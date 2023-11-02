import { configureStore, createSlice } from "@reduxjs/toolkit";
const createSliced = createSlice({
  name: "stateTest",
  initialState: { cont: 0 },
  reducers: {
    inc(state, action) {
       state.cont++;
    },
    dec(state, action) {
       state.cont --;
    },
    addBy(state, action) {
       state.cont += 10;
    },
  },
});
export const actions = createSliced.actions;
const myStore = configureStore({
  reducer: createSliced.reducer,
});
export default myStore;
