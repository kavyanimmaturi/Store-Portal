import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct(){
  const {productid} = useParams();
  const[id,setId] = useState("");
  const[name,setName] = useState("");
  const[description,setDescription] = useState("");
  const[price,setPrice] = useState("");
  const[store,setStore] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
     fetch("http://localhost:3000/productsList/" + productid)
     .then((res) => res.json())
     .then((data) => {
        setId(data.id);
        setName(data.name)
        setDescription(data.description)
        setPrice(data.price)
        setStore(data.store)
     })
     .catch((err) => console.log(err.message))
  },[]);
   
  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {id,name,description,price,store};

    fetch("http://localhost:3000/productsList/" + productid,{
      method: 'PUT',
      headers: {
          "content-type": "application/json"
      },
       body: JSON.stringify(productData)
    })
    .then((res) => {
      alert("Products Data Saved Successfully");
      navigate("/products");
    })
  }

  return(
    <div className='create-products'>
    <div className='create-cont'>
      <h2>Edit Product Details</h2>
      <form className='create-form' onSubmit={handleSubmit}>
        <label htmlFor='id' className='label'>ID:</label>
        <input type='text' id="id" className='create-input' required value={id} onChange={event => setId(event.target.value)}/>
       
        <label htmlFor='id' className='label'>Name:</label>
        <input type='text' id="id" className='create-input' required  value={name} onChange={event => setName(event.target.value)}/>

        <label htmlFor='id' className='label'>Description:</label>
        <input type='text' id="id" className='create-input' required  value={description} onChange={event => setDescription(event.target.value)}/>

        <label htmlFor='id' className='label'>Price:</label>
        <input type='text' id="id" className='create-input' required  value={price} onChange={event => setPrice(event.target.value)}/>

        <label htmlFor='id' className='label'>Store:</label>
        <input type='text' id="id" className='create-input' required  value={store} onChange={event => setStore(event.target.value)}/>
        
        <div className='create-btn'>
        <button className='btn btn-primary'>Update</button>
        <Link to="/products" className='btn btn-dark'>Back</Link>
        </div>
      </form>
      </div>
      </div>
  )

}

