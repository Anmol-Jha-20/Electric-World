import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PhotoGallery from "./pages/GalleryPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProductList from "./pages/ProductPages/ProductList.jsx";
import CeilingFanProductList from "./pages/ProductPages/CeilingFan/CeilingFanList.jsx";
import SwitchBoardProductList from "./pages/ProductPages/SwitchBoard/SwitchBoardList.jsx";
import LedBulbProductList from "./pages/ProductPages/LedBulb/LedBulbList.jsx";
import StreetLightProductList from "./pages/ProductPages/StreetLight/StreetLightList.jsx";
import COBLightProductList from "./pages/ProductPages/COBLight/COBLightList.jsx";
import TubeLightProductList from "./pages/ProductPages/TubeLight/TubeLightList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/gallery",
        element: <PhotoGallery />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/flood-light",
        element: <ProductList />,
      },
      {
        path: "/ceiling-fan",
        element: <CeilingFanProductList />,
      },
      {
        path: "/switch-board",
        element: <SwitchBoardProductList />,
      },
      {
        path: "/led-bulb",
        element: <LedBulbProductList />,
      },
      {
        path: "/street-light",
        element: <StreetLightProductList />,
      },
      {
        path: "/cob-light",
        element: <COBLightProductList />,
      },
      {
        path: "/tube-light",
        element: <TubeLightProductList />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
