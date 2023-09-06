import { Navigate } from "react-router-dom";
import MainPage from "./components/page/mainPage";
import AuthPage from "./components/page/authPage";

const routes = () => [
  {
    path: "",
    element: <MainPage />,
  },
  {
    path: "auth",
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
