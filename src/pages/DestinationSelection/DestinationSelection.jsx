/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const DestinationSelection = () => {
  const destinations = useLoaderData();
  const { id, destination, origin } = destinations;
  return (
    <div className="bg-[#000000B2] text-white">
      <div className="grid grid-cols-2">
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">{destinations.name}</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="p-20 ">
          <div className="border h-full bg-white text-black">
            <div className="form-control p-8">
                <h1 className="font-bold text-gray-400">Origin</h1>
                <h1 className=" h-[40px] bg-[#F2F2F2] w-full mt-4 text-center p-2 font-bold">{origin}</h1>
                <h1 className="font-bold mt-4 text-gray-400">Destination</h1>
                <h1 className=" h-[40px] bg-[#F2F2F2] w-full mt-4 text-center p-2 font-bold">{destination}</h1>
                <Link to={`/roomDetails/${id}`}><button className="bg-orange-500 w-full p-4 mt-6 rounded-lg text-white font-bold">Start Booking</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationSelection;
