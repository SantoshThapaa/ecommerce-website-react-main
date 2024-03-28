import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import { API } from "../config";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [limit, setLimit] = useState(10); // default value 10

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
                        productMapping()
                    )}
                </div>
                {loading ? (
                    <div className="empty"></div>
                ) : (
                    <div className="btn-container mt-3 w-100 d-flex justify-content-center align-items-center">
                        {/* HW */}
                        {/* <button id="seeMoreBtn" className="btn btn-danger" onClick={() => {
                            const btn = document.getElementById('seeMoreBtn')
                            if (limit == 10) {
                                btn.innerText = 'SEE LESS'
                                setLimit(20)
                            }
                            else {
                                btn.innerText = 'SEE MORE'
                                setLimit(10)
                            }
                        }}>SEE MORE</button> */}

                        {
                            limit < products.length &&
                            <button id="seeMoreBtn" className="btn btn-danger m-3" onClick={() => setLimit(limit + 5)}>
                                LOAD MORE
                            </button>
                        }
                        {
                            limit > 10 &&
                            <button id="seeLessBtn" className="btn btn-warning m-3" onClick={() => setLimit(limit - 5)}>
                                LOAD LESS
                            </button>
                        }
                    </div>
                )
                }
            </div>
        </>
    );
};

export default Product;
