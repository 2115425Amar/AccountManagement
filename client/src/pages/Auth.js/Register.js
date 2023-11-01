import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phone,setPhone]=useState("");
  const [answer,setAnswer]=useState("");
  const [address,setAddress]=useState("");


  const navigate = useNavigate();

// Form function
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log (name, email, password, phone, address, answer );

  try {
    // Construct the API endpoint URL
   // console.log(`${process.env.REACT_APP_API}/api/v1/auth/Register`);

    // Make the POST request
    const res = await axios.post('/api/v1/auth/Register', { name, email, password, phone, address ,answer});
    // Check the response and show appropriate toast messages
    if (res && res.data.success) {
      toast.success(res.data.message);
      // Redirect to the login page after successful registration
      navigate('/login');
    } 
    else {
      toast.error(res.data.message);
    }
  }
  catch (error) {
    console.error('Error during registration:', error);
    // Handle error and show an appropriate toast message
    toast.error('An error occurred during registration.');
  }
};


// console.log(process.env.REACT_APP_API);
  return (
    <Layout title="Register">
      <div className="register">

      <h1>Register </h1>

        <form onSubmit={handleSubmit}>
       
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-control"
              id="exampleInputname"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="form-control"
              id="exampleInputText"
              placeholder="Enter Your phone"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress"
              placeholder="Enter Your  Address"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e)=>setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputanswer"
              placeholder="Your Best Friend Name?"
              required
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-secondary bg-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>

    </Layout>
  );
};

export default Register;