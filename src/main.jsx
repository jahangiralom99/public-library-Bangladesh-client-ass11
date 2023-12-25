import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Root from './Routes/Root.jsx'
import AuthProvider, {} from './AuthProvider/AuthProvide.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={Root}></RouterProvider>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>,
)
