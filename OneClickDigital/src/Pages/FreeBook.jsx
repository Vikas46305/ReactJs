import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const books = [
  {
    Id: "101",
    Book_Name: "Story Book 1",
    Description: "Lorem ipsum dolor sit amet.",
    Author: "unKnown",
    Type: "Story",
    Image:'/logo.png'
  },
  {
    Id: "101",
    Book_Name: "Story Book 1",
    Description: "Lorem ipsum dolor sit amet.",
    Author: "unKnown",
    Type: "Story",
    Image:'/logo.png'
  },
  {
    Id: "101",
    Book_Name: "Story Book 1",
    Description: "Lorem ipsum dolor sit amet.",
    Author: "unKnown",
    Type: "Story",
    Image:'/logo.png'
  },
  {
    Id: "101",
    Book_Name: "Story Book 1",
    Description: "Lorem ipsum dolor sit amet.",
    Author: "unKnown",
    Type: "Story",
    Image:'/logo.png'
  },
  {
    Id: "102",
    Book_Name: "Programming Book 1",
    Description: "Lorem ipsum dolor sit amet.",
    Author: "unKnown",
    Type: "Programming",
    Image:'/logo.png'
  },
  {
    Id: "103",
    Book_Name: "Programming Book 2",
    Description: "Lorem ipsum dolor sit amet.",
    Author: "unKnown",
    Type: "Programming",
    Image:'/logo.png'
  },
  {
    Id: "104",
    Book_Name: "Programming Book 3",
    Description: "Lorem ipsum dolor sit amet.",
    Author: "unKnown",
    Type: "Programming",
    Image:'/logo.png'
  },
  {
    Id: "105",
    Book_Name: "Story Book 2",
    Description: "Lorem ipsum dolor sit amet.",
    Author: "unKnown",
    Image:'/logo.png',
    Type: "Story",
  },
  {
    Id: "106",
    Book_Name: "Story Book 3",
    Description: "Lorem ipsum dolor sit amet.",
    Author: "unKnown",
    Type: "Story",
    Image:'/logo.png'
  },
  {
    Id: "107",
    Book_Name: "Story Book 4",
    Description: "Lorem ipsum dolor sit amet.",
    Author: "unKnown",
    Type: "Story",
    Image:'/logo.png'
  },
];

function FreeBook() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const free = books.filter((item) => item.Type === "Story");

  return (
    <div className="w-[90%] m-auto">
      <div className="slider-container">
        <Slider {...settings}>
        {free.map((item) => (
            <div key={item.Id} className="p-4">
             <div className="flex gap:8 bg-gray-200 flex-col items-center justify-center p-3 rounded-xl">
             <img src={item.Image} alt={item.Book_Name} className="w-1/2 object-cover" />
              <div className="flex flex-col justify-between">
                <h1 className="font-semibold">{item.Book_Name}</h1>
                <p>{item.Description}</p>
                <p className="text-sm text-gray-600">{item.Author}</p>
                <p className="text-sm text-gray-600">{item.Type}</p>
                <button className="px-3 py-1 bg-indigo-700 rounded-full text-white font-medium mt-2">
                  Download
                </button>
              </div>
             </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FreeBook;
