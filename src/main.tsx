import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.tsx';
import Error from './pages/Error.tsx';
import Category from './pages/Category.tsx';
import Details from './pages/Details.tsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Checkout from './pages/Checkout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: 'category',
    element: <Category/>
  },
  {
    path: 'details',
    element: <Details/>
  },
  {
    path: 'checkout',
    element: <Checkout/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
