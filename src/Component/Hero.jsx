function Hero() {
  return (
    <div className="bg-gradient-to-tl from-blue-500 via-purple-500 to-pink-500 mt-14 py-16 px-20 max-md:p-5 flex mb-5 text-white max-md:flex-col">
      <div className="w-1/2 text-center max-md:order-2 max-md:w-full">
        <h1 className="text-4xl font-semibold m-2">SALES</h1>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          exercitationem est voluptatibus deleniti corporis. Dolorem labore illo
          et enim provident doloremque. Voluptatum ipsa deserunt sit, soluta
          velit sed incidunt necessitatibus repellat voluptate commodi
          accusantium quae.
        </p>
        <div className="flex justify-center items-center mt-5 gap-2 font-semibold">
          <button className=" border-white px-3 py-2 border-2 hover:bg-white hover:text-black rounded-sm rounded-sm">
            READ MORE
          </button>
          <button className="px-3 py-2 bg-white border-white border-2 text-black rounded-sm hover:text-black hover:bg-transparent">
            SHOP NOW
          </button>
        </div>
      </div>
      <img
        src="../HeadPhone.png"
        alt="HeadPhone"
        className="w-64 h-64 m-auto max-md:order-1"
      />
    </div>
  );
}
export default Hero;
