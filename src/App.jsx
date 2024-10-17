import { useState } from 'react'

import './App.css'
import { Header } from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './components/Homepage/Homepage'

import { Favourite } from './components/Favouitepage/Favourite'
import { ProductsPage } from './components/Productspage/ProductsPage'

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route
            path='/products'
            element={<ProductsPage></ProductsPage>}
          ></Route>
          <Route path='/favoritos' element={<Favourite></Favourite>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
