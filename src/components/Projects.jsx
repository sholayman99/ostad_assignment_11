import { useEffect, useState } from "react";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("https://jsonplaceholder.org/users");
      let result = await res.json();
      setProjectsData(result);
    })();
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridGap: "20px",
        padding: "50px",
      }}
    >
      {projectsData.slice(0,15).map((p, index) => (
        <div style={{ border: "2px solid black", padding: "5px" , textAlign:"justify" }} key={index}>
          <p>Name:{p.firstname} </p>
          <p>Email:{p.email} </p>
          <p>BirthDate:{p.birthDate} </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
