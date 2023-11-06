import FeedBack from "../components/FeedBack";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import ProjectBg from "../components/ProjectBg";
import Projects from "../components/Projects";




const Project = () => {
    
    return (
        <div>
            <Navbar />
            <ProjectBg />
            <Projects />
            <Posts/>  
            <FeedBack />         
            <Footer /> 
        </div>
    );
};

export default Project;