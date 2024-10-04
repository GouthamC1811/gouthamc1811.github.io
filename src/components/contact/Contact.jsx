import React, { useEffect } from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function sendMail(e) {
    e.preventDefault();

    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    
    emailjs
      .send("service8u29ovc", "template7dc3fdh", params, "4VkoMUlH_yUJqLEkx")
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent Successfully!');
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred, Please try again');
        }
      );
  }

  return (
    <>
      <section className='contact mb unique-contact'>
        <Back name='Contact Us' title='Support' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={sendMail}>
            <h4>Fill up The Form</h4> <br />
            <div>
              <input id="name" type='text' placeholder='Name' required />
              <input id="email" type='email' placeholder='Email' required />
            </div>
            <input id="subject" type='text' placeholder='Subject' required />
            <textarea id="message" cols='30' rows='10' placeholder='Message' required></textarea>
            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
