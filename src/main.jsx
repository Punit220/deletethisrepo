import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { NewsPage } from './pages/newspage/NewsPage.jsx';
import { AppLayout } from './layout/appLayout.jsx';
import HomePage from './pages/Home page/HomePage.jsx';
import { Contactpage } from './pages/ContactPage/Contactpage.jsx';
import { AboutPage } from './pages/AboutPage/AboutPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[
      {
        path: "/news",
        element:<NewsPage/>,
      },
      {
        path: "/home",
        element:<HomePage/>,
      },
      {
        path: "/contact",
        element:<Contactpage/>,
      },
      {
        path: "/About",
        element:<AboutPage/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
