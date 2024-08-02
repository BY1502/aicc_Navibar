import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Index';
import Features from './components/Features/Index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
