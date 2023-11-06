import {AiFillFacebook,AiFillTwitterSquare,AiFillInstagram,AiFillLinkedin,AiFillYoutube} from "react-icons/ai"


const SocialMedia = () => {
    return (
        <div style={{padding:"30px" , display:"grid" , gridTemplateColumns:"repeat(5,1fr)" , gap:"5px"}} >
            <div style={{backgroundColor:"#071C3D",display:"flex" , alignItems:"start" , justifyContent:"center" , color:"white" , padding:"5px 0px" , borderRadius:"5px"}}>
                <AiFillFacebook size={50}/>
                <h3>Facebook</h3>
            </div>
            <div style={{backgroundColor:"#071C3D",display:"flex" , alignItems:"start" , justifyContent:"center" , color:"white" , padding:"5px 0px" , borderRadius:"5px"}}>
                <AiFillInstagram size={50}/>
                <h3>Instagram</h3>
            </div>
            <div style={{backgroundColor:"#071C3D",display:"flex" , alignItems:"start" , justifyContent:"center" , color:"white" , padding:"5px 0px" , borderRadius:"5px"}}>
                <AiFillTwitterSquare size={50}/>
                <h3>Twitter</h3>
            </div>
            <div style={{backgroundColor:"#071C3D",display:"flex" , alignItems:"start" , justifyContent:"center" , color:"white" , padding:"5px 0px" , borderRadius:"5px"}}>
                <AiFillLinkedin size={50}/>
                <h3>LinkedIn</h3>
            </div>
            <div style={{backgroundColor:"#071C3D",display:"flex" , alignItems:"start" , justifyContent:"center" , color:"white" , padding:"5px 0px" , borderRadius:"5px"}}>
                <AiFillYoutube size={50}/>
                <h3>Youtube</h3>
            </div>
        </div>
    );
};

export default SocialMedia;