import React from 'react';

function TableBody({ users, order }) {
// const [sort, handleSort] = useState("")

    console.log(order)
    return (
        <tbody>
            {users.map(({ name, login, email, picture, location }) => {
                return (
                    <tr key={login.uuid}>
                        <td>
                          <img 
                          className="images"
                          src={picture.medium} 
                          alt={name.first} />  
                        </td>
                        <td>
                            {name.first}
                        </td>
                        <td>
                            {name.last}
                        </td>
                        <td>
                            {email}
                        </td>
                        <td>
                            {location.state}
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody;