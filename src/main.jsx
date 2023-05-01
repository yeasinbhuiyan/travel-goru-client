import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "react-google-flight-datepicker/dist/main.css";

import {
  RouterProvider
} from "react-router-dom";
import router from './Router/router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider><RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
