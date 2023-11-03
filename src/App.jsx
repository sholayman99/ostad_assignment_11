import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;