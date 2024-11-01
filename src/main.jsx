import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/contact/Contact';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import Users from './components/Users/Users';
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
      },
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/post',
        element:<Post></Post>
      }
      
    ]
  },


]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
