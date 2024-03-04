import { useRoutes } from "react-router-dom";
import routes, { Route } from "./Routes";

const App = () => {
  return useRoutes(routes as Route[]);
}

export default App;
