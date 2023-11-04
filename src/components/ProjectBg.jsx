import about from "../assets/images/about.jpg"

const ProjectBg = () => {
    return (
        <div className="bg-container">
        <div>
         
         <h1> Project Page</h1>
         <button>Read More..</button>
        </div>
        <img src={about} />
    </div>
    );
};

export default ProjectBg;