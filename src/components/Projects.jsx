

const Projects = () => {
    const data = [
        {
            name:"Project 1",
            details:"This is Project one."
        },
        {
            name:"Project 2",
            details:"This is Project two."
        },
        {
            name:"Project 3",
            details:"This is Project three."
        },
        {
            name:"Project 4",
            details:"This is Project four."
        },
    ]
    return (
        <div style={{display:"grid" , gridTemplateColumns:"repeat(4 ,1fr)" , padding:"20px"}} >
        {
            data.map((d,index) => <div style={{ textAlign:"center", gap:"10px",width:"250px" ,padding:"20px",
             backgroundColor:"#1CC089" , color:"white"}} 
            key={index} >
               <h3> {d.name} </h3>
               <p>{d.details} </p>
               <button style={{padding: "8px 16px", backgroundColor: "blueviolet", border: "none",
           color: "white",fontSize:"18px"
        }}>Details</button>
            </div>)
        }
    </div>
    );
};

export default Projects;