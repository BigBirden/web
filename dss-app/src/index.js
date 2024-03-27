import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Directors} from "./pages/Directors";
import {Spectors} from "./pages/Spectors";
import {Spector} from "./pages/Spector";

const router = createBrowserRouter([
    {
        path: "/directors",
        element: <Directors/>,
    },
    {
        path: "/spectors",
        element: <Spectors/>,
    },
    {
        path: "/spector/:id",
        element: <Spector/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

