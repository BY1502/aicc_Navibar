import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Index';
import Features from './components/Features/Index';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
