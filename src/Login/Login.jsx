import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [success, setSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");

  //google 
  const handleGoogle = ()=>{
    googleLogin()
    .then(result =>{
      console.log(result.user);
      navigate(location?.state ? location.state : "/");

    })
    .catch(error => {
      console.log(error);
    })

  }
    
 
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    //clear success and error
    setSuccess("");
    setRegisterError("");

    
    

    // login
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        // navigate after login
        // setSuccess("logged in successfully");
        toast.success('Login successfully', {
          duration : 2000,
          position: "bottom-center"
        })
        navigate(location?.state ? location.state : "/");

        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl my-4 font-bold">Please Login!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onClick={handleLogIn} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  Login
                </button>
              </div>
              
              <p>
                Don't have an account? Please{" "}
                <Link className=" btn text-blue-400" to="/register">
                  Register
                </Link>
              </p>
              <button onClick={handleGoogle} className="btn text-2xl">Google</button>
              {registerError && <p className="text-red-600">{registerError}</p>}
              {success && <p className="text-green-700">{success}</p>}
            </form>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
