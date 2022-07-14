import React from 'react'
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useLocation
} from 'react-router-dom'
import HomePage from 'uihome/HomePage'
import ContextualPanel from '../ContextualPanel'

function AppRoutes() {
  const location = useLocation()
  return (
    <Routes>
      <Route path="/home*" element={<HomePage location={location} />}></Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

export default function LoadRoutes() {
  return (
    <BrowserRouter>
      {/* emulating user context */}
      <ContextualPanel />
      <AppRoutes />
    </BrowserRouter>
  )
}
