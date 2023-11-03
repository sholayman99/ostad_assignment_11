import ContactForm from "../components/ContactForm";
import ContactText from "../components/ContactText";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



const Contact = () => {
    return (
        <div>
            <Navbar />
            <ContactText />
            <ContactForm />
            <Footer /> 
        </div>
    );
};

export default Contact;