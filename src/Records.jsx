import React from 'react'

export default function Records({ data }) {
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>IP Address v4</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.ip_address}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
