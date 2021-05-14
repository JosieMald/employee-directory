import React from 'react';

function TableBody({users}) {
    // console.log(users)
    return (
        <tbody>
            {users.map(({ name, login, email, picture, dob }) => {
                return (
                    <tr key={login.uuid}>
                        <td>
                          <img 
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
                            {dob.age}
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody;