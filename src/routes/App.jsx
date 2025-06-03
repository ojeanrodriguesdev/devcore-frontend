import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from './Home'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
