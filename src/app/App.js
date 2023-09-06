import { useRoutes } from "react-router-dom";
import routes from "./routes";
import localStorageService from "./services/localStorage.service";

function App() {
  const tokenIsExpired =
    localStorageService.getTokenExpiresDate() > new Date().getTime();
  if (!tokenIsExpired) localStorageService.removeAuthData();

  const elements = useRoutes(routes(tokenIsExpired));

  return (
    <div className="App container">
      <div>{elements}</div>
    </div>
  );
}

export default App;
