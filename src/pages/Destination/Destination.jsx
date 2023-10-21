/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link, Navigate } from "react-router-dom";

const Destination = ({ d }) => {
  const { id, name, destination_img, origin } = d;

  

  return (
      <div className="carousel rounded-box ml-4 " style={{backgroundImage: `url(${destination_img},)`, height: 'fit-content', width: '200px'}}>
        <div className="carousel-item h-[400px] w-[200px] flex justify-center items-end font-bold text-lg pb-6 bg-[#000000B2]">
        <Link to={`/home/${id}`}>{name}</Link>
        </div>
      </div>
  );
};

export default Destination;
