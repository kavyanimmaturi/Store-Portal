import React from 'react';
import ProductTable from '../components/ProductTable';

const ProductPage = () => {
     
   return (
    <div className='product-page'>
        <div className='product-details'>
      <input type="text" placeholder="Search Product..." className='input-field'/>
    <ProductTable/>
    </div>
    </div>
   ) 
  
}


export default ProductPage;
