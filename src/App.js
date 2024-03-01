import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
function App() {
  return (
    <div className="App pt-4 pb-4" style={{ background: "linear-gradient(120deg, rgb(255, 232, 255) 9%, rgb(224, 239, 255) 53%)" }}>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
