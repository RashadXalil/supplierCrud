import React, { useState } from 'react'

const AddSupplier = ({ addSupplier }) => {
  const [companyName, setCompanyName] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactTitle, setContactTitle] = useState('')
  return (
    <div className="form">
      <h2>Suppliers</h2>
      <div className="form__item">
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          placeholder="name"
          id="companyName"
          onChange={(e) => {
            setCompanyName(e.target.value)
          }}
        />
      </div>
      <div className="form__item">
        <label htmlFor="contactName">Contact Name</label>
        <input
          type="text"
          placeholder="contactName"
          onChange={(e) => {
            setContactName(e.target.value)
          }}
        />
      </div>
      <div className="form__item">
        <label htmlFor="contactTitle">Contact Title</label>
        <input
          type="text"
          placeholder="contactTitle"
          onChange={(e) => {
            setContactTitle(e.target.value)
          }}
        />
      </div>
      <button
        className="addBtn btn btn-primary btn-lg"
        onClick={() => {
          let id = Math.floor(Math.random() * 100)
          addSupplier(id, companyName, contactName, contactTitle)
        }}
      >
        Add
      </button>
    </div>
  )
}

export default AddSupplier
