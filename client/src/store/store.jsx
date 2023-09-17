import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import adminReducer from "./reducers/admin";
import productsReducer from "./reducers/products";
const store = configureStore({
    reducer: {
        admin: adminReducer,
        auth: authReducer,
        products: productsReducer,
    },
});
export default store;