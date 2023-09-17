import React from "react";
const AllUsers = () => {
    return(
        <table className="bg-white flex flex-col w-full rounded">
            <th className="flex justify-between product-table-card">
                <td>Full Name</td><td>Username</td><td>Email</td><td>Joined At</td>
            </th>
            <tr className="product-table-card-content">
                <td>Full Name</td><td>Username</td><td>Email</td><td>Joined At</td>
            </tr>
        </table>
    )
}

export default AllUsers;