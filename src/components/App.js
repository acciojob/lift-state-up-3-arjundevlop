
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const [data, setdata] = useState("");


  return (
    <div className="parent">
    <div className="tomato-child">
      <h2>Child Component 1</h2>
      <button onClick={(e)=>{setdata(e.target.innerHTML)}}>Option 1</button>
    </div>

    <div className="yellow-child">
      <h2>Child Component 2</h2>
      <button onClick={(e)=>{setdata(e.target.innerHTML)}}>Option 2</button>
    </div>

    <div className="answer">
    Selected Option: {data}

    </div>
        
    </div>
  )
}

export default App
