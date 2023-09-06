import { Navigate } from "react-router-dom";
import AuthPage from "./components/page/authPage";
import MainLayout from "./layouts/mainLayout";
import TopicPage from "./components/page/topicPage";

const routes = (tokenIsExpired) => [
  {
    path: "topics",
    element: tokenIsExpired ? <MainLayout /> : <Navigate to="/auth" />,
    children: [
      {
        path: "",
        element: <TopicPage />,
      },
    ],
  },
  {
    path: "auth",
    element: tokenIsExpired ? <Navigate to="/" /> : <AuthPage />,
  },
  {
    path: "*",
    element: <Navigate to="/topics" />,
  },
];

export default routes;
