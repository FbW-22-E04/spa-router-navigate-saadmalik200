import React from "react";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const changeHandle = () => {
    navigate("/home");
  };

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={changeHandle}>Change Page</button>
    </div>
  );
};

export default Contact;
