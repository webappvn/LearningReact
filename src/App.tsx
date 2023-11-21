import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { routerConfig } from "./routerConfig";

function App() {
  return (
    <Routes>
      {routerConfig.map(({ path, component: Componnet, layout: Layout }) => {
        if (Layout) {
          return (
            <Route
              path={path}
              key={path}
              element={<Layout>{<Componnet />}</Layout>}
            />
          );
        }
        return (
          <Route
            path={path}
            Component={Componnet}
            key={path}
          />
        );
      })}
    </Routes>
  );
}

export default App;
