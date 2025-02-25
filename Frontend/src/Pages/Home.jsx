import React, { useEffect, useState } from "react";
import LatestPost from "../Components/LatestPost";
import { get } from "../services/Endpoint";
import Footer from "../Components/Footer";
import Contactus from "../Components/Contactus";

export default function Home() {
  return (
    <>
      <div className="container-fluid bg-dark hero-section text-center">
        <h1 className="fs-1 fw-bold text-light">EXPLORE. LEARN. INSPIRE.</h1>
        <p className="text-light fs-5 mt-3">
        Unlock stories, ideas, and knowledge that spark curiosity.  
        Join a community of thinkers, creators, and dreamers.
        </p>
      </div>

      <div className="container-fluid  p-5" id="latest">
        <LatestPost />
        <Contactus/>
      </div>
      <Footer />
    </>
  );
}
