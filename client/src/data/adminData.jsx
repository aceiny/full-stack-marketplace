import {PiSquaresFourFill} from 'react-icons/pi'
import {MdAddBox,MdRemoveCircle,MdModeEdit} from 'react-icons/md'
import {PiUsersThreeFill} from 'react-icons/pi'
import{FiCheckSquare} from 'react-icons/fi'
export const Sidebar = [

    {
        name : "Products",
        link : "/admin/allproducts",
        icon : <FiCheckSquare className='text-[20px]'/>
    },
    {
        name : "Add Product",
        link : "/admin/addproduct",
        icon : <MdAddBox className='text-[20px]'/>
    },
    {
        name : "Remove Product",
        link : "/admin/removeproduct",
        icon : <MdRemoveCircle className='text-[20px]'/>
    },
    {
        name : "Change Product",
        link : "/admin/changeproduct",
        icon : <MdModeEdit className='text-[20px]'/>
    },
    {
        name : "users",
        link : "/users",
        icon : <PiUsersThreeFill className='text-[20px]'/>
    },
]