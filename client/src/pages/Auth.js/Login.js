import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import {useNavigate , useLocation} from 'react-router-dom';
import axios from "axios";
import {useAuth} from "../../context/auth"

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [auth,setAuth] = useAuth();

// Form function
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log ( email, password );

  try {
    const res = await axios.post('/api/v1/auth/Login', 
    // {email: this.state.email, password: password} 
     { email, password}
    );

    // let data = JSON.stringify({
    //   email: this.state.email,
    //   password: password
    // });
    // const res = axios.post(data,{headers:{"Content-Type" : "application/json"}});
  
    if (res && res.data.success) {
      toast.success(res.data.message);
      setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token
      });
      
    if (res && res.data.success) {
      toast.success(res.data.message);
      setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token,
      });
      localStorage.setItem('auth',JSON.stringify(res.data));
      navigate(location.state || "/");
    } else {
      toast.error(res.data.message);
    }

      navigate('/');
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.error('Error during registration:', error);
    toast.error('An error occurred during registration.');
  }
};

  return (
    <Layout title="Register">
    <div className="register">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
         
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
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

          <div className="d-grid gap-2">
          <button className="btn btn-secondary bg-primary"type="button" onClick={()=>{navigate('/forgot-password')}}>
            Forgot Password
          </button>
            <button className="btn btn-secondary bg-primary" type="submit">Login</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login