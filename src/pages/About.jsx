import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Mern from "../components/Mern";
import MernPopularity from "../components/MernPopularity";
import Navbar from "../components/Navbar";
import ReactPopularity from "../components/ReactPopularity";


const About = () => {
    return (
        <div>
           <Navbar />
           <AboutUs />
           <ReactPopularity />
           <Mern />
           <MernPopularity />
           <Footer />
        </div>
    );
};

export default About;