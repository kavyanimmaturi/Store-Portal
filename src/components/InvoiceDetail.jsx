import React from "react";
import "./InvoiceDetail.css";
import InvoiceItem from "./InvoiceItem";

function InvoiceDetail({invoice, setSelectedInvoice}){
  const withoutTax = invoice.items.reduce((acc,item) => acc + item.dealPrice * item.quantity,0);
  const withTax = invoice.items.reduce((acc,item) => acc + item.tax * item.quantity,0);
  const grandTotal = withoutTax + withTax;

  return(
    <div className="invoice-detail">
      <h3>Invoice Details</h3>
      <p><strong>Store Name: </strong>{invoice.store}</p>
      <p><strong>Date: </strong>{invoice.date}</p>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Regular Price</th>
            <th>Deal Price</th>
            <th>Total Items</th>
            <th>Tax</th>
          </tr>
        </thead>
          <tbody>
            {invoice.items.map((item,index) => (
              <InvoiceItem key={index} item={item}/>
            ))}
          </tbody>
      </table>
      <div className="tax-details">
        <h4 className="without-tax">Without Tax : Rs.{withoutTax.toFixed(2)}/-</h4>
        <h4 className="tax">With Tax : Rs.{withTax.toFixed(2)}/-</h4>
        <hr className="separator"/>
        <h3 className="total-tax"> Grand Total :Rs.{grandTotal.toFixed(2)} /-</h3>
        <button onClick={() => setSelectedInvoice(null)} className="btn btn-primary close-btn">Close</button>
      </div>
    </div>
  )
   
}
export default InvoiceDetail;





