import { useEffect, useState } from "react";


const Todos = () => {
    const [todosData, setTodosData] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos");
      let result = await res.json();
      setTodosData(result);
    })();
  }, []);
    return (
      <>
      <h1>Todos__</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridGap: "20px",
          padding: "50px",
        }}
      >
        {todosData.slice(0,15).map((p, index) => (
          <div style={{ border: "2px solid black", padding: "5px" ,  backgroundColor:"#26CF79" ,textAlign:"justify" }} key={index}>
            <p>Name:{p.title} </p>
            <p>Email:{p.userId} </p>
            <p>Completed:{p.completed} </p>
          </div>
        ))}
      </div>
      </>
    );
};

export default Todos;