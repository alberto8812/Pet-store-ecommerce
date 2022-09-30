import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AboutUs.css";
import { postContact } from "../../../redux/actions";
/////
export default function AboutUs() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const initialState = {
    name: '',
    email: '',
    message: ''
  };
  
  const [input, setInput] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postContact(input));
    notifyOK();
    setInput(initialState);
  }

  const notifyOK = () => {
      toast.success(`Thank you ${input.name}! We will be in touch soon 🐶`, {
        theme: "colored",
      });
  };

  function handleClick(e) {
    e.preventDefault();
    navigate("/");
  };

  function onChange(e){
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name] : e.target.value
    });
  }

  return (
    
    <form
      className="form-aboutus"
      onSubmit={handleSubmit}
    >
      <div className="div-inputs">
          <label className="main-title-aboutUs">Leave us your message and we'll contact you!</label>
          <input
            className="inputAbout"
            type="text"
            placeholder="Your name"
            id="name"
            name="name"
            value={input.name} 
            onChange={(e)=>onChange(e)}
            required
          />
          <input
            className="inputAbout"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={input.email} 
            onChange={(e)=>onChange(e)}
            required
          />
          <textarea
            className="inputAbout"
            placeholder="Your message"
            id="message"
            name="message"
            value={input.message} 
            onChange={(e)=>onChange(e)}
            required
          />

        <div className="div-buttons">
          <button className="btn-aboutnUs"> Send a message </button>
          <button className="btn-aboutnUs" onClick={(e) => handleClick(e)}>Go Home</button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
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
