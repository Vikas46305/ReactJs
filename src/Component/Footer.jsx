function Footer() {
  return (
    <div className="flex justify-center flex-wrap max-md:flex-col text-sm mt-5">
      <div className="w-1/4 px-5 max-md:w-full max-md:px-10">
        <h1 className="text-2xl font-bold my-2">About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          veniam necessitatibus tempora perspiciatis excepturi adipisci saepe
          dolor nesciunt cupiditate itaque?
        </p>
      </div>

      <div className="w-1/4 px-5 max-md:w-full max-md:px-10">
        <h1 className="text-2xl font-bold my-2">Contact</h1>
        <p>
          <i className="ri-drag-move-2-line text-lg mr-3"></i>
          IIMT University Ganga Nagar Meerut Uttar Pradesh 250001
        </p>
        <p>
          <i className="ri-smartphone-line text-lg mr-3"></i>
          8795915044
        </p>
        <p>
          <i className="ri-mail-fill text-lg mr-3"></i>
          vikassharma46305@gmail.com
        </p>
      </div>

      <div className="w-1/4 px-5 max-md:w-full max-md:px-10">
        <h1 className="text-2xl font-bold my-2">Categories</h1>
        <div className="flex flex-col gap-2">
          <p>Headphone</p>
          <p>Headphone</p>
          <p>Headphone</p>
          <p>Headphone</p>
        </div>
      </div>

      <div className="w-1/4 px-5 max-md:w-full max-md:px-10 mb-5">
        <h1 className="text-2xl font-bold my-5">Pages</h1>
        <div className="flex flex-col gap-3 ">
          <p>Home</p>
          <p>About</p>
          <p>Privacy Policy</p>
          <p>Returns</p>
          <p>Trems & Conditions</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
