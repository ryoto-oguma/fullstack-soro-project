import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Calendar from "./pages/Calendar/Calendar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "not_available",
    element: <h1>ただいま離席中です</h1>,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
