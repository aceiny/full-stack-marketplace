import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import RegisterPage from "./auth/pages/RegisterPage";
import LoginPage from "./auth/pages/LoginPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import NotFound from "./pages/NotFound";
import AdminAuth from "./admin/pages/auth";
import AllProductsAdmin from "./admin/pages/ProudctsPage";
import AddProductAdmin from "./admin/pages/AddProductPage";
import RemoveProductAdmin from "./admin/pages/RemoveProductPage";
import { useSelector,useDispatch } from "react-redux";
import { fetchUserData } from "./store/reducers/auth";
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.loggedIn);
  const isAdmin = useSelector(state => state.admin.loggedIn);
  useEffect(() => {
    if(isAuth){
      dispatch(fetchUserData(localStorage.getItem("token")))
    }
  },[])
  const storeRoutes = [
    {
      path : "/products",
      element : <ProductsPage/>,
      auth : true,
    },
    {
      path : "/products/:id",
      element : <ProductPage/>,
      auth : true,
    },
    {
      path : "/cart",
      element : <CartPage/>,
      auth : true,
    },
    {
      path : "/login",
      element : <LoginPage/>,
      auth : false,
    },
    {
      path : "/signup",
      element : <RegisterPage/>,
      auth : false,
    },
  ]
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      {
        storeRoutes.map((route) => {
          return(
            <Route key={route.path} path={route.path} exact element={route.auth?isAuth?<>{route.element}</>:<Navigate to="/login"/>:isAuth?<Navigate to="/products"/>:<>{route.element}</>}/>
          )
        })
      }
      <Route path="/admin" element={isAdmin?<Navigate to="/admin/addproduct"/>:<AdminAuth/>}/>
      <Route path="/admin/allproducts" element={isAdmin?<AllProductsAdmin/>:<Navigate to="/admin"/>}/>
      <Route path="/admin/addproduct" element={isAdmin?<AddProductAdmin/>:<Navigate to="/admin"/>}/>
      <Route path="/admin/removeproduct" element={isAdmin?<RemoveProductAdmin/>:<Navigate to="/admin"/>}/>
      <Route path="/" exact element={<Navigate to="/products"/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
/*<Route path="/products" element={isAuth?<ProductsPage/>:<Navigate to="/login"/>}/>
      <Route path="/products/:id" element={isAuth?<ProductPage/>:<NotFound/>}/>
      <Route path="/cart" element={isAuth?<CartPage/>:<NotFound/>}/>
      <Route path="/login" element={isAuth?<Navigate to="/products"/>:<LoginPage/>}/>
      <Route path="/signup" element={isAuth?<Navigate to="/products"/>:<RegisterPage/>}/>
      <Route path="/admin" element={<AdminAuth/>}/>
      <Route path="/admin/allproducts" element={isAdmin?<AllProductsAdmin/>:<NotFound/>}/>
      <Route path="/admin/addproduct" element={isAdmin?<AddProductAdmin/>:<NotFound/>}/>
      <Route path="/admin/removeproduct" element={isAdmin?<RemoveProductAdmin/>:<NotFound/>}/>*/