import { Routes , Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PagenotFound from './pages/PagenotFound';
import Login from './pages/Auth.js/Login';
import Register from './pages/Auth.js/Register';
import Dashboard from './pages/User/Dashboard';
import "./App.css";
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth.js/ForgotPassword';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Policy' element={<Policy/>}/>
      <Route path='*' element={<PagenotFound/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>}>
         <Route path="" element={<Dashboard/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;