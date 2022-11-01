import React from "react";
import facial1 from "../assests/facial1.mp4";
import facial2 from "../assests/facial2.mp4";

function Hero() {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={facial1}
        autoPlay
        loop
        muted
      />
      <div className="absolutue w-full h-full top-0 left-0"></div>
    </div>
  );
}

export default Hero;
