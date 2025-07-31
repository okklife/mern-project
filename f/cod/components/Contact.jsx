import React, { useState } from "react";
import "../Style/Contact.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../store/auth";

const Contact = () => {
  const [review, setreview] = useState({
    username: "",
    email: "",
    message: "",
  });
   const {validtoken} =useAuth()

  const handledata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setreview({
      ...review,
      [name]: value,
    });
  };
  const handlesubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/api/user/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" ,
          Authorization :validtoken
        },
        body: JSON.stringify(review),
        credentials: "include",
      });
        const data = await response.json();
      if (!response.ok) {
        toast.error(data.message || "Something went wrong!", {
          toastId: "contact-error",
        });
        return;
      }
    
      toast.success("Sent succesfully", {
        toastId: "sentsuccess",
      });
    } catch (error) {
       const data = await response.json();
      toast.error(data.error, {
        toastId: "network-error",
      });
    }
  };
  return (
    <>
      <div className="contact-container">
        <div className="contact-image">
          <img src="../src/assets/2.jpg" alt="Contact Graphic" />
        </div>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              name="username"
              value={review.username}
              onChange={handledata}
              placeholder="Username"
              required
            />
            <input
              type="email"
              name="email"
              value={review.email}
              onChange={handledata}
              placeholder="Email"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              value={review.message}
              onChange={handledata}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div style={{ maxWidth: "800px", margin: "auto" }}>
        <h2>Sector 20-C, Chandigarh</h2>
        <iframe
          title="Sector 20-C Map"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1574385955936!2d76.78352047492694!3d30.721410174638308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed427ff6a6d1%3A0xf52c95cf2f5d44a5!2sSector%2020-C%2C%20Chandigarh%2C%20160020!5e0!3m2!1sen!2sin!4v1722300141234"
        ></iframe>
      </div>
      <ToastContainer position="top-right" theme="dark" autoClose={1000} />
    </>
  );
};

export default Contact;
