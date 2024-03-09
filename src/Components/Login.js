import React from "react";
import "./Login.css";
import { useState } from "react";

const Login = ({onClose: handleCloseLoginForm}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (

    
    <div>
      <div className="modal">
        <div className="modal-content">
        <button className="close-btn" onClick={handleCloseLoginForm}>×</button>
        <div className="wrapper">
        <div className="card-switch">
          <label className="switch">
            <input type="checkbox" className="toggle" />
            <span className="slider"></span>
            <span className="card-side"></span>
            <div className="flip-card__inner">
              <div className="flip-card__front">
                <div className="title">Log in</div>
                <form className="flip-card__form" action="">
                  <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                  <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                  <button className="flip-card__btn">Let's go!</button>
                </form>
              </div>
              <div className="flip-card__back">
                <div className="title">Sign up</div>
                <form className="flip-card__form" action="">
                  <input className="flip-card__input" placeholder="Name" type="text" />
                  <input className="flip-card__input" name="email" placeholder="Email" type="email" />
                  <input className="flip-card__input" name="password" placeholder="Password" type="password" />
                  <button className="flip-card__btn">Confirm!</button>
                </form>
              </div>
            </div>
          </label>
        </div>   
      </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
