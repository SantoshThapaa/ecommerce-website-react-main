import React from "react";
import { Link } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import { IMG_URL } from "../config";

//  note to pass data from parent component to child componenet use props
const Cards = (props) => {
  // const title = props.item.title
  // const price = props.item.price
  // note object destructuring
  const { _id, productName, productPrice, productImage } = props.item;
  // ! hw
  const productDetails = () => (
    <ItemDetails title={productName} image={productImage} price={productPrice} />
  );
  
  return (
    <div className="col">
      <div className="card">
        <img src={`${IMG_URL}/${productImage}`} className="card-img-top" alt={productName} />
        <div className="card-body">
          <h5 className="card-title">Rs {productPrice}</h5>
          <Link to={`/productdetails/${_id}`} className="btn btn-primary">
            {/* try replacing with test */}
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
