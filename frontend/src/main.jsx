import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
} from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import Calendar from "./pages/Calendar/Calendar.jsx";
import EventDetail from "./pages/EventDetail/EventDetail.jsx";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, Arial",
  },
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
    background: {
      main: "#ffffff",
    },
  },
});

// 後々Backendから取得する
const eventList = [
  {
    eventId: "1",
    title: "池袋でlunch",
    place: "池袋",
    start: "2024-11-14 09:00",
    end: "2024-11-16 14:00",
    detail: "池袋でお昼にジンギスカンを食べませんか?",
    requests: [],
    eventOwner: "oguma",
  },
  {
    eventId: "2",
    title: "新宿でlunch",
    place: "新宿",
    start: "2024-11-14 09:00",
    end: "2024-11-15 14:00",
    detail: "新宿でお昼にサムギョプサルを食べませんか?",
    requests: [],
    eventOwner: "oguma",
  },
];

const router = createBrowserRouter([
  {
    path: "not_available",
    element: <h1>ただいま離席中です</h1>,
  },
  {
    path: "/calendar",
    element: <Calendar eventList={eventList} />,
  },
  {
    path: "/event/:eventId",
    element: <EventDetail eventList={eventList} />,
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
