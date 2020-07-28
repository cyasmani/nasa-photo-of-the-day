import React from "react";
import "./App.css";
import Header from "./Header.js"
import Body from "./Body.js"
import Footer from "./Footer.js"


function App() {
  return (
    <div className="App">
      <Header />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Body />
      <Footer/>
      
    </div>
  );
}

export default App;
