import "../assets/css/Footer.css"

const Footer = () => {
    const today = new Date().getFullYear();
    return (
        <div className="footer">
           <h4>All Rights Reserved to Ostad Assignment {today} </h4> 
        </div>
    );
};

export default Footer;