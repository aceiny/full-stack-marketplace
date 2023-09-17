import React , {useState} from "react";
import SideBar from "../comps/SideBar";
import { useDispatch,useSelector } from "react-redux";
import { addproduct } from "../../store/reducers/products";
const AddProductAdmin = () => {
    const dispatch = useDispatch();
    const addProductPending = useSelector(state => state.products.productAddedLoading)
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [quantity,setQuantity] = useState("");
    const [description,setDescription] = useState("");
    const [company,setCompany] = useState("");
    const nameHandler = (e) => {setName(e.target.value)}
    const priceHandler = (e) => {setPrice(e.target.value)}
    const quantityHandler = (e) => {setQuantity(e.target.value)}
    const descriptionHandler = (e) => {setDescription(e.target.value)}
    const companyHandler = (e) => {setCompany(e.target.value)}
    const [files , setFiles] = useState([])
    const uploadfilestriger = (e) => {
        document.querySelector(".addproduct-images-upload").click()
    }
    const fileHandler = (e) => {
        setFiles(e.target.files)
    }
    const handleAddProduct = async () => {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append(`images${i}`,files[i])
        }
        formData.append("name",name)
        formData.append("price",price)
        formData.append("quantity",quantity)
        formData.append("description",description)
        formData.append("company",company)
        await dispatch(addproduct(formData))
        setName("")
        setCompany("")
        setDescription("")
        setPrice("")
        setQuantity("")
        setFiles([])
    }
    return (
        <>
            <div className="flex bg-[#F2F2F2]">
                <SideBar />
                <div className="flex flex-col justify-center items-center w-full gap-[40px]">
                    <div className="flex items-center gap-[20px]">
                        <input type="text" placeholder="Product Name" onChange={nameHandler} value={name} className="outline-none border border-solid border-[#ADA7A7] rounded.md h-[60px] pl-[20px]"/>
                        <input type="number" placeholder="Product Price" onChange={priceHandler} value={price} className="outline-none border border-solid border-[#ADA7A7] rounded-md h-[60px] pl-[20px]"/>
                        <input type="number" placeholder="Qunatity" onChange={quantityHandler} value={quantity} className="outline-none border border-solid border-[#ADA7A7] rounded-md h-[60px] pl-[20px]"/>
                        <input type="text" placeholder="Company" onChange={companyHandler} value={company} className="outline-none border border-solid border-[#ADA7A7] rounded-md h-[60px] pl-[20px]"/>
                        <div>
                            <input  type="file" className="addproduct-images-upload " onChange={fileHandler} placeholder="images" multiple/>
                            <button className="outline-none border border-solid border-[#ADA7A7] rounded-md h-[60px] px-[60px] hover:text-white hover:bg-[#0B63F8] hover:border-transparent transition-half" onClick={uploadfilestriger}>
                                Upload files {files.length > 0 ? files.length : null}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-[40px]">
                        <textarea rows="5" cols="40" type="text" placeholder="Description" onChange={descriptionHandler} value={description} className=" outline-none border border-solid border-[#ADA7A7] rounded-md pl-[20px] py-[20px]"/>
                        <button className="bg-[#0B63F8] h-[60px] px-[42px] rounded-md hover:bg-transparent border border-solid hover:border-[#ADA7A7] hover:text-black transition-half text-white" onClick={handleAddProduct}>
                            {addProductPending 
                            ?<lord-icon
                                src="https://cdn.lordicon.com/hftgdgfo.json"
                                trigger="loop"
                                colors="primary:#4be1ec,secondary:#cb5eee"
                             
                                />
                            : "Submite"}
                            </button>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}
export default AddProductAdmin