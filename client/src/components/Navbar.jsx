
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>InternConnect</h2>

      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
