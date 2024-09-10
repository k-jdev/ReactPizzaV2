import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params, thunkApi) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://63b988df3329392049f63674.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);

const initialState = {
  items: [],
  status: "loading", //loading | succsess | error
};

const pizzaSlice = createSlice({
  name: "pizza  ",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succses";
    },
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectPizzaData = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
