import React from "react";

const Contact = () => {
  return (
    <div className="text-center mt-12">
        <h1 className="text-5xl font-bold my-3">We’re Here To Help You</h1>
        <p>We are waiting for you on our office in London or in way, contact us via the contact form below your idea. <br /> We are here to answer any question.</p>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-center">
            <img className="rounded-xl" src="https://i.ibb.co/xjvMhY2/habitat-offices-map.png" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold">Contact Us</h1>
            <form className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div><br />
              <div className="form-control">
                <input
                  type="text"
                  placeholder="message"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
