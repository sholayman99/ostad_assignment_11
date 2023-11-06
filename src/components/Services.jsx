

const Services = () => {
    const data = [
        {
            name:"Service 1",
            details:"This is service one."
        },
        {
            name:"Service 2",
            details:"This is service two."
        },
        {
            name:"Service 3",
            details:"This is service three."
        },
        {
            name:"Service 4",
            details:"This is service four."
        },
    ]
    return (
        <div style={{display:"grid" , gridTemplateColumns:"repeat(4 ,1fr)" , padding:"20px"}} >
            {
                data.map((d,index) => <div style={{ textAlign:"center", gap:"10px",width:"250px" ,padding:"20px",
                 backgroundColor:"black" , color:"white"}} 
                key={index} >
                   <h3> {d.name} </h3>
                   <p>{d.details} </p>
                   <button>Details</button>
                </div>)
            }
        </div>
    );
};

export default Services;