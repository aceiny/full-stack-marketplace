import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const api = "http://localhost:8080/api/v1/"


export const fetchAdmin = createAsyncThunk(
    "admin/fetchAdmin",
    async (data) => {
            try{
                const response = await axios.post(api+"login/admin",data)
                return {data : response.data, status: response.status};
            }catch (error) {
                return error.response.data
              }
    }
)

const initialState = {
    loggedIn: localStorage.getItem("admintoken")?true:false,
    token: localStorage.getItem("admintoken") || null ,
    error: null,
    loading: false,
    authRedirectPath: "/",
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        signout : (state,action) => {
            localStorage.removeItem("admintoken");
            state.loggedIn = false;
            state.token = null;
            toast.success(`logged out from admin panel`, {
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
        [fetchAdmin.pending]: (state, action) => {
            state.loading = true;

        },
        [fetchAdmin.fulfilled]: (state, action) => {
            state.loading = false;
            if(action.payload.status === 200){
                state.token = action.payload.data.token;
                toast.success(`logged in as admin`, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    }); 
                    localStorage.setItem("admintoken",action.payload.data.token)
                    state.loggedIn = true;
                }else{
                    toast.error(`${action.payload.status}`, {
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
        [fetchAdmin.rejected]: (state, action) => {
            state.loading = false;
            console.log(action.error)
            state.error = action.error.message;
        },
    }
});   
export default adminSlice.reducer;
export const {signout} = adminSlice.actions;