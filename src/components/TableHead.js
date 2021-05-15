import React, { useState } from 'react';
import TableBody from "./TableBody";


function TableHead(props) {
    const [order, setOrder] = useState("ascend")
    // console.log(order)
    // console.log(props.headings)
   
    
    const handleSort = (headings) => {
        // console.log(e.target)
        if (order === "ascend") {
            setOrder("desend")
            const sortedUsers = props.users.sort((a,b) => (a[headings] > b[headings])? 1: -1)
            console.log(headings)
        } else {
            // let sortedUsers = props.users.sort((a,b) => (a[headings] > b[headings])? 1: -1)
            setOrder("ascend")
            // console.log(sortedUsers)
        }
    }
    return (
        <table>
        <thead>
            <tr>
                {props.headings.map(({ name, width }) => {
                    return (
                        <th 
                        key={name}
                        value={name}
                        style={{ width }}
                        onClick={() => { handleSort(props.headings)
                        }}>
                            {name}
                            
                        </th>
                    )
                })}
            </tr>
        </thead>
            <TableBody users={props.users} order={order} />
        </table>
    )
}

export default TableHead;