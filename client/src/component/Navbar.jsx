import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="flex justify-between shadow-xl box-border bg-[#01204E] py-2">
      <Link to="/" className="px-6 w-full mx-auto flex flex-row gap-2">
        <p className="mt-2 text-2xl font-bold text-[#FFA62F]">Anime Club</p>
      </Link>
      <div>
        {isLoggedIn ? (
          <div className="flex flex-row gap-4  font-semibold px-2 mt-1">
            <NavLink
              to="/profile"
              className="bg-[#DFF6FF] text-[#1363DF] p-2 border rounded-lg hover:bg-[#47B5FF] hover:text-[#DFF6FF]"
            >
              Anime
            </NavLink>
            <p
              onClick={logout}
              className="bg-[#DFF6FF] text-[#1363DF] p-2 border rounded-lg hover:bg-[#47B5FF] hover:text-[#DFF6FF]"
            >
              Logout
            </p>
          </div>
        ) : (
          <div className="flex flex-row gap-4  font-semibold px-2 mt-1">
            {" "}
            <NavLink
              to="/login"
              className="bg-[#DFF6FF] text-[#1363DF] p-2 border rounded-lg hover:bg-[#47B5FF] hover:text-[#DFF6FF]"
            >
              Login
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
