import React from "react";

const ItemDetails = (props) => {
  // const title = props.title
  // const image = props.image
  // const price = props.price
  const { title, image, price } = props;
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "50vh",
          width: "50vw",
          position: "absolute",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
        }}
      >
        <div className="card">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">Rs {price}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
