import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer"
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import About from "./Pages/About"
function App(){
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/contact" element={<h1>Contact</h1>}/>
                <Route path="/login" element={<h1>Login</h1>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App;