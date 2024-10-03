import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./src/pages/login";
import Register from "./src/pages/register";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <div>Home</div>,
      },
    ],
  },
]);
