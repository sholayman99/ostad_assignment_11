import think from "../assets/images/think.jpg"

const Think = () => {
    return (
        <div style={{backgroundImage:`url(${think})`,backgroundPosition:"center center",
        backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh", backgroundAttachment:"fixed",
        color:"white",display:"flex",justifyContent:"center",alignItems:"center", flexDirection:"column",
        }} >
           <h2 >Can You Think Like a Pro?</h2> 
           <h3>Do not Worry.We are Here To Help You.</h3>
           <br />
       
           <button style={{padding: "8px 16px", backgroundColor: "blueviolet", border: "none",
           color: "white",fontSize:"18px"
        }}>Explore..</button>
        </div>
    );
};

export default Think;