import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Routes>
            <Route path="/colors" element={<Home />}></Route>
            <Route path="*" element={<Navigate to="/colors"></Navigate>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
