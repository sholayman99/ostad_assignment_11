

const CeoContact = () => {
    return (
        <div style={{padding:"50px"}} >
          <h1 style={{color:"#0B1C45"}} >Meet Our CEO</h1>  
          <div  style={{display:"flex " , alignItems:"start" , justifyContent:"space-around"}}>
            <img style={{borderRadius:"20px"}} src={"https://media.istockphoto.com/id/1413763041/photo/smiling-businesswoman-looking-up-while-working.webp?b=1&s=170667a&w=0&k=20&c=XhyEwX2DBPNcRSo9s3L4U4cYxLecWrwp9ly0m4xRVwo="} />
            <div style={{color:"#0B1C45"}}>
                <h3>Lia Madison</h3>
                <p>35 years Old</p>
                <p>Email:lia@madison.com</p>
                <p>Mobile:01xxxxxxxxx</p>
            </div>
          </div>
        </div>
    );
};

export default CeoContact;