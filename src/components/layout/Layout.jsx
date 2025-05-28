import React from 'react'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="font-sans antialiased">
      <Header />
      <main>{children}</main>
    </div>
  )
}
