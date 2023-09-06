import { Navigate } from "react-router-dom";
import MainPage from "./components/page/mainPage";

const routes = () => [
  {
    path: "",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
