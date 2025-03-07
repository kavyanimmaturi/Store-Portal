import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProductTable(){
  const[productsList,setProducts]= useState("");

  const navigate = useNavigate();

  const DisplayDetails = (id) => {
    navigate("/product/view/" + id);
  }

  const EditDetails = (id) => {
    navigate("/product/edit/" + id)
  }

  const RemoveProductDetails = (id) => {
    if(window.confirm("Are you sure you want to delete?")){
      fetch("http://localhost:3000/productsList/" + id,{
        method: 'DELETE',
      })
      .then((res) => {
        alert("Removed Data Successfully");
        window.location.reload();
      })
      .catch((err) => console.log(err.message));
    
    }
  }
   useEffect(() => {
      fetch("http://localhost:3000/productsList")
      .then((res) => res.json())
      .then((data) => 
        setProducts(data)).catch((err) => 
        console.log(err.message))
      },[])
  
  return (
    <div className="container">
    <div className="product-table">
      <div className="add-box">
    <Link to="/product/create" className="btn btn-primary product-add">Add New Product</Link>
      <table>
        <thead>
          <tr>
            <th className="product-row">ID</th>
            <th className="product-row">Name</th>
            <th className="product-row">Description</th>
            <th className="product-row">Price</th>
            <th className="product-row">Store</th>
            <th className="product-row">Actions</th>
          </tr>
        </thead>
           <tbody>
            {productsList && productsList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.store}</td>
              <td className="buttons">
                <button className="btn btn-info" onClick={() => DisplayDetails(item.id)}>View</button>
                <button className="btn btn-primary" onClick={() => EditDetails(item.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => RemoveProductDetails(item.id)}>Delete</button> 
                </td>
                </tr> 
            )
          )
        }
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );

}