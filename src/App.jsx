import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import Technologies from "./Components/Pages/Technologies";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading()
    }, 500);
  },[Route, Routes, BrowserRouter])

  return (
    <BrowserRouter>
      
    
        {loading ? 
        
          <div className="h-screen w-full text-center flex justify-center items-center text-2xl">
            <h1 className="text-white">Loading...</h1>
          </div>
          
          
          :
          
          <div className="mx-4">
    <Header></Header>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
      }
    </BrowserRouter>
    
  );
}

export default App;
