import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from 'uihome/HomePage'

export default function LoadRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
