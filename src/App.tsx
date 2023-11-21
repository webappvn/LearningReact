import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { routerConfig } from "./routerConfig";

function App() {
  return (
    <Routes>
      {routerConfig.map(({ path, component }) => (
        <Route
          path={path}
          Component={component}
          key={path}
        />
      ))}
    </Routes>
  );
}

export default App;
