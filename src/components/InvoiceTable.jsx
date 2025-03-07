
import React, { useEffect, useState } from 'react';
import FilterBar from './FilterBar';
import InvoiceDetail from './InvoiceDetail';
import "./InvoiceTable.css";

const InvoiceTable = () => {

  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [filters, setFilters] = useState({ store: "All", date: "" });

  
  useEffect(() => {
    fetch("/data/invoice.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInvoices(data);
        setFilteredInvoices(data);
      })
      .catch((err) => console.error("Error occured while the fetching invoices:", err));
  }, []);

  const applyFilters = () => {
    let filtered = invoices.filter((invoice) => 
      (filters.store === "All" || invoice.store === filters.store) &&
      (!filters.date || invoice.date === filters.date)
    );
    setFilteredInvoices(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  return (
      <div className='filter-cont'>
        <div className='filter-box'>
        <FilterBar filters={filters} setFilters={setFilters} />
        </div>
      <div className="conta">
    <div className="invoice-table">
      <div className="invoice-box">
      <table>
        <thead>
          <tr>
            <th className="product-row">ID</th>
            <th className="product-row">Store Name</th>
            <th className="product-row">Date</th>
            <th className="product-row">Action</th>
          </tr>
        </thead>
         <tbody>
         {filteredInvoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.store}</td>
              <td>{invoice.date}</td>
              <td>
                <button onClick={() => setSelectedInvoice(invoice)} className="btn btn-info">View Details</button>
              </td>
            </tr>
          ))}
          </tbody>  
      </table>
      {selectedInvoice && (
        <InvoiceDetail invoice={selectedInvoice} setSelectedInvoice={setSelectedInvoice} />
      )}
      </div>
    </div>
  </div>
  </div>

  )
}

export default InvoiceTable
