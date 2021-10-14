import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Nav></Nav>
     <AboutUs></AboutUs>
    </div>
  );
}

export default App;
