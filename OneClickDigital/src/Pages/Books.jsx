import {Link} from "react-router-dom"
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
function Books(){
    return(
      <>
        <div className="mt-28 w-[75%] text-center m-auto" style={{fontFamily:'Poppins'}}>
           <h1 className="font-semibold text-3xl mb-5">We're delighted to have you here! <span className="text-rose-600">:)</span></h1>
           <p className="mb-7">One-click digital libraries enable seamless access to extensive collections of books, articles, and multimedia. Users can quickly search, download, and enjoy resources, enhancing learning and research efficiency. These platforms streamline the user experience, making knowledge more accessible than ever.</p>
           <Link to="/" className="px-2 py-3 bg-rose-600 font-semibold text-white rounded hover:bg-rose-900">Back To Home</Link>
        </div>
          <div className="flex flex-wrap px-3 m-auto gap-5 justify-center mt-8"> 
            {
                books.map((item)=>{
                    return(
                        <div className="bg-gray-200 flex flex-col items-center p-4 rounded-xl">
                        <img src={item.Image} alt={item.Book_Name} className="w-1/2" />
                        <h1 className="font-bold text-xl">{item.Book_Name}</h1>
                        <p>{item.Description}</p>
                        <p>{item.Author}</p>
                        <p>{item.Type}</p>
                        <button className="bg-indigo-700 w-[70%] my-3 py-2 rounded-full text-white font-semibol">Download</button>
                    </div>
                    )
                })
            }
        </div>
      </>
    )
}
export default Books;