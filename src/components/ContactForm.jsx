import { useState } from "react";
import "../assets/css/ContactForm.css";

const ContactForm = () => {
  const [formObj, setFormObj] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputChange = (key, value) => {
    setFormObj((preObj) => ({
      ...preObj,
      [key]: value,
    }));
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(formObj);
    alert(JSON.stringify(formObj));
  };

  return (
    <div className="form-container">
        <h2>You Can Email Us:</h2>
      <form onSubmit={submitData}>
        <input
          type="text"
          onChange={(e) => inputChange("name", e.target.value)}
          value={formObj.name}
          placeholder="Full Name"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => inputChange("email", e.target.value)}
          value={formObj.email}
          placeholder="Email"
        />
        <br />
        <br />

        <textarea
          onChange={(e) => inputChange("message", e.target.value)}
          rows={10}
          cols={50}
          value={formObj.message}
          placeholder="Your Message"
        ></textarea>
        <br />
        <br />
        <input style={{backgroundColor:"#26D078"}} type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default ContactForm;
