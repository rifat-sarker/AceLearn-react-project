import React from "react";
import Navbar from "../shared/Navbar/Navbar";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
      <div className="text-center mt-12 ">
        <h1 className="text-4xl mb-4">We Offer Coaching Courses</h1>
        <p>We Can Help You In Different Situations buy this HTML</p>
        <ol>
          <li> Coaching Courses for Life</li>
          <li>Every Video included in package</li>
          <li>We have best support community</li>
          <li> Call us 24/7 we are Online</li>
        </ol>
        <h2 className="text-4xl">Our Team Specialists</h2>

        <div className="grid grid-cols-4 mt-8  gap-4">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/8m1RnNj/0405-638012718654874502.jpg
            https://i.ibb.co/JxzyCP2/young-female-work-placement-office-worker-494713696-7360x4912-1024x683.jpg
            https://i.ibb.co/qCZkL3C/portrait-office-worker-laptop-17336676.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center flex justify-center">
              <h2 className="card-title text-4xl">Erick John</h2>
              <button className="btn-outline border rounded-lg text-xl mt-3 p-3">
                Project management
              </button>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/JxzyCP2/young-female-work-placement-office-worker-494713696-7360x4912-1024x683.jpg" />
            </figure>
            <div className="card-body text-center flex justify-center">
              <h2 className="card-title text-4xl">Karina</h2>
              <button className="btn-outline border rounded-lg text-xl mt-3 p-3">
                Online Marketing
              </button>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/qCZkL3C/portrait-office-worker-laptop-17336676.webp" />
            </figure>
            <div className="card-body text-center flex justify-center">
              <h2 className="card-title text-4xl">Paul</h2>
              <button className="btn-outline border rounded-lg text-xl mt-3 p-3">
                Google Digital
              </button>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/hyc0ywb/6759451347-99ddaa5b62-b.jpg" />
            </figure>
            <div className="card-body text-center flex justify-center">
              <h2 className="card-title text-4xl">Lita</h2>
              <button className="btn-outline border rounded-lg text-xl mt-3 p-3">
                Project management
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
