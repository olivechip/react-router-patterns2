import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Color from './Color';
import Add from './Add';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  const [ colors, setColors ] = useState(props.colors);

  const addColor = (color) => {
      setColors(colors => {
          const newColors = [ color, ...colors ];
          console.log(newColors);
          return newColors;
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Routes>
            <Route path="/colors" element={<Home colors={colors}/>}></Route>
            <Route path="/colors/new" element={<Add addColor={addColor}/>}></Route>
            <Route path="/colors/:color" element={<Color />}></Route>

            <Route path="*" element={<Navigate to="/colors"></Navigate>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

App.defaultProps = {
  colors: [
    'rgb(255,0,0)', 'rgb(255,165,0)', 'rgb(255,250,205)', 'rgb(34,139,34)', 'rgb(0,0,255)','rgb(128,0,128)'
  ]
}

export default App;
