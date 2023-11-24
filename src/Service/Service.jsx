import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { image, price, description, id,  courseName, buttonText } = service;
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
            {
              <Link to={`/details/${id}`}><button className="btn">{buttonText}</button></Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
