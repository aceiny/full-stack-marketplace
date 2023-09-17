import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


const api = "https://marketplace-apii.onrender.com/api/v1/"
const token = localStorage.getItem("token") || null;


export const getAllproducts = createAsyncThunk(
    "products/getAllproducts",
    async (params) => {
        try{
            const response = await axios.get(api+`products?${params}`);
            return response.data;
        }catch(error){
            throw error;
        }
    }
)
export const getProduct = createAsyncThunk(
    "products/getProduct",
    async (id) => {
        try{
            const response = await axios.get(api+"products/"+id);
            return response.data;
        }catch(error){
            throw error;
        }
    }
);
export const addproduct = createAsyncThunk(
    "products/addproduct",
    async (data) => {
        try{
            const response = await axios.post(api+"products",data);
            return response.data;
        }catch(error){
            console.log(error)
            throw error;
        }
    }
)
export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (id) => {
        try{
            const response = await axios.delete(api+"products/"+id);
            return response.data;
        }catch(error){
            throw error;
        }
    }
)
export const getCart = createAsyncThunk(
    "products/getCart",
    async () => {
        try{
            const response = await axios.get(api+"cart",{headers: {auth: token}});
            return response.data;
        }catch(error){
            throw error;
        }
    }
)
export const addtoCart = createAsyncThunk(
    "products/addtoCart",
    async (id) => {
        try{
            const response = await axios.post(api+"cart/add",{id},{headers: {auth: token}});
            return response.data;
        }catch(error){
            throw error;
        }
    }
)
export const removefromCart = createAsyncThunk(
    "products/removefromCart",
    async (id) => {
        try{
            const response = await axios.post(api+"cart/remove",{id},{headers: {auth: token}});
            return response.data;
        }catch(error){
            throw error;
        }
    }
)
export const cleareCart = createAsyncThunk(
    "products/cleareCart",
    async () => {
        try{
            const response = await axios.delete(api+"cart/clear",{headers: {auth: token}});
            return response.data;
        }catch(error){
            console.log(error)
            throw error;
        }
    }
)
const initialState = {
    allproducts : [],
    loading: false,
    error: null,
    product: null,
    productLoading: false,
    productError: null,
    productAdded: false,
    productAddedLoading: false,
    productAddedError: null,
    productDeleted: false,
    productDeletedLoading: false,
    productDeletedError: null,
    productUpdated: false,
    productUpdatedLoading: false,
    productUpdatedError: null,
    usercart : [],
    usercartLoading: false,
    productAddedToCart: false,
    productAddedToCartLoading: false,
    productAddedToCartError: null,
    productRemovedFromCart: false,
    productRemovedFromCartLoading: false,
    productRemovedFromCartError: null,
    cleareCart: false,
    cleareCartLoading: false,
    cleareCartError: null,
}
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getAllproducts.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllproducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.allproducts = action.payload.Products;
        },
        [getProduct.pending]: (state, action) => {
            state.productLoading = true;
        },
        [getProduct.fulfilled]: (state, action) => {
            state.productLoading = false;
            state.product = action.payload[0];
        },
        [addproduct.pending]: (state, action) => {
            state.productAddedLoading = true;
            
        },
        [addproduct.fulfilled]: (state, action) => {
            state.productAddedLoading = false;
            state.productAdded = true;
            toast.success(action.payload.status, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                }); 
        },
        [deleteProduct.pending]: (state, action) => {
            state.productDeletedLoading = true;
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.productDeletedLoading = false;
            state.productDeleted = true;
            toast.success(action.payload.status, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                }); 
        },
        [deleteProduct.rejected]: (state, action) => {
            state.productDeletedLoading = false;
            state.productDeletedError = action.error.message;
            toast.error("wrong id or product dont exist", {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        },
        [getCart.pending]: (state, action) => {
            state.usercartLoading = true;
        },
        [getCart.fulfilled]: (state, action) => {
            state.usercartLoading = false;
            state.usercart = action.payload
        },
        [addtoCart.pending]: (state, action) => {
            state.productAddedToCartLoading = true;
        },
        [addtoCart.fulfilled]: (state, action) => {
            state.productAddedToCartLoading = false;
            state.productAddedToCart = true;
            state.usercart.push(action.payload.data)
            toast.success(action.payload.status, {
                position: "top-left",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        },
        [removefromCart.pending]: (state, action) => {
            state.productRemovedFromCartLoading = true;
        },
        [removefromCart.fulfilled]: (state, action) => {
            state.productRemovedFromCartLoading = false;
            state.productRemovedFromCart = true;
            state.usercart = state.usercart.filter((product) => product._id !== action.meta.arg)
            toast.success(action.payload.status, {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        },
        [cleareCart.pending]: (state, action) => {
            state.cleareCartLoading = true;
        },
        [cleareCart.fulfilled]: (state, action) => {
            state.cleareCartLoading = false;
            state.cleareCart = true;
            state.usercart = []
            toast.success(action.payload.status, {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                state.usercart = []
        }
    }
})  
export default productSlice.reducer;
