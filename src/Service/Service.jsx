import React from "react";

const Service = ({ service }) => {
  const { image, price, description,  courseName, buttonText } = service;
  return (
    <div className="card  p-6 w-96  bg-base-100 shadow-xl">
      <div className="">
        <figure>
          <img className="rounded-lg" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {courseName}
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-between">
            <button className="btn">{price}</button>
            <button className="btn">{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
