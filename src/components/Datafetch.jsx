import React, { useState, useEffect } from "react";
import axios from "axios";
const Datafetch = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {/* {products &&
        products.map((item) => <h1 className="text-primary">{item.title}</h1>)} */}
      {products && products.map(item=>{
        return (
            <>
            <h1 className='text-primary'>{item.title}</h1>
            <p className='text-secondary'>Rs {item.price}</p>
            </>
        )
})}
    </>
  );
};

export default Datafetch;
