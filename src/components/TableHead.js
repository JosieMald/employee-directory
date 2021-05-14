import React from 'react';
import TableBody from "./TableBody";

function TableHead(props) {
    // console.log(props.headings)
    return (
        <table>
        <thead>
            <tr>
                {props.headings.map(({ name, width }) => {
                    return (
                        <th key={name} style={{ width }}>
                            {name}
                        </th>
                    )
                })}
            </tr>
        </thead>
            <TableBody users={props.users} />
        </table>
    )
}

export default TableHead;