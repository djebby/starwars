import './App.css';
import Nav from "./../Nav/Nav.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./../Main/Main.js";
import Footer from "./../Footer/Footer.js";
import {useState} from "react";


function App() {

  const [keyword,setKeyword] = useState("");

  function setKeyword2(key){
    setKeyword(key);
  }

  return (
    <div className="App">
      <Nav setKeyword2={setKeyword2} />
      <Main keyword={keyword} />
      <Footer />
    </div>
  );
}

export default App;
