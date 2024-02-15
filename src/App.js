import "./App.css";
import Navbar  from "./navbar";
import Home from "./Home";



function App() {   //root component of the application and the first component that gets rendered to the dom
  

  const title = "welcome to first react app";
  const likes = 50;
  const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar/> 
      <div className="content">
        <Home></Home>
        <h1> {title}</h1>
        <p>liked {likes} times</p>
        <a href={link}>Google site</a>
       
      </div>
    </div>
  );
}

export default App; //we can use it in other file
