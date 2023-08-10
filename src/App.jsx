import { useState } from 'react'
import './App.css'
import Layout from './layouts/Layout'

import Home from './pages/Home'
import Cities from './pages/Cities'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/cities', element: <Cities /> }
      ]
    },


  ])
  return (
    <>
      <RouterProvider router={router} />



    </>
  )
}

export default App
