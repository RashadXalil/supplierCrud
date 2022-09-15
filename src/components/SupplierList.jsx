import React from 'react'
import SingleSupplier from './SingleSupplier'

const SupplierList = ({ suppliers, deleteSupplier }) => {
  console.log(suppliers)
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Company Name</th>
          <th scope="col">Contact Name</th>
          <th scope="col">Contact Title</th>
          <th scope="col">Delete</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((supplier) => {
          return (
            <SingleSupplier
              key={supplier.id}
              supplier={supplier}
              deleteSupplier={deleteSupplier}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default SupplierList
