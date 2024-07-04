import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProductTopUp from './pages/ProductTopUp.jsx'
import Invoice from './pages/Invoice.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/invoice/:ref" element={<Invoice />} />
        <Route path="/:game" element={<ProductTopUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
