/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Destination from "../Destination/Destination";

const Home = () => {
    const destinations = useLoaderData();


  return (
    <div className="grid grid-cols-2 bg-[#000000B2] text-white">
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-16">
        {
            destinations.map(d => <Destination key={d.id} d={d}></Destination>)
        }
      </div>
    </div>
  );
};

export default Home;
