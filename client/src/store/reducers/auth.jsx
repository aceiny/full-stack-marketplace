import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const api = "http://localhost:8080/api/v1/"
export const fetchUserData = createAsyncThunk(
    "auth/fetchUserData",
    async (token) => {
        try{
            const response = await axios.get(api+"user",{headers: {auth: token}});
            return response.data;
        }catch(error){
            throw error;
        }
    }
)
export const fetchUser = createAsyncThunk(
    "auth/fetchUser",
    async (data) => {
            try{
                const response = await axios.post(api+"login",data)
                return {data : response.data, status: response.status};
            }catch (error) {
                return error.response.data
              }
    }
)
export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async (data) => {
        try{
            const response = await axios.post(api+"register",data)
            return {data : response.data, status: response.status};
        }catch(error){
            return error.response.data
        }
    }
)
const initialState = {
    userData : null,
    loggedIn: localStorage.getItem("token")?true:false,
    token: localStorage.getItem("token") || null ,
    error: null,
    loading: false,
    signupLoading: false,
    fetchingDataLoggin : false,
    authRedirectPath: "/",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signout : (state,action) => {
            state.token = null;
            localStorage.removeItem("token");
            state.loggedIn = false;
            toast.success(`logged out`, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    },
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
            state.loading = true;

        },
        [fetchUser.fulfilled]: (state, action) => {
            state.loading = false;
            if(action.payload.status === 200){
                state.token = action.payload.data.token;
                toast.success(`logged in as ${action.payload.data.username}`, {
                    position: "top-left",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    }); 
                    localStorage.setItem("token",action.payload.data.token)
                    state.loggedIn = true;
                }else{
                    toast.error(`${action.payload.status}`, {
                        position: "top-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
        },
        [fetchUser.rejected]: (state, action) => {
            state.loading = false;
            console.log(action.error)
            state.error = action.error.message;
        },
        [signupUser.pending]: (state, action) => {
            state.signupLoading = true;
        },
        [signupUser.fulfilled]: (state, action) => {
            state.signupLoading = false;
            if(action.payload.status === 200){
                toast.success(action.payload.data.status, {
                    position: "top-left",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    }); 
                }else{
                    toast.error(`${action.payload.status}`, {
                        position: "top-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
        },
        [signupUser.rejected]: (state, action) => {
            state.signupLoading = false;
            state.error = action.error.message;
        },
        [fetchUserData.pending]: (state, action) => {
            state.fetchingDataLoggin = true;
        },
        [fetchUserData.fulfilled]: (state, action) => {
            state.fetchingDataLoggin = false;
            state.userData = action.payload;
        },
    }
});   
export default authSlice.reducer;
export const { signout } = authSlice.actions;