import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import AddSupplier from '../components/AddSupplier'
import SupplierList from '../components/SupplierList'
import './Suppliers.css'
const Supplier = () => {
  const [suppliers, setSuppliers] = useState([])

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/suppliers')
      .then((res) => res.json())
      .then((data) => setSuppliers(data))
  }, [])
  const editSupplier = (id) => {
    let supplier = suppliers.find((x) => x.id === id)
  }
  const deleteSupplier = (id) => {
    const value = window.confirm('are u sure?')
    if (value === true) {
      let targetSuppliers = suppliers.filter((x) => x.id !== id)
      setSuppliers(targetSuppliers)
    }
  }
  const addSupplier = (id, companyName, contactName, contactTitle) => {
    let supplier = {
      id: id,
      companyName: companyName,
      contactName: contactName,
      contactTitle: contactTitle,
    }
    axios.post('https://northwind.vercel.app/api/suppliers', {
      id: id,
      companyName: companyName,
      contactName: contactName,
      contactTitle: contactTitle,
    })
    setSuppliers([...suppliers, supplier])
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <AddSupplier addSupplier={addSupplier} />
          </div>
          <div className="col-12">
            <SupplierList
              suppliers={suppliers}
              deleteSupplier={deleteSupplier}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Supplier
