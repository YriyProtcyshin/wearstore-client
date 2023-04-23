import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum
            nemo consequatur aliquam incidunt voluptatem necessitatibus eaque
            sed, alias laborum similique magnam nobis pariatur dolor voluptates
            sit animi, ab quaerat.
          </span>
        </div>
        <div className="item">
          <h1>Contacts</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsum
            nemo consequatur aliquam incidunt voluptatem necessitatibus eaque
            sed, alias laborum similique magnam nobis pariatur dolor voluptates
            sit animi, ab quaerat.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">WearStore</span>
          <span className="copyright">&copy; 2023 WearStore.com</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
