import { useState } from 'react'
import './App.css'
import image from './YoPort.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<h1>Hola</h1>
<img src={image} />
    </div>
  )
}

export default App
