import { NavLink } from "react-router-dom";

function Categories() {
  const Categories = [
    {
      Name: "HEADPONES",
      IMG: "../HeadPhone.png",
    },
    {
      Name: "HEADPONES",
      IMG: "../HeadPhone.png",
    },
    {
      Name: "HEADPONES",
      IMG: "../HeadPhone.png",
    },
    {
      Name: "HEADPONES",
      IMG: "../HeadPhone.png",
    },
  ];

  return (
    <div className="w-[90%] flex m-auto justify-center items-center gap-5 flex-wrap">
      {Categories.map((items, index) => (
        <div className="bg-gray-700 text-white inline-block p-3 rounded-md my-7 max-md:my-0 hover:scale-105 hover:transition cursor-pointer" key={index}>
          <h1>{items.Name}</h1>
          <img
            src={items.IMG}
            alt="Cat_Image"
            className="w-20 h-20 m-auto"
          />
        </div>
      ))}
    </div> 
  );
}
export default Categories;
