import React from 'react';
import { NavLink} from "react-router-dom";
const Footer2 = () => {
  return (
    <footer id="footer" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App For Android and IOS mobile phone</p>
            <img src="{playStore}" alt="playstore" className="img-fluid" />
            <img src="{appStore}" alt="Appstore" className="img-fluid" />
          </div>
          <div className="col-md-4 text-center">
            <h1>ECOMMERCE</h1>
            <p>&copy; 2023 AmarGupta</p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <NavLink to ="/insta" className="text-white d-block">Instagram</NavLink>
            <NavLink to ="/insta" className="text-white d-block">Whatsapp</NavLink>
            <NavLink to ="/insta" className="text-white d-block">Twitter</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
