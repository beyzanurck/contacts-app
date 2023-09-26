import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from "./routes/root";
import NewContact from "./components/NewContact.jsx"
import About from "./components/About.jsx"
import Home from "./components/Home.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/new-contact",
    element: <NewContact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
