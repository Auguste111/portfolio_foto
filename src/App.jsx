import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Lighting from './pages/Lighting'
import Info from './pages/Info'
import TableOfContents from './pages/TableOfContents'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/info" element={<Info />} />
          <Route path="/toc" element={<TableOfContents />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
