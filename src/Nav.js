import React, { useState, useEffect} from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
          handleShow(true)
      } else handleShow(false);
    });    
    return () => {
        window.removeEventListener("scroll");
      };
  }, []);
  
  return (
    <div className= {`nav ${show && "nav__black"}`} >
      <img
        className="nav__logo"
        src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
