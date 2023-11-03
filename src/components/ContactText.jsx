import contact from "../assets/images/contact.jpg"
import "../assets/css/ContactText.css"
const ContactText = () => {
    return (
        <div className="con-container">
           <img src={contact} /> 
           <div>
            <h2>Contact Us Trough This Media:</h2>
            <h5>Email:Demo@examh5le.com</h5>
            <h5>Mobile No:017xxxxxxxxx</h5>
            <h5>Web:www.findus.com</h5>
            <h5>Facebook:www.facebook.com/ostad-assignmnet</h5>
           </div>
        </div>
    );
};

export default ContactText;