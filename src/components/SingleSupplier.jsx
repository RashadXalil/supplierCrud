import React from 'react'

const SingleSupplier = ({ supplier, deleteSupplier }) => {
  return (
    <tr>
      <th scope="row">{supplier.id}</th>
      <td>{supplier.companyName}</td>
      <td>{supplier.contactName}</td>
      <td>{supplier.contactTitle}</td>
      <td>
        <button
          className="btn btn-danger btn-md"
          onClick={() => deleteSupplier(supplier.id)}
        >
          Delete
        </button>
      </td>
      <td>
        <button className="btn btn-warning btn-md text-white">Edit</button>
      </td>
    </tr>
  )
}

export default SingleSupplier
