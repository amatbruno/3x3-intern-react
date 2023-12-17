import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import cards from './data/cards';
import CardView from './views/CardView';

const routes = [
  {
    path: "/",
    element: <App /> 
  }
]

cards.forEach(c => {
  routes.push({
    path: c.sectName,
    element: <CardView />
  })
  
})


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
