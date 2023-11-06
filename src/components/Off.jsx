import off from "../assets/images/off.jpg"

const Off = () => {
    return (
        <div style={{backgroundImage:`url(${off})`,backgroundPosition:"center center",
        backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh", backgroundAttachment:"fixed",
        color:"white",display:"flex",justifyContent:"center",alignItems:"start", flexDirection:"column",
        }} >
           <h1 style={{fontSize:"90px" , fontFamily:"roboto"}} >Do Not Wait Up</h1> 
       
           <button style={{padding: "8px 16px", backgroundColor: "blueviolet", border: "none",
           color: "white",fontSize:"18px"
        }}>Explore..</button>
        </div>
    );
};

export default Off;