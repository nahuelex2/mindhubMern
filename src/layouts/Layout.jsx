import React from 'react'
import Header from '../components/Header/Index'
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
