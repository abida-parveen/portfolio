import React from "react";
import "../styles/header.css";
import facebook from "../assets/icons/facebook.svg";
import pinterest from "../assets/icons/pinterest.svg";
import twitter from "../assets/icons/twitter.svg";

const Header = () => {
  const icons = [
    {
      key: 1,
      icon: facebook,
    },
    {
      key: 2,
      icon: twitter,
    },
    {
      key: 3,
      icon: require("../assets/icons/linkedin.png"),
    },
    {
      key: 4,
      icon: require("../assets/icons/instagram.png"),
    },
    {
      key: 5,
      icon: pinterest,
    },
  ];
  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <div className="header_image_container">
          </div>
          <div className="header_content">
            <div>
              <h1>Jessica Henery</h1>
              <h4>Senior SEO Writer</h4>
            </div>
            <div className="social_icons">
              {icons.map((item) => (
                <img
                  key={item.key}
                  src={item.icon}
                  alt={`${item.icon} icon`}
                />
              ))}
            </div>
          </div>
        </div>
        <button className="button">Contact</button>
      </div>
    </header>
  );
};

export default Header;
