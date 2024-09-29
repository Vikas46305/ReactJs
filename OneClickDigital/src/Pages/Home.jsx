import FreeBook from "./FreeBook";
function Home() {
  return (
    <>
      <div className="flex max-md:flex-col mt-28 ">
        <div className="w-1/2 flex items-center max-md:order-2 max-md:w-full">
          <div className="w-10/12 px-5 max-md:w-full" style={{ fontFamily: "Poppins" }}>
            <h1 className="text-3xl font-bold max-md:mt-3 mt-3">
              Hello, Welcome to a place where every day offers a chance to learn
              something <span className="text-indigo-700">exciting !!</span>
            </h1>
            <p className="mt-5">
              Welcome to a vibrant space where each day brings new opportunities
              to explore, discover, and grow. Dive into exciting topics, share
              ideas, and let curiosity guide your journey!
            </p>
            <div className="mt-5 flex flex-col">
              <input
                type="text"
                name="email_box"
                className="border py-1 rounded focus:outline-indigo-600 w-2/3 px-3 max-md:w-full"
                placeholder="email"
              />
              <button className="bg-indigo-600 text-white font-semibold hover:bg-indigo-800 py-2 rounded mt-5 w-1/5 max-md:w-full">
                Get Start
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center max-md:order-1 max-md:w-full max-md:mt-3">
          <img src="/background.png" alt="background" className="w-8/12" />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center m-5 underline">Top Collections</h1>
        <FreeBook />
      </div>
    </>
  );
}
export default Home;
