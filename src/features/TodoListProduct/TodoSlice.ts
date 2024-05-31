import { IProduct } from "@/types/ProductList.type";
import { productsListArr } from "./../../assets/constant";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  productsListArr,
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    deleteProductFromList: (state, action: PayloadAction<number>) => {
      const index = state.productsListArr.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.productsListArr.splice(index, 1);
      }
    },
    updateProductAtList: (
      state,
      action: PayloadAction<{ uniqueId: number; productUpdatedData: IProduct }>
    ) => {
      console.log(action.payload.productUpdatedData);
      console.log("update product successfully");
      const updateProductIndex = state.productsListArr.findIndex(
        (product) => product.id === action.payload.uniqueId
      );
      if (updateProductIndex !== -1) {
        state.productsListArr[updateProductIndex] = {
          ...state.productsListArr[updateProductIndex],
          ...action.payload.productUpdatedData,
          price: Number(action.payload.productUpdatedData.price),
        };
        console.log(state.productsListArr[updateProductIndex].price)
      }
    },
    createProductAtList: (
      state,
      action: PayloadAction<{ newDialogBoxProductFormData: IProduct }>
    ) => {
      console.log("called create product successfully");
      state.productsListArr.push({
        ...action.payload.newDialogBoxProductFormData,
        id: state.productsListArr.length,
        price: Number(action.payload.newDialogBoxProductFormData.price),
      });
    },
  },
});

export const {
  deleteProductFromList,
  updateProductAtList,
  createProductAtList,
} = productSlice.actions;

export default productSlice.reducer;
