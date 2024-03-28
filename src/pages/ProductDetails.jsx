import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API, IMG_URL } from "../config";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const { image, title, description, price, category } = product;
  useEffect(() => {
    const id = params.product_id;
    axios
      .get(`${API}/productdetails/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  // handling addToCart function
  const addToCart = () => {
    // fetching item from local storage using key 'cartItems'
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
    const productItem = {
      id: product._id,
      title: product.productName,
      price: product.productPrice,
      image: product.productImage,
      category: product.category.category_name,
      rating: product.productRating,
      stock: product.countInStock,
      quantity: 1
    };
    // check if item is present in the cart or not
    const existingItem = cartItems.find((item) => item.id === product._id)
    if (existingItem) {
      toast.error("Product Already in the cart");
      // toast.error('Product Already in the cart', {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "dark",
      // });
    } else {
      cartItems.push(productItem);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      toast.success(`${productItem.title} added Successfully`);
    }
  };
  return (
    <>
      <ToastContainer theme="colored" position="top-right" />
      <div className="container my-5">
        <div className="row d-flex justify-content-evenly align-items-center">
          <div className="col-md-5">
            <img src={`${IMG_URL}/${product.productImage}`} alt={title} width={"500px"} />
          </div>
          <div className="col-md-6">
            <h2>{product.productName}</h2>
            <h2>Rs {product.productPrice}</h2>
            <h3>Category: {product.category && product.category.category_name}</h3>
            <p>{product.productDescription}</p>
            <div className="my-2">
              <button className="btn btn-warning" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
