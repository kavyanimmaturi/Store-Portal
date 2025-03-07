import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewDetailsPage(){
  const {productid} = useParams();
  const [productData,setProductData] = useState({});

  useEffect(() => {
     fetch("http://localhost:3000/productsList/" + productid)
     .then((res) => res.json())
     .then((data) => setProductData(data))
     .catch((err) => console.log(err.message))
  },[]);

  return (
    <div className='view-details'>
      <div className='view-cont'>
      <h1>Product Details</h1>
      {productData && <div className='view-box'>
        <p><strong>ID : </strong>{productData.id}</p>
        <p><strong>Name : </strong>{productData.name}</p>
        <p><strong>Description : </strong>{productData.description}</p>
        <p><strong>Price : </strong>{productData.price}</p>
        <p><strong>Store : </strong>{productData.store}</p>
      </div>}
      <div className='btn-back'>
        <Link to="/products" className='btn btn-danger'>Back</Link>
        </div>
      </div>
      </div>

  )
}

