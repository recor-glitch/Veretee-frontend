import React from "react";

function Hero() {
  return (
    <section className="w-full md:min-h-[916px]">
      <div className="w-full">
        <video
          src={"https://www.pexels.com/download/video/2317680/"}
          loop
          autoPlay
          muted
          className="w-full"
        />
      </div>
    </section>
  );
}

export default Hero;
