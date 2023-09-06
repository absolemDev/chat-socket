import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const elements = useRoutes(routes());
  return (
    <div className="App">
      <h1>APP</h1>
      <div>{elements}</div>
    </div>
  );
}

export default App;
