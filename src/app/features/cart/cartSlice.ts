import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface";
import { addItemToShoppingCart } from "../../../utils/functions";
import { RootState } from "../../store";

interface CounterState {
    cartItems: IProduct[],
}

// const [counter, setCounter] = useState(0)
const initialState: CounterState = {
  cartItems: [],
};

const counterSlice = createSlice({
  name: "cart", 
  initialState,
  reducers: {
    addItemToCartAction: (state, action: PayloadAction<IProduct>) => {
      state.cartItems = addItemToShoppingCart(state.cartItems, action.payload)
    }
  },
});

export const { addItemToCartAction } = counterSlice.actions;
export const cartSelector = ({ cart }: RootState) => cart;
export default counterSlice.reducer;
