import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/about';
import Contact from './components/contact/Contact';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },


]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
