import React from 'react'
import Layout from '../components/Layout/Layout'
const Policy = () => {
  return (
    <Layout>

    <div className="contact-container">
      {/* Half page with a big image */}
      <div className="contact-image">
      <img src="https://plus.unsplash.com/premium_photo-1661494219926-352aca04bac1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="" style={{height:"371px" ,width:"720px"}} />
      </div>
      {/* Half page with contact information */}
      <div className="contact-info">
        <h1>Privacy Policy</h1>
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