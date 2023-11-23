import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");
  
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const passwordPattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;

    console.log(name, email, password);
    // reset success and error
    setSuccess("");
    setRegisterError("");

    // login conditions
    if(!passwordPattern.test(password)){
      setRegisterError("Password requirements: 8-20 characters, 1 number, 1 capital letter, 1 symbol.")
      return;
    }

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Account created successfully");
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen mx-auto bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl my-4 font-bold">Please Register</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onClick={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Already have an account? Please{" "}
                <Link className=" btn text-blue-400" to="/login">
                  Login
                </Link>
              </p>
              {success && <p className="text-green-700">{success}</p>}
              {registerError && <p className="text-red-600">{registerError}</p>}
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
