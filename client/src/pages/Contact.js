import React from 'react';
import Layout from '../components/Layout/Layout'; // Import your Layout component


const Contact = () => {
  return (
    <Layout>
    
      <div className="contact-container">
        {/* Half page with a big image */}

        <div className="contact-image">
        <img src="https://images.unsplash.com/photo-1499159058454-75067059248a?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="" style={{height:"371px" ,width:"720px"}} />

        </div>

        {/* Half page with contact information */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <hr className="divider" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel ipsa asperiores dolorum nesciunt vitae, cumque ut suscipit maiores in facilis, voluptatibus distinctio odit.</p>
          <div className="contact-items-container">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>Email: amar2115425@akgec.ac.in</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>Phone: 8601082965</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-headset"></i>
              <span>Customer Care: 6393833856</span>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Contact;
