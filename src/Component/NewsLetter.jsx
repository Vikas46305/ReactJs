function NewsLetter() {
  return (
    <div className="bg-[url(../news.jpg)] p-10 bg-cover bg-center bg-no-repeat text-center flex flex-col gap-3">
      <h1 className="text-xl">NEWSLETTER</h1>
      <h1 className="text-2xl font-semibold">
        SIGN UP FOR LATEST UPDATES AND OFFERS
      </h1>
      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          className="w-[30%] py-2 border pl-2 rounded max-md:w-[80%]"
          placeholder="email"
        />
        <button className="px-3 py-2 bg-purple-700 hover:bg-purple-950 hover:text-white rounded-sm">
          Subscribe
        </button>
      </div>
      <p>Will be used in accordance with our Privacy Policy</p>
      <div className="text-3xl flex justify-center items-center gap-1">
        <p>
          <i className="ri-facebook-circle-fill hover:bg-gray-300 rounded-full p-1"></i>
        </p>
        <p>
          <i className="ri-twitter-x-fill hover:bg-gray-300 rounded-full p-1"></i>
        </p>
        <p>
          <i className="ri-instagram-line hover:bg-gray-300 rounded-full p-1"></i>
        </p>
        <p>
          <i className="ri-linkedin-fill hover:bg-gray-300 rounded-full p-1"></i>
        </p>
        <p>
          <i className="ri-telegram-fill hover:bg-gray-300 rounded-full p-1"></i>
        </p>
      </div>
    </div>
  );
}
export default NewsLetter;
