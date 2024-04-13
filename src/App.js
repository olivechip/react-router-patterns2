import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import logo from './logo.svg';
import './App.css';

const App = ({ colors }) => {
  console.log(colors)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Routes>
            <Route path="/colors" element={<Home colors={colors}/>}></Route>
            <Route path="*" element={<Navigate to="/colors"></Navigate>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

App.defaultProps = {
  colors: [
    'red', 'orange', 'yellow', 'green', 'blue', 'purple'
  ]
}

export default App;
