import CeoContact from "../components/CeoContact";
import ContactForm from "../components/ContactForm";
import ContactText from "../components/ContactText";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";



const Contact = () => {
    return (
        <div>
            <Navbar />
            <CeoContact />
            <ContactText />
            <SocialMedia />
            <ContactForm />
            <Footer /> 
        </div>
    );
};

export default Contact;