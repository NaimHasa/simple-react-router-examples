import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Product from './component/Product/Product';

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <div>This is a Defult page</div> },
    { path: "/home", element: <Home></Home> },
    { path: "/about", element: <About></About> },
    { path: '/product', element: <Product></Product> }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;