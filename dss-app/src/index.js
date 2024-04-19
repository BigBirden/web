import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Destroyment} from "./pages/Destroyment";
import {Asteroids} from "./pages/Asteroids";
import {Asteroid} from "./pages/Asteroid";

//Роутер, который позволяет перемещаться по страницам
const router = createBrowserRouter([
    {
        path: "/",
        element: <Asteroids/>,
    },
    {
        path: "/asteroids",
        element: <Asteroids/>,
    },
    {
        path: "/destroyment",
        element: <Destroyment/>,
    },
    {
        path: "/asteroid/:id",
        element: <Asteroid/>,
    },
]);

//Точка старта сервера
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

