import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layouts/Layout'

import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Layout>
        <Home />
      </Layout>

    </>
  )
}

export default App
