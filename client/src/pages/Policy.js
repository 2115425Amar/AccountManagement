import React from 'react'
import Layout from '../components/Layout/Layout'
const Policy = () => {
  return (
    <Layout>
    <div className="contact-container">
      {/* Half page with a big image */}
      <div className="contact-image"></div>

      {/* Half page with contact information */}
      <div className="contact-info">
        <h1>Contact Us</h1>
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
  )
}

export default Policy
