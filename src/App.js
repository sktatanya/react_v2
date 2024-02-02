import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Product from './component/Product';
import { ProductProvider } from './context/ProductContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProductProvider>
        <Layout />
      </ProductProvider>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  },
  
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
