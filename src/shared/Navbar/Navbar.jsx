import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn logo btn-ghost text-5xl font-bold"><span className="text-amber-400">Ace</span><span className="text-fuchsia-400">Learn</span></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='/login'><button className="btn">Login</button></Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
