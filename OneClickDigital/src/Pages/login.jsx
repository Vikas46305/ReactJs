import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box" style={{ fontFamily: "Poppins" }}>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="m-auto w-1/2">
            <input
              type="text"
              name="username"
              className="focus:outline-indigo-600 border py-1 px-3 mt-5 rounded-md"
              placeholder="Enter your username"
            />
            <br />
            <input
              type="Password"
              name="username"
              className="focus:outline-indigo-600 border py-1 px-3 mt-3 rounded-md"
              placeholder="Enter your Password"
            />
            <br />
            <button className="px-6 py-2 bg-rose-700 text-white font-semibold mt-3 rounded-md">
              Submit
            </button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
export default Login;
