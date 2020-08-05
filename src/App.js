import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./Header.js"
import Body from "./Body.js"
import Footer from "./Footer.js"
import axios from "axios"


function App() {
  const [mainData, getData] = useState([]);
    
  useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=4BqgdDP2z4oWbyVOKRycye7yMV1s7s6ty6QbL8Gz&date=2020-07-27")
          .then(response => {
              console.log("We got it", response)
              getData(response.data)
                  
          })
          .catch(error => {
              console.log("We got an error", error)
          })
        }, [])

        console.log(mainData);
  return (
    <div className="App">
      <Header />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Body bodyGetData={mainData}/>
      <Footer footerGetData={mainData}/>
      
    </div>
  );
}

export default App;
