import { Link } from "react-router-dom";
import Login from "../Pages/login";
function Navbar() {
  return (
    <>
      <header className="fixed right-0 top-0 left-0 bg-white">
        <nav
          className="flex items-center justify-between px-16 max-md:px-9 shadow"
          style={{
            fontFamily: "Poppins",
          }}
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-24 md:py-1 max-md:w-20 max-md:mt-2"
          />
          <ul className="flex gap-5 items-center max-md:hidden">
            <li className="flex items-center">
              <input
                type="text"
                name="search_bar"
                className="border py-1 rounded-md relative px-2 focus:outline-none focus:border-indigo-700 "
                placeholder="search"
              />
              <button className="absolute mx-48">
                {" "}
                <i class="ri-search-line"></i>{" "}
              </button>
            </li>
            <li className="hover:border-b-2 hover:border-indigo-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:border-b-2 hover:border-indigo-600">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:border-b-2 hover:border-indigo-600">
              <Link to="/books">Books</Link>
            </li>
            <li className="text-white">
              <Link
                to="/"
                className="bg-blue-700 px-6 py-2 rounded hover:bg-indigo-800"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Login
              </Link>
            </li>
            <Login />
          </ul>
          <Login />
          <button className="border px-[7px] py-[2px] border-indigo-600 rounded text-xl hover:bg-indigo-600 hover:text-white md:hidden">
            <i class="ri-menu-line"></i>
          </button>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
