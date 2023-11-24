import { Link, NavLink } from "react-router-dom";
import userPicture from "../../../src/assets/user.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">All Services</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );

  const signOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn logo btn-ghost text-5xl font-bold">
          <span className="text-amber-400">Ace</span>
          <span className="text-fuchsia-400">Learn</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        
        {user ? (
          <><p></p><img className="w-10 rounded-full mr-4" src={userPicture} alt="" /><button onClick={signOut}>Sign Out</button></>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
