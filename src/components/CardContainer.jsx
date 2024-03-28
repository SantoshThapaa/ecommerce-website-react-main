import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import { API } from "../config";

const CardContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(5); // default value 5

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API}/showproduct`);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(() => {
      fetchProduct();
    }, 2000);
  });

  const productMapping = () => (
    products
      .slice(0, limit)
      .map((product, index) => <Cards key={index} item={product} />)
  )
    
  return (
    <>
      <div className="container-fluid py-3">
        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4">
          {loading ? (
            <div
              style={{ height: "50vh" }}
              className="d-flex align-items-center justify-content-center w-100"
            >
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          ) : (
            // products
            //   .slice(0, limit)
            //   .map((product, index) => <Cards key={index} item={product} />)
            productMapping()
          )}
        </div>
          <div className="btn-container mt-3 w-100 d-flex justify-content-center align-items-center">
            <button id="seeMoreBtn" className="btn btn-danger" onClick={()=>{
              const btn=document.getElementById('seeMoreBtn')
              if(limit==5) {
                btn.innerText ='SEE LESS'
                setLimit(10)
              }
              else{
                btn.innerText = 'SEE MORE'
                setLimit(5)
              }
            }}>SEE MORE</button>
          </div>
      </div>
    </>
  );
};

export default CardContainer;
