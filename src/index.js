import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Link, RouterProvider, Outlet} from 'react-router-dom'

import {router} from './routes/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <React.StrictMode>
       
      
      <Outlet />
    </React.StrictMode>
  </RouterProvider>
);


