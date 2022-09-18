import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AboutUs.css";

export default function AboutUs() {
  // const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    notifyOK();
  }

  const notifyOK = () => {
      toast.success("Thank you! We will be in touch soon 🐶", {
        theme: "colored",
      });
  };

  function handleClick(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <form
      className="form-aboutus"
      onSubmit={handleSubmit}
    >
      <div className="div-inputs">
        <div>
          <label>Leave us your message and we'll contact you!</label>
          <input
            className="inputAbout"
            type="text"
            placeholder="Your name"
            id="name"
            required
          />
        </div>
        <div>
          <input
            className="inputAbout"
            type="email"
            placeholder="Email"
            id="email"
            required
          />
        </div>
        <div>
          <textarea
            className="inputAbout"
            placeholder="Your message"
            id="message"
            required
          />
        </div>
        <div>
          <button> Send a message </button>
          <button onClick={(e) => handleClick(e)}>Go Home</button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  );
}
