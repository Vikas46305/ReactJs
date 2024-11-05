import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="py-3 bg-[#334155] w-full flex top-0 fixed 
                    text-white justify-between items-center 
                      px-10 max-md:px-3">
      <div className="flex gap-5 cursor-pointer max-md:hidden">
        <NavLink to="/" className="hover:border-b-2">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:border-b-2">
          About
        </NavLink>
        <NavLink to="/categories" className="hover:border-b-2">
          Categories
        </NavLink>
      </div>

      <button className="md:hidden pl-3 text-lg" onClick={() => alert("Hii")}>
        <i className="ri-menu-line"></i>
      </button>
      <div className="text-3xl font-bold font-serif">Dev.Vikas</div>

      <div className="text-xl flex gap-1 cursor-pointer items-center max-md:text-lg ">

        <p className="hover:bg-gray-400 rounded-full px-2 py-1 max-md:p-1 max-md:hover:bg-transparent">
          <i className="ri-search-line"></i>
        </p>
        <p className="hover:bg-gray-400 rounded-full px-2 py-1 max-md:p-1 max-md:hover:bg-transparent">
          <i className="ri-heart-line"></i>
        </p>
        <p className="hover:bg-gray-400 rounded-full px-2 py-1 max-md:p-1 max-md:hover:bg-transparent">
          <i className="ri-shopping-cart-line "></i>
        </p>
      </div>
    </div>
  );
}
export default Navbar;
