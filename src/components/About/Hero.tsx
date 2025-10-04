import React from "react";

function Hero() {
  return (
    <section className="w-full min-h-fit md:min-h-[916px]">
      <div className="w-full h-full">
        <video
          src={"https://www.pexels.com/download/video/2317680/"}
          loop
          autoPlay
          muted
          className="w-full h-full"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </section>
  );
}

export default Hero;
