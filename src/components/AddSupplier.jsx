import React from 'react'

const AddSupplier = () => {
  return (
    <div className="form">
      <h2>Suppliers</h2>
      <div className="form__item">
        <label htmlFor="companyName">Company Name</label>
        <input type="text" placeholder="name" id="companyName" />
      </div>
      <div className="form__item">
        <label htmlFor="contactName">Contact Name</label>
        <input type="text" placeholder="contactName" />
      </div>
      <div className="form__item">
        <label htmlFor="contactTitle">Contact Title</label>
        <input type="text" placeholder="contactTitle" />
      </div>
      <button className="addBtn btn btn-primary btn-lg">Add</button>
    </div>
  )
}

export default AddSupplier
