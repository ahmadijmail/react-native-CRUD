import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrices:0,
    cartlist:[],
    productquantity:''

   },
 

  reducers: {
    addtoCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartlist.find(
        (item) => item._id === newItem._id
      );

      if (existingItem) {
        existingItem.productquantity++;
      } else {
        let newItem = {
          ...action.payload,
          productquantity: 1,
        };

        state.cartlist.push(newItem);
      }
      state.totalPrices += parseInt(newItem.price);
      state.productquantity++;
      console.log(state);
    },
    removefromCart(state, action){
    console.log("reciveddd");
    const newItem = action.payload;
    const existingItem = state.cartlist.find(
      (item) => item._id === newItem._id
    );

    if (existingItem.productquantity>0) {
      existingItem.productquantity--;
      //console.log(existingItem.productquantity, "hhhh");
    } else if (existingItem.productquantity<=0){
        console.log(existingItem.productquantity, "hhhh");
        existingItem._id=''

    }
    state.totalPrices -= parseInt(newItem.price);
    state.productquantity--;
},
    clearCart(state, action) {
      state.cartlist = [];
    },
  },
});

//export const cartActions = cartSlice.reducer;

export const cartActions = cartSlice.actions;
export default cartSlice;