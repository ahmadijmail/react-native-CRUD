import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let url = "https://assessment-agentsocloud.herokuapp.com";
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      let response = await fetch("https://newauthh.herokuapp.com/api/products");
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }
);

// export const addProduct = createAsyncThunk(
//   "authentication/addProduct",
//   async (userInput, { rejectWithValue }) => {
//     console.log(userInput, "userinput");
//     try {
//       const response = await axios.post(`${url}/api/products`, userInput);

//       return response.data;
//     } catch (e) {
//       console.log(e.response.data);
//       return rejectWithValue(e.response.data);
//     }
//   }
// );

export const editProduct = createAsyncThunk(
  "authentication/editProduct",
  async (userInput, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://newauthh.herokuapp.com/api/products/${userInput.itemid}`,
        userInput
      )
      alert("Updated Sucsessfully");
      return response;
    } catch (response) {
      console.log(response, "errrorr");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "authentication/deleteProduct",
  async (id, { rejectWithValue }) => {
    console.log(id, "iddd");
    try {
      const response = await axios.delete(
        `https://newauthh.herokuapp.com/api/products/${id}`
      );
      return response.data;
    } catch (response) {
      console.log(response, "errrorr");
    }
  }
);

const productsSlices = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(productsFetch.fulfilled, (state, { payload }) => {
      state.items = payload;
    });
    builder.addCase(editProduct.fulfilled, (state, { payload }) => {
      state.items = state.items.map((el) =>
        el._id == payload.data._id ? (el = payload.data) : el
      );
    });

    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
      state.items = state.items.filter((e) => e._id !== payload);
    });
  },
});

export default productsSlices.reducer;
