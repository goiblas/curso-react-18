import { useRef } from "react"
import Textfield from "./components/Textfield"
// import ValueRef from "./components/ValueRef"
// import CreateImage from "./components/CreateImage"
import Imperative from "./components/Imperative"

function App() {
  const nativeInputRef = useRef(null)
  const customInputRef = useRef(null)
  const imperativeRef = useRef(null)

  return (
    <div className="layout">
      <input ref={nativeInputRef} type="text" />
      <Textfield ref={customInputRef} />
      
      <button onClick={() => customInputRef.current.focus()}>Focus</button>
      {/* <ValueRef /> */}
      {/* <CreateImage /> */}

      <hr />

      <Imperative ref={imperativeRef} />
      <button onClick={() => imperativeRef.current.reset()}>Reset</button>
    </div>
  )
}

export default App
