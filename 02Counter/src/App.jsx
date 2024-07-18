import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);
  // let counter = 15;
  const addValue = () => {
    if (counter >= 20) {
      setCounter(counter);
    }else{
      setCounter(prevCounter =>prevCounter + 1);
      setCounter(prevCounter =>prevCounter + 1);
      setCounter(prevCounter =>prevCounter + 1);
      setCounter(prevCounter =>prevCounter + 1);
    }
    // counter += 1;
    // console.log(counter)
    // console.log("value added", Math.random());
  }
  const removeValue = () => {
    if (counter === 0) {
      setCounter(counter);
    }else{
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>current value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br /><br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
