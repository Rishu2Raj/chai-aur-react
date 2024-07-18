import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex justify-center flex-wrap gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button onClick={()=>setColor("red")}
          className="outline-none px-4 rounded-xl py-1 text-white shadow-lg"
          style={{backgroundColor: "red"}}>Red</button>

          <button onClick={()=>setColor("green")}
          className="outline-none px-4 rounded-xl py-1 text-white shadow-lg"
          style={{backgroundColor: "green"}}>Green</button>

          <button onClick={()=>setColor("blue")}
          className="outline-none px-4 rounded-xl py-1 text-white shadow-lg"
          style={{backgroundColor: "blue"}}>Blue</button>

          <button onClick={()=>setColor("yellow")}
          className="outline-none px-4 rounded-xl py-1 text-white shadow-lg"
          style={{backgroundColor: "yellow"}}>Yellow</button>

          <button onClick={()=>setColor("olive")}
          className="outline-none px-4 rounded-xl py-1 text-white shadow-lg"
          style={{backgroundColor: "olive"}}>Olive</button>

          <button onClick={()=>setColor("gray")}
          className="outline-none px-4 rounded-xl py-1 text-white shadow-lg"
          style={{backgroundColor: "gray"}}>Gray</button>

          <button onClick={()=>setColor("pink")}
          className="outline-none px-4 rounded-xl py-1 text-white shadow-lg"
          style={{backgroundColor: "pink"}}>Pink</button>

          <button onClick={()=>setColor("purple")}
          className="outline-none px-4 rounded-xl py-1 text-white shadow-lg"
          style={{backgroundColor: "purple"}}>Purple</button>

          <button onClick={()=>setColor("white")}
          className="outline-none px-4 rounded-xl py-1 text-white shadow-lg"
          style={{backgroundColor: "white"}}>White</button>

          <button onClick={()=>setColor("black")}
          className="outline-none px-4 rounded-xl py-1 text-white shadow-lg"
          style={{backgroundColor: "black"}}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
