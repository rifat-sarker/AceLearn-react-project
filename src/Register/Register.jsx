
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [registerError, setRegisterError] = useState('')
    const handleRegister =(e)=> {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        // console.log(name,email, password);
        // reset success and error
        setSuccess('');
        setRegisterError('');

        // login conditions
        if(password.length < 6){
          setRegisterError('password should be at least 6 characters or more');
          return;
        }else if(!/[A-Z]/.test(password)){
          setRegisterError('password should have at least one capital letter');
          return;
        }

    //create user
    createUser(email, password)
    .then(result => {
      console.log(result.user);
      setSuccess('Account created successfully')
    })
    .catch(error => {
      console.error(error)
    })
        
      }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
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
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              Already have an account? Please{" "}
              <Link className=" btn text-blue-400" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
