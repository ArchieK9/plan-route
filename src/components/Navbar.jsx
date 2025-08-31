import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">TravelPlanner</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/destinations" className="hover:text-blue-600">
          Destinations
        </Link>
        <Link to="/planner" className="hover:text-blue-600">
          Planner
        </Link>
        <Link to="/about" className="hover:text-blue-600">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
