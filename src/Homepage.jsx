import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Homepage.css'

function Homepage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Buenas</h1>
      </header>

      <main>
        <div>
          Esto es mi projecto de react
        </div>
      </main>

    </>
  )
}

export default App
