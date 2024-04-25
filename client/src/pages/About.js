import React from 'react';
import Layout from '../components/Layout/Layout'; // Import your Layout component

const About = () => {
  return (
    <Layout>
      <div className="contact-container">
        {/* Half page with a big image */}

        <div className="contact-image">
        <img src="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.jpg?s=2048x2048&w=is&k=20&c=IuF5Cnl9dFZdrubE-t8UNOT9OLr52sX1ER_i6eEooiM="
        alt="" style={{height:"371px" ,width:"720px"}} />

        </div>

        {/* Half page with contact information */}
        <div className="contact-info">
          <h1>About Us</h1>
          <hr className="divider" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel ipsa asperiores dolorum nesciunt vitae, cumque ut suscipit maiores in facilis, voluptatibus distinctio odit.</p>
          <div className="contact-items-container">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>Email: example@example.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>Phone: +1 123 456 7890</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-headset"></i>
              <span>Customer Care: +1 987 654 3210</span>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default About;
