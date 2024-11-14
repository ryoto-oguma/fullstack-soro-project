import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Calendar from "./pages/Calendar/Calendar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
} from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2e4329",
      light: "#596b55",
      dark: "#1e2b1a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#c78e53",
      light: "#daab7b",
      dark: "#876038",
      contrastText: "rgba(2,2,2,0.87)",
    },
  },
});

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
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </StyledThemeProvider>
    </MaterialThemeProvider>
  </StrictMode>
);
