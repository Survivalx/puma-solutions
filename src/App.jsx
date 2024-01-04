import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Context from './data/Context';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import "./index.scss"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Products",
        element: <Products />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Cart",
        element: <Cart />
      }
    ],
  },
]);

const App = () => {
  return (
    <div>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </div>
  )
}

export default App