import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './page/Home'
import About from './page/About'
import AuthLayout from './layouts/AuthLayout'
import Login from './components/Login'
import Register from './components/Register' 
import Products from './page/Products'
import ProductsDetailed from './page/ProductsDetailed'  

const App = () => {
  return (
    <div>
      <Routes >
        <Route element={<RootLayout />}>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
           <Route path='/products/:id' element={<ProductsDetailed/>} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* qo'shing */}
        </Route>
      </Routes>
    </div>
  )
}

export default App