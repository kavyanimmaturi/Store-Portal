import React from 'react';

function InvoiceItem ({item}){

  const totalItems = item.dealPrice * item.quantity;
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>Rs. {item.regularPrice.toFixed(2)}</td>
      <td>Rs. {item.dealPrice.toFixed(2)}</td>
      <td>Rs. {totalItems.toFixed(2)}</td>
      <td>Rs. {item.tax * item.quantity}</td>
    </tr>
  )
}

export default InvoiceItem





