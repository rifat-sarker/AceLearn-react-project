const Review = () => {
  return (
    <div className="">
      <h1 className="text-5xl text-center my-14">What student says!</h1>
      <div className="card card-side bg-base-100 shadow-xl mb-12 ">
        <div className="w-1/2">
          <figure>
            <img className=" rounded-lg"
              src="https://i.ibb.co/QMStV85/istockphoto-1473711199-170667a.webp"
              alt="Student"
            />
          </figure>
        </div>
        <div className="card-body w-1/2">
          <p className="card-title">
            " Web development empowers individuals and businesses to establish a
            prominent online presence, enabling global connectivity and access
            to information. Websites serve as virtual storefronts, showcasing
            products and services to a worldwide audience. "
          </p>
          <div className="font-bold">
            <h2 className="text-3xl">Sahir Ahmed</h2>
            <p>Web Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
