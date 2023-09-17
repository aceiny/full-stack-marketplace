import React ,{useState} from "react";
import SideBar from "../comps/SideBar";
import AllProducts from "../comps/ProductsTable";
import AdminMidTop from "../comps/AdminMidTop";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/reducers/products";
const RemoveProductAdmin = () => {
    const dispatch = useDispatch(); 
    const [id,setId] = useState("");
    const idHandler = (e) => {setId(e.target.value)}
    const handleRemoveProduct = () => {
        dispatch(deleteProduct(id))
    }
    return(
        <>
        <div className="flex bg-[#F2F2F2]">
                <SideBar/>
                <div className="px-[41px] w-full flex justify-center items-center gap-5">
                    <input type="text" placeholder="Product Id" className="w-[655px] outline-none border border-solid border-[#ADA7A7] rounded h-[60px] pl-[20px]" onChange={idHandler}/>
                    <button className="bg-[#0B63F8] h-[60px] px-[42px] rounded text-white" onClick={handleRemoveProduct}>Submite</button>
                </div>
                
            </div>
        </>

    )
}
export default RemoveProductAdmin;