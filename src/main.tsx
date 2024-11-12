import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PhotographyPage from "./pages/PhotographyPage";
import HomePage from "./pages/HomePage";


const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "about",
        element: <AboutPage/>,
      },
      {
        path: "resume&cv",
        element: <ResumePage/>,
      },
      {
        path: "photos",
        element: <PhotographyPage/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
