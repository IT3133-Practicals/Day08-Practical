import './App.css';
import { BrowserRouter as Router,Routes,Route,Link,NavLink } from 'react-router-dom';

import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
