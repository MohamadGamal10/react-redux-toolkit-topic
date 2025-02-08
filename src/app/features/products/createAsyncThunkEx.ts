import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axios.config";
import { IProduct } from "../../../interface";
import { RootState } from "../../store";

interface productsState {
  loading: boolean;
  data: IProduct[];
  error: null;
}

const initialState: productsState = {
  loading: true,
  data: [],
  error: null,
};

export const getProductList = createAsyncThunk(
  "products/getProductList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axiosInstance.get(
        "/products?limit=10&select=title,price,thumbnail"
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers:{},
  extraReducers:  {
    [`${getProductList.pending}`]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [`${getProductList.fulfilled}`]: (state, action) => {
        state.loading = false;
        state.data = action.payload;
    },
    [`${getProductList.rejected}`]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    }
    
  },
});

export const productsSelector = ({ products }: RootState) => products;
export default productsSlice.reducer;

// Query => GET Request

// Mutation

// CRUD
// Create (Mutation), Read (Query), Update(Mutation), Delete(Mutation)