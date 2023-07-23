import './App.css';
import {useState, useEffect,useRef} from "react";
import Viewer from './component/Viewer';
import Even from "./component/Even";
import Controller from './component/Controller';

function App() {
  const [count,setCount] =useState(0);
  const [text, setText] =useState("");

  const handleSetCount = (value) =>{
    setCount(count+value);
  };

  const handleChangeText = (e) =>{
    setText(e.target.value);
  };

  const didMountRef=useRef(false);

  return(
  <div className="App"> 
    <h1>Simple Counter</h1>
    <section>
      <input value={text} onChange={handleChangeText}/>
    </section>
    <section>
      <Viewer count={count}/>
      {count %2 === 0 && <Even />}
    </section>
    <section>
      <Controller handleSetCount={handleSetCount}/>
    </section>
  </div>
  );
}

export default App;
