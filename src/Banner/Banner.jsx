import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co/QC3qLTG/online-education-banner-design-template-556845-409.jpg)",
      }}
      className="hero rounded-lg min-h-screen bg-base-200"
    >
      <div className="hero-content hero-overlay bg-opacity-80 flex-col lg:flex-row-reverse">
        <div className="text-white text-center">
          <h1 className="text-5xl font-bold">Welcome <span className="text-amber-400">Ace</span><span className="text-fuchsia-400">Learn</span></h1>
          <p className="py-6">
           A good Education is a foundation for better future.
          </p>
          <div className="gap-8 flex items-center justify-center">
            <button className="btn btn-primary">Get in touch</button>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
